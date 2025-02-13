import React, { useCallback } from 'react';
import { ComponentRegistry } from '../ComponentRegistry';
import { FlatList } from 'react-native';

const DynamicList = ({ data, handleAction, ...props }: { data: any[]; handleAction: (action: string, item: any) => void; [key: string]: any }) => {

  const KEY_EXTRACTOR = (item: { id: string }) => item.id;

  const renderComponent = useCallback(({ item }: { item: any }) => {
    const { type, props: renderItemProps } = item.renderItem;
    const Component = ComponentRegistry[type as keyof typeof ComponentRegistry];
    const interpolatedProps = {
        ...renderItemProps,
        text: renderItemProps.text.replace(/{{(.*?)}}/g, (_: string, key: string) => {
            return key.split('.').reduce((obj: any, k: string) => obj[k], item);
        }),
        title: renderItemProps.title,
        stateKey: renderItemProps.stateKey,
        onPress: () => handleAction(renderItemProps.onPress, item),
    };
    return <Component {...interpolatedProps} />;
},[handleAction]);

    return (
      <FlatList
      data={data}
      renderItem={renderComponent}
      keyExtractor={KEY_EXTRACTOR}
      {...props}
      />
    );
  };


  export default React.memo(DynamicList);
