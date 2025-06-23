import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import theme from '../themes';

/**
 * Custom TextInput component with consistent styling
 * 
 * @param {Object} props - Component props
 * @param {string} [props.label] - Input label
 * @param {string} [props.placeholder] - Input placeholder
 * @param {string} [props.value] - Input value
 * @param {Function} [props.onChangeText] - Function called when text changes
 * @param {boolean} [props.error=false] - Whether input has an error
 * @param {string} [props.errorText] - Error message to display
 * @param {boolean} [props.disabled=false] - Whether input is disabled
 * @param {string} [props.helperText] - Helper text to display below input
 * @param {React.ReactNode} [props.leftIcon] - Icon to display at the left of the input
 * @param {React.ReactNode} [props.rightIcon] - Icon to display at the right of the input
 * @param {Function} [props.onRightIconPress] - Function called when right icon is pressed
 * @param {boolean} [props.multiline=false] - Whether input can have multiple lines
 * @param {string} [props.keyboardType='default'] - Keyboard type for the input
 * @param {Object} [props.style] - Additional custom styles
 * @param {Object} [props.inputStyle] - Additional styles for the TextInput component
 * @param {Object} [props.rest] - Other props to pass to TextInput
 */
const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  error = false,
  errorText,
  disabled = false,
  helperText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  multiline = false,
  keyboardType = 'default',
  style,
  inputStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text 
          variant="subtitle2" 
          style={styles.label}
          color={error ? 'error' : 'textPrimary'}
        >
          {label}
        </Text>
      )}
      
      <View 
        style={[
          styles.inputContainer,
          error && styles.inputError,
          disabled && styles.inputDisabled,
          multiline && styles.inputMultiline,
        ]}
      >
        {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
        
        <TextInput
          style={[
            styles.input,
            leftIcon && styles.inputWithLeftIcon,
            rightIcon && styles.inputWithRightIcon,
            multiline && styles.textMultiline,
            inputStyle,
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={theme.colors.gray}
          editable={!disabled}
          multiline={multiline}
          keyboardType={keyboardType}
          {...rest}
        />
        
        {rightIcon && (
          <TouchableOpacity 
            style={styles.rightIconContainer}
            onPress={onRightIconPress}
            disabled={!onRightIconPress}
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      
      {(error && errorText) ? (
        <Text variant="caption" color="error" style={styles.helperText}>
          {errorText}
        </Text>
      ) : helperText ? (
        <Text variant="caption" color="textSecondary" style={styles.helperText}>
          {helperText}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: theme.spacing.md,
  },
  label: {
    marginBottom: theme.spacing.xs,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.spacing.borderRadiusMd,
    backgroundColor: theme.colors.white,
    minHeight: 48,
  },
  input: {
    flex: 1,
    color: theme.colors.textPrimary,
    fontSize: theme.sizes.inputText,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  inputWithLeftIcon: {
    paddingLeft: theme.spacing.xs,
  },
  inputWithRightIcon: {
    paddingRight: theme.spacing.xs,
  },
  leftIconContainer: {
    paddingLeft: theme.spacing.md,
  },
  rightIconContainer: {
    paddingRight: theme.spacing.md,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  inputDisabled: {
    backgroundColor: theme.colors.lightGray,
    borderColor: theme.colors.border,
  },
  inputMultiline: {
    minHeight: 100,
    paddingTop: theme.spacing.md,
  },
  textMultiline: {
    textAlignVertical: 'top',
  },
  helperText: {
    marginTop: theme.spacing.xs,
  },
});

export default Input;
