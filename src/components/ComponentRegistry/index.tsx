import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useFormContext } from '../../context';
import { useNavigation } from '@react-navigation/native';

interface ComponentRegistryType {
  View: typeof View;
  Text: React.FC<{ text: string; style?: object; [key: string]: any }>;
  TextInput: React.FC<{ stateKey: string; style?: object; [key: string]: any }>;
  Button: React.FC<{ title: string; style?: object; onPress?: () => void; navigateTo?: keyof typeof navigation; [key: string]: any }>;
  FlatList: React.FC<{ data: any[]; renderItem: { type: keyof ComponentRegistryType; props: { [key: string]: any; text: string; onPress: string } }; [key: string]: any }>;
}

export const ComponentRegistry: ComponentRegistryType = {
  View: View,
  Text: ({ text, style, ...props }: { text: string; style?: object; [key: string]: any }) => <Text style={style} {...props}>{text}</Text>,
  TextInput: ({ stateKey, style, ...props }: { stateKey: string; style?: object; [key: string]: any }) => {
    const formContext = useFormContext();
    if (!formContext) {
      throw new Error('useFormContext must be used within a FormContext.Provider');
    }
    const { formState, setFormState } = formContext as { formState: { [key: string]: any }, setFormState: (state: { [key: string]: any }) => void };
    return (
      <TextInput
        {...props}
        style={style}
        value={formState[stateKey] || ''}
        onChangeText={(text) => setFormState({ ...formState, [stateKey]: text })}
      />
    );
  },
  Button: ({ title, style, onPress,navigation, navigateTo ,...props}: { title: string; style?: object; onPress?: () => void; navigateTo?: keyof typeof navigation; [key: string]: any }) => {
    const handleAction = (_action: any) => {
      // Define handleAction function here or import it if it's defined elsewhere
    };
    return (
      <TouchableOpacity
        style={style}
        onPress={() => {
          if (navigateTo) {
            navigation.navigate(navigateTo);
          } else if (onPress) {
            handleAction(onPress);
          }
        }}
        {...props}
      >
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    );
  },
  FlatList: ({ data, renderItem, ...props }: { data: any[]; renderItem: { type: keyof typeof ComponentRegistry; props: { [key: string]: any; text: string; onPress: string } }; [key: string]: any }) => {
    const { handleAction } = useNavigation();
    return (
      <FlatList
      keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => {
            const Component = ComponentRegistry[renderItem.type];
            const interpolatedProps = {
                ...renderItem.props,
                text: renderItem.props.text.replace(/{{(.*?)}}/g, (_, key) => {
                    return key.split('.').reduce((obj, key) => obj[key], item);
                }),
                stateKey: renderItem.props.stateKey,
                onPress: () => handleAction(renderItem.props.onPress, item),
            };
          return <Component {...interpolatedProps} />;
        }}
        {...props}
      />
    );
  },
};

