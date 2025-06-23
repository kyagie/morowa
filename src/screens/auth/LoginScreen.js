import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text, Button, Input, Image } from '../../components';
import { useForm } from '../../hooks';
import theme from '../../themes';

/**
 * Login Screen component for user authentication
 * 
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 */
const LoginScreen = ({ navigation }) => {
  // Loading state for login button
  const [isLoading, setIsLoading] = useState(false);
  
  // Form handling with react-hook-form
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      phoneNumber: '',
    },
  });
  
  // Handle login form submission
  const onSubmit = (data) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Navigate to OTP verification screen with phone number
      navigation.navigate('OTP', { phoneNumber: data.phoneNumber });
      
      // API integration would go here
      // Example:
      // try {
      //   const response = await authService.requestOtp(data.phoneNumber);
      //   navigation.navigate('OTP', { phoneNumber: data.phoneNumber });
      // } catch (error) {
      //   // Handle error
      // } finally {
      //   setIsLoading(false);
      // }
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/icon.png')}
            width={100}
            height={100}
            contentFit="contain"
          />
        </View>
        
        <View style={styles.headerContainer}>
          <Text variant="h1" style={styles.title}>Welcome Back</Text>
          <Text variant="body1" color="textSecondary" style={styles.subtitle}>
            Sign in to continue to your account
          </Text>
        </View>
        
        <View style={styles.formContainer}>
          <Input
            label="Phone Number"
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            control={control}
            name="phoneNumber"
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Please enter a valid 10-digit phone number',
              },
            }}
            error={!!errors.phoneNumber}
            errorText={errors.phoneNumber?.message}
          />
          
          <Button
            label="Continue"
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
            fullWidth
            style={styles.loginButton}
          />
        </View>
        
        <View style={styles.footerContainer}>
          <Text variant="body2" color="textSecondary">
            By continuing, you agree to our{' '}
            <Text variant="body2" color="primary">Terms of Service</Text>
            {' '}and{' '}
            <Text variant="body2" color="primary">Privacy Policy</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: theme.spacing.screenPadding,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  headerContainer: {
    marginBottom: theme.spacing.xxl,
  },
  title: {
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    marginBottom: theme.spacing.lg,
  },
  formContainer: {
    marginBottom: theme.spacing.xxl,
  },
  loginButton: {
    marginTop: theme.spacing.lg,
  },
  footerContainer: {
    alignItems: 'center',
  },
});

export default LoginScreen;
