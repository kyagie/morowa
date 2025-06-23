/**
 * Spacing for consistent layout throughout the Morowa app
 */

// Base unit for spacing calculations
const BASE_UNIT = 4;

// Spacing scale
export const SPACING = {
  // Basic spacing units
  xs: BASE_UNIT, // 4
  sm: BASE_UNIT * 2, // 8
  md: BASE_UNIT * 3, // 12
  lg: BASE_UNIT * 4, // 16
  xl: BASE_UNIT * 6, // 24
  xxl: BASE_UNIT * 8, // 32
  xxxl: BASE_UNIT * 12, // 48
  
  // Element-specific spacing
  screenPadding: BASE_UNIT * 4, // 16
  contentPadding: BASE_UNIT * 4, // 16
  sectionPadding: BASE_UNIT * 6, // 24
  cardPadding: BASE_UNIT * 4, // 16
  buttonPadding: BASE_UNIT * 3, // 12
  inputPadding: BASE_UNIT * 3, // 12
  iconPadding: BASE_UNIT * 2, // 8
  
  // Margins
  elementMargin: BASE_UNIT * 4, // 16
  listItemMargin: BASE_UNIT * 2, // 8
  sectionMargin: BASE_UNIT * 6, // 24
  
  // Gaps for Flex and Grid layouts
  gridGap: BASE_UNIT * 3, // 12
  
  // Border radius
  borderRadiusSm: BASE_UNIT, // 4
  borderRadiusMd: BASE_UNIT * 2, // 8
  borderRadiusLg: BASE_UNIT * 3, // 12
  borderRadiusXl: BASE_UNIT * 6, // 24
  borderRadiusPill: 100, // Pill shape (large value for rounded ends)
};

export default SPACING;
