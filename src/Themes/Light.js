import { DefaultTheme } from '@react-navigation/native';
const Light = {
  dark: false,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: '#ffffff',
    black: '#000000',
    primary: '#486c86',
    secondary: '#8dd9d5',
    grey: '#9d9fa3',
    success: '#38C2B7',
    error: '#E14161',
  },
};

export default Light;
