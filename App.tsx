/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { appConfig } from './appConfig';
import DynamicPageBuilder from './src/Screens/DynamicPageBuilder';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {

  const mockNavigation = {
    navigate: (screenName:string) => console.log(`Navigating to ${screenName}`),
  };

  const navigationRef = createNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>

    <DynamicPageBuilder
      config={appConfig}
      navigation={mockNavigation}
      />
      </NavigationContainer>
  );
}


export default App;
