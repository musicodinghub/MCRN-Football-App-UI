import { DarkTheme } from '@react-navigation/native';
const Dark = {
  dark: true,
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    white: '#000000',
    black: '#ffffff',
    primary: '#BB86FC',
    secondary: '#03DAC5',
    grey: '#9d9fa3',
    success: '#38C2B7',
    error: '#E14161',
  },
};

export default Dark;
