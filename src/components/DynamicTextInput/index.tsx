import React from 'react';
import { TextInput } from 'react-native';
import { useFormContext } from '../../context';

const DynamicTextInput = ({ stateKey, style, ...props }: { stateKey: string; style?: object; [key: string]: any }) => {
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
  };

  export default React.memo(DynamicTextInput);
