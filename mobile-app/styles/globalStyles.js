// styles/globalStyles.js
import { StyleSheet } from 'react-native';

export const COLORS = {
  white: '#fff',
  gradientStart: '#05225E',
  gradientEnd: '#295591',
};

export const globalStyles = StyleSheet.create({
  pageTitle: {
    paddingVertical: 5,
    paddingHorizontal: 0,
    color: COLORS.white,
    fontSize: 21,
    fontWeight: 500,
    textAlign: 'center',
    backgroundColor: COLORS.gradientStart, // fallback if gradient isn't used
  },
});
