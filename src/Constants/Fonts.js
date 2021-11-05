/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check src/root.js
 */
const customFonts = {
  'Montserrat-Regular': require('Assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Black': require('Assets/fonts/Montserrat-Black.ttf'),
  'Montserrat-Medium': require('Assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-SemiBold': require('Assets/fonts/Montserrat-SemiBold.ttf'),
  'Montserrat-Bold': require('Assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Italic': require('Assets/fonts/Montserrat-Italic.ttf'),
  'OpenSans-Regular': require('Assets/fonts/OpenSans-Regular.ttf'),
  'Montserrat-Italic': require('Assets/fonts/Montserrat-Italic.ttf'),
  'GreatVibes-Regular': require('Assets/fonts/GreatVibes-Regular.ttf'),

  'Inter-Regular': require('Assets/fonts/Inter-Regular.otf'),
  'Inter-SemiBold': require('Assets/fonts/Inter-SemiBold.otf'),
  'SourceSansPro-Regular': require('Assets/fonts/SourceSansPro-Regular.ttf'),
  'SourceSansPro-SemiBold': require('Assets/fonts/SourceSansPro-SemiBold.ttf'),
  'Poppins-Regular': require('Assets/fonts/Poppins-Regular.ttf'),
  'Poppins-SemiBold': require('Assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Medium': require('Assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Bold': require('Assets/fonts/Poppins-Bold.ttf'),
  'Poppins-Black': require('Assets/fonts/Poppins-Black.ttf'),

};
const type = {
  primary: 'Poppins-Regular',
  secondary: 'Inter-Regular',
  black: 'Poppins-Black',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
  semi: 'Poppins-SemiBold',
};

const Fonts = { customFonts, type };

export default Fonts;
