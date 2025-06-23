import React from 'react';
import { 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator,
  View,
} from 'react-native';
import Text from './Text';
import theme from '../themes';

/**
 * Reusable Button component with various styles and loading state
 * 
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button style variant (primary, secondary, outline, text)
 * @param {string} [props.size='medium'] - Button size (small, medium, large)
 * @param {Function} props.onPress - Function to call on button press
 * @param {string} [props.label] - Button text
 * @param {React.ReactNode} [props.leftIcon] - Icon to display before label
 * @param {React.ReactNode} [props.rightIcon] - Icon to display after label
 * @param {boolean} [props.loading=false] - Whether to show a loading indicator
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {boolean} [props.fullWidth=false] - Whether the button should take full width
 * @param {Object} [props.style] - Additional custom styles
 * @param {Object} [props.textStyle] - Custom styles for the button text
 * @param {Object} [props.rest] - Other props to pass to TouchableOpacity
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  onPress,
  label,
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  style,
  textStyle,
  ...rest
}) => {
  // Determine size-based styles
  const sizeStyles = {
    small: {
      button: styles.buttonSmall,
      text: styles.textSmall,
      padding: theme.spacing.sm,
    },
    medium: {
      button: styles.buttonMedium,
      text: styles.textMedium,
      padding: theme.spacing.md,
    },
    large: {
      button: styles.buttonLarge,
      text: styles.textLarge,
      padding: theme.spacing.lg,
    },
  }[size];

  // Determine variant-based styles
  const variantStyles = {
    primary: {
      button: styles.buttonPrimary,
      text: styles.textPrimary,
      loader: theme.colors.white,
    },
    secondary: {
      button: styles.buttonSecondary,
      text: styles.textSecondary,
      loader: theme.colors.white,
    },
    outline: {
      button: styles.buttonOutline,
      text: styles.textOutline,
      loader: theme.colors.primary,
    },
    text: {
      button: styles.buttonText,
      text: styles.textButtonText,
      loader: theme.colors.primary,
    },
  }[variant];

  // Determine disabled styles
  const disabledStyles = disabled ? styles.buttonDisabled : {};
  const disabledTextStyles = disabled ? styles.textDisabled : {};
  
  // Determine width style
  const widthStyle = fullWidth ? styles.fullWidth : {};

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={!loading && !disabled ? onPress : null}
      style={[
        styles.button,
        sizeStyles.button,
        variantStyles.button,
        disabledStyles,
        widthStyle,
        style,
      ]}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variantStyles.loader} 
        />
      ) : (
        <View style={styles.contentContainer}>
          {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
          
          {label && (
            <Text
              style={[
                sizeStyles.text,
                variantStyles.text,
                disabledTextStyles,
                textStyle,
              ]}
            >
              {label}
            </Text>
          )}
          
          {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.spacing.borderRadiusMd,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: theme.spacing.sm,
  },
  iconRight: {
    marginLeft: theme.spacing.sm,
  },
  
  // Size variants
  buttonSmall: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    minHeight: 32,
  },
  buttonMedium: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    minHeight: 44,
  },
  buttonLarge: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    minHeight: 52,
  },
  
  // Text size variants
  textSmall: {
    ...theme.typography.button,
    fontSize: theme.sizes.sm,
  },
  textMedium: {
    ...theme.typography.button,
    fontSize: theme.sizes.md,
  },
  textLarge: {
    ...theme.typography.button,
    fontSize: theme.sizes.lg,
  },
  
  // Variant styles - Primary
  buttonPrimary: {
    backgroundColor: theme.colors.primary,
  },
  textPrimary: {
    color: theme.colors.white,
  },
  
  // Variant styles - Secondary
  buttonSecondary: {
    backgroundColor: theme.colors.secondary,
  },
  textSecondary: {
    color: theme.colors.white,
  },
  
  // Variant styles - Outline
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  textOutline: {
    color: theme.colors.primary,
  },
  
  // Variant styles - Text
  buttonText: {
    backgroundColor: 'transparent',
    paddingHorizontal: theme.spacing.sm,
  },
  textButtonText: {
    color: theme.colors.primary,
  },
  
  // Disabled state
  buttonDisabled: {
    backgroundColor: theme.colors.mediumGray,
    borderColor: theme.colors.mediumGray,
  },
  textDisabled: {
    color: theme.colors.darkGray,
  },
});

export default Button;
