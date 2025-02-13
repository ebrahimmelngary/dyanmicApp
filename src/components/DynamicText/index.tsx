import React from 'react';
import { Text } from 'react-native';

const DynamicText = ({ text, style, ...props }:
{ text: string; style?: object; [key: string]: any }) => {
  return <Text style={style} {...props}>{text}</Text>;
};

export default React.memo(DynamicText);
