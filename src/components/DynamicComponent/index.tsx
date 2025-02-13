import React from 'react';
import { StyleSheet } from 'react-native';
import { ComponentRegistry } from '../ComponentRegistry';

interface DynamicComponentProps {
  type: keyof typeof ComponentRegistry;
  props?: any;
  children?: any;
  navigation?: any;
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ type, props = {}, children, navigation }) => {
  const Component = ComponentRegistry[type];
  if (!Component) {
    console.warn(`Component type "${type}" not found in registry`);
    return null;
  }

  const processedProps = {
    ...props,
    style: props.style ? StyleSheet.create({ dynamic: props.style }).dynamic : {},
  };

  return (
    <Component {...processedProps}>
      {children?.map((child: any, index: number) => (
        <DynamicComponent key={index} {...child} navigation={navigation} />
      ))}
    </Component>
  );
};

export default DynamicComponent;
