import React from 'react'
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { Text } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />

    </NavigationContainer>
  )
}

export default App
