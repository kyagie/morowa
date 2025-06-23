/**
 * Typography configuration for Morowa app
 */

// Font families
export const FONTS = {
  regular: 'System',      // Default system font (will use San Francisco on iOS, Roboto on Android)
  medium: 'System',
  bold: 'System',
  light: 'System',
};

// Font sizes for different elements
export const SIZES = {
  // Text sizes
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  
  // Heading sizes
  h1: 30,
  h2: 24,
  h3: 20,
  h4: 18,
  h5: 16,
  
  // Specific element sizes
  title: 22,
  subtitle: 16,
  buttonText: 16,
  inputText: 16,
  captionText: 12,
  
  // Line heights
  lineHeightXs: 14,
  lineHeightSm: 18,
  lineHeightMd: 22,
  lineHeightLg: 24,
  lineHeightXl: 28,
  lineHeightXxl: 30,
};

// Font weights
export const WEIGHTS = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
};

// Typography styles
export const TYPOGRAPHY = {
  h1: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h1,
    fontWeight: WEIGHTS.bold,
    lineHeight: SIZES.lineHeightXxl,
  },
  h2: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h2,
    fontWeight: WEIGHTS.bold,
    lineHeight: SIZES.lineHeightXl,
  },
  h3: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h3,
    fontWeight: WEIGHTS.bold,
    lineHeight: SIZES.lineHeightLg,
  },
  h4: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.h4,
    fontWeight: WEIGHTS.semiBold,
    lineHeight: SIZES.lineHeightLg,
  },
  h5: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.h5,
    fontWeight: WEIGHTS.semiBold,
    lineHeight: SIZES.lineHeightMd,
  },
  subtitle1: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.subtitle,
    fontWeight: WEIGHTS.medium,
    lineHeight: SIZES.lineHeightMd,
  },
  subtitle2: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.subtitle,
    fontWeight: WEIGHTS.regular,
    lineHeight: SIZES.lineHeightMd,
  },
  body1: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.md,
    fontWeight: WEIGHTS.regular,
    lineHeight: SIZES.lineHeightMd,
  },
  body2: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.sm,
    fontWeight: WEIGHTS.regular,
    lineHeight: SIZES.lineHeightSm,
  },
  button: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.buttonText,
    fontWeight: WEIGHTS.medium,
    lineHeight: SIZES.lineHeightMd,
  },
  caption: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.captionText,
    fontWeight: WEIGHTS.regular,
    lineHeight: SIZES.lineHeightSm,
  },
};

export default { FONTS, SIZES, WEIGHTS, TYPOGRAPHY };
