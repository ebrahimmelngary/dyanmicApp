/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { appConfig } from './appConfig';
import DynamicPageBuilder from './src/Screens/DynamicPageBuilder';

function App(): React.JSX.Element {

  const mockNavigation = {
    navigate: (screenName:string) => console.log(`Navigating to ${screenName}`),
  };

  return (
    <DynamicPageBuilder
      config={appConfig}
      navigation={mockNavigation}
    />
  );
}


export default App;
