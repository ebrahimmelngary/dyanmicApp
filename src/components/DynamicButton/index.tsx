import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import DynamicText from '../DynamicText';
import { useNavigation } from '@react-navigation/native';

 const DynamicButton = ({ title, style, onPress, navigateTo ,...props}: { title: string; style?: object; onPress?: () => void; navigateTo?: keyof typeof navigation; [key: string]: any }) => {
    const handleAction = (_action: any) => {
      Alert.alert('Action', _action);
      // Define handleAction function here or import it if it's defined elsewhere
    };
const navigation = useNavigation();
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
        <DynamicText text={title} style={style} {...props}/>
      </TouchableOpacity>
    );
  };

  export default React.memo(DynamicButton);
