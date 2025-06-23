import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, TextInput, Keyboard } from 'react-native';
import { Text, Button, Image } from '../../components';
import theme from '../../themes';

/**
 * OTP verification screen
 * 
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 * @param {Object} props.route - Route object with params
 */
const OTPScreen = ({ navigation, route }) => {
  // Get phone number from route params
  const { phoneNumber } = route.params || { phoneNumber: '' };
  
  // State for OTP digits
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);
  
  // Refs for OTP input fields
  const inputRefs = Array(4)
    .fill(0)
    .map((_, index) => useRef(null));
  
  // Timer for resend cooldown
  useEffect(() => {
    let timer;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
    }
    
    return () => clearTimeout(timer);
  }, [countdown, resendDisabled]);
  
  // Handle OTP input change
  const handleOtpChange = (text, index) => {
    // Allow only digits
    if (!/^[0-9]?$/.test(text)) return;
    
    // Update OTP array
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    
    // Auto-focus next input if digit entered
    if (text && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };
  
  // Handle backspace press
  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      // Focus previous input when backspace is pressed on empty input
      inputRefs[index - 1].current.focus();
    }
  };

  // Handle OTP submission
  const handleVerifyOtp = () => {
    // Check if OTP is complete
    if (otp.join('').length !== 4) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Check if it's a new business (for demo purposes, check if OTP is "1234")
      if (otp.join('') === '1234') {
        // Navigate to registration for new business
        navigation.navigate('Registration');
      } else {
        // Navigate to main app with bottom tabs
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainApp' }],
        });
      }
      
      // API integration would go here
      // Example:
      // try {
      //   const response = await authService.verifyOtp(phoneNumber, otp.join(''));
      //   if (response.isNewBusiness) {
      //     navigation.navigate('Registration');
      //   } else {
      //     navigation.reset({
      //       index: 0,
      //       routes: [{ name: 'MainApp' }],
      //     });
      //   }
      // } catch (error) {
      //   // Handle error
      // } finally {
      //   setIsLoading(false);
      // }
    }, 1500);
  };
  
  // Handle OTP resend
  const handleResendOtp = () => {
    // Reset OTP fields
    setOtp(['', '', '', '']);
    
    // Focus first input
    inputRefs[0].current.focus();
    
    // Disable resend button and start countdown
    setResendDisabled(true);
    setCountdown(30);
    
    // API integration would go here
    // Example:
    // try {
    //   await authService.requestOtp(phoneNumber);
    // } catch (error) {
    //   // Handle error
    // }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
    >
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text variant="h3" style={styles.title}>Verify Your Number</Text>
          <Text variant="body1" color="textSecondary" style={styles.subtitle}>
            We've sent a verification code to {phoneNumber}
          </Text>
        </View>
        
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <View key={index} style={styles.otpInputContainer}>
              <TextInput
                ref={inputRefs[index]}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                autoFocus={index === 0}
              />
            </View>
          ))}
        </View>
        
        <Button
          label="Verify"
          onPress={handleVerifyOtp}
          loading={isLoading}
          disabled={otp.join('').length !== 4}
          fullWidth
          style={styles.verifyButton}
        />
        
        <View style={styles.resendContainer}>
          <Text variant="body2" color="textSecondary">
            Didn't receive the code?{' '}
          </Text>
          {resendDisabled ? (
            <Text variant="body2" color="textSecondary">
              Resend in {countdown}s
            </Text>
          ) : (
            <Text
              variant="body2"
              color="primary"
              style={styles.resendText}
              onPress={handleResendOtp}
            >
              Resend
            </Text>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.spacing.screenPadding,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: theme.spacing.xxl,
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xxl,
  },
  otpInputContainer: {
    width: 60,
    height: 60,
    borderRadius: theme.spacing.borderRadiusMd,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: theme.sizes.h2,
    fontWeight: theme.weights.bold,
    color: theme.colors.textPrimary,
  },
  verifyButton: {
    marginBottom: theme.spacing.xl,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    fontWeight: theme.weights.medium,
  },
});

export default OTPScreen;
