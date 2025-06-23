import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import theme from '../themes';

/**
 * Custom Text component with consistent styling based on the app's theme
 * 
 * @param {Object} props - Component props
 * @param {string} [props.variant='body1'] - Typography variant from theme
 * @param {string} [props.color='textPrimary'] - Text color from theme
 * @param {Object} [props.style] - Additional custom styles
 * @param {React.ReactNode} props.children - Text content
 * @param {Object} [props.rest] - Other props to pass to RNText
 */
const Text = ({
  variant = 'body1',
  color = 'textPrimary',
  style,
  children,
  ...rest
}) => {
  // Get typography styles from theme
  const variantStyle = theme.typography[variant] || theme.typography.body1;
  
  // Get color from theme
  const textColor = theme.colors[color] || theme.colors.textPrimary;
  
  return (
    <RNText
      style={[
        styles.text,
        variantStyle,
        { color: textColor },
        style, // Custom styles passed as props
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    // Base text styles that apply to all variants
  },
});

export default Text;
