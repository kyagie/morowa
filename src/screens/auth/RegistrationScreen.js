import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text, Button, Input, Card } from '../../components';
import { useForm } from '../../hooks';
import theme from '../../themes';

/**
 * Registration Screen for new businesses
 * 
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 */
const RegistrationScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Form handling with react-hook-form
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      businessName: '',
      tin: '',
      email: '',
      contactPersonName: '',
      contactPersonPhone: '',
      contactPersonEmail: '',
    },
  });
  
  // Handle registration form submission
  const onSubmit = (data) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Navigate to home screen after successful registration
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
      
      // API integration would go here
      // Example:
      // try {
      //   const response = await businessService.register(data);
      //   navigation.reset({
      //     index: 0,
      //     routes: [{ name: 'Home' }],
      //   });
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
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Text variant="h2" style={styles.title}>Business Registration</Text>
          <Text variant="body1" color="textSecondary" style={styles.subtitle}>
            Complete your business details to get started
          </Text>
        </View>
        
        <Card title="Business Information" style={styles.card}>
          <Input
            label="Business Name"
            placeholder="Enter your business name"
            control={control}
            name="businessName"
            rules={{
              required: 'Business name is required',
            }}
            error={!!errors.businessName}
            errorText={errors.businessName?.message}
          />
          
          <Input
            label="Tax Identification Number (TIN)"
            placeholder="Enter your TIN"
            control={control}
            name="tin"
            rules={{
              required: 'TIN is required',
              pattern: {
                value: /^[0-9]{9,12}$/,
                message: 'Please enter a valid TIN',
              },
            }}
            error={!!errors.tin}
            errorText={errors.tin?.message}
          />
          
          <Input
            label="Business Email"
            placeholder="Enter your business email"
            keyboardType="email-address"
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            }}
            error={!!errors.email}
            errorText={errors.email?.message}
          />
        </Card>
        
        <Card title="Contact Person" style={styles.card}>
          <Input
            label="Contact Person Name"
            placeholder="Enter contact person name"
            control={control}
            name="contactPersonName"
            rules={{
              required: 'Contact person name is required',
            }}
            error={!!errors.contactPersonName}
            errorText={errors.contactPersonName?.message}
          />
          
          <Input
            label="Contact Person Phone"
            placeholder="Enter contact person phone"
            keyboardType="phone-pad"
            control={control}
            name="contactPersonPhone"
            rules={{
              required: 'Contact person phone is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Please enter a valid 10-digit phone number',
              },
            }}
            error={!!errors.contactPersonPhone}
            errorText={errors.contactPersonPhone?.message}
          />
          
          <Input
            label="Contact Person Email"
            placeholder="Enter contact person email"
            keyboardType="email-address"
            control={control}
            name="contactPersonEmail"
            rules={{
              required: 'Contact person email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            }}
            error={!!errors.contactPersonEmail}
            errorText={errors.contactPersonEmail?.message}
          />
        </Card>
        
        <View style={styles.buttonContainer}>
          <Button
            label="Complete Registration"
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
            fullWidth
          />
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: theme.spacing.screenPadding,
    paddingBottom: theme.spacing.screenPadding * 2,
  },
  headerContainer: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    
  },
  card: {
    marginBottom: theme.spacing.lg,
  },
  buttonContainer: {
    marginTop: theme.spacing.lg,
  },
});

export default RegistrationScreen;
