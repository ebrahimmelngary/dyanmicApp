import React from 'react';

export const FormContext = React.createContext({});
export const useFormContext = () => {
    return React.useContext(FormContext);
};

export const NavigationContext = React.createContext({});
export const useNavigationContext = () => {
    return React.useContext(NavigationContext);
};
