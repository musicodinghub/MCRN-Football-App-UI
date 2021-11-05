import React from 'react';
import { useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme, lightTheme, darkTheme } from 'Themes';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import Stacks from './Stacks';
import TabStacks from './TabStacks';

export default function AppNavigator() {
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme.mode === 'dark' ? darkTheme : lightTheme}>
      {/* Use TabStacks or Stacks below to display the bottom tabs or not */}
      {/* <Stacks /> */}
      <TabStacks />
    </NavigationContainer>
  );
}
