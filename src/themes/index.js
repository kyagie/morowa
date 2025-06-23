import COLORS from './colors';
import SPACING from './spacing';
import { FONTS, SIZES, WEIGHTS, TYPOGRAPHY } from './typography';

// Theme object that combines all theme elements
const theme = {
  colors: COLORS,
  spacing: SPACING,
  fonts: FONTS,
  sizes: SIZES,
  weights: WEIGHTS,
  typography: TYPOGRAPHY,
  
  // Shadow styles for elevation
  shadows: {
    small: {
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    medium: {
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
    large: {
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
  },
  
  // Border styles
  borders: {
    thin: {
      borderWidth: 1,
      borderColor: COLORS.border,
    },
    medium: {
      borderWidth: 2,
      borderColor: COLORS.border,
    },
    accent: {
      borderWidth: 2,
      borderColor: COLORS.primary,
    },
  },
};

export default theme;
