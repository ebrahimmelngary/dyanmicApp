import React from 'react';
import {
  View,
} from 'react-native';
import DynamicText from '../DynamicText';
import DynamicTextInput from '../DynamicTextInput';
import DynamicButton from '../DynamicButton';
import DynamicList from '../DynamicList';

interface ComponentRegistryType {
  View: typeof View;
  Text: React.FC<{ text: string; style?: object; [key: string]: any }>;
  TextInput: React.FC<{ stateKey: string; style?: object; [key: string]: any }>;
  Button: React.FC<{ title: string; style?: object; onPress?: () => void; navigateTo?: string; [key: string]: any }>;
  FlatList: React.FC<{ data: any[]; handleAction: (action: string, item: any) => void; renderItem: { type: keyof ComponentRegistryType; props: { [key: string]: any; text: string; onPress: string } }; [key: string]: any }>;
}

export const ComponentRegistry: ComponentRegistryType = {
  View: View,
  Text:DynamicText,
  TextInput: DynamicTextInput,
  Button:DynamicButton,
  FlatList: DynamicList,
};

