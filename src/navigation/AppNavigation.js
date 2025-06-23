import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import SplashScreen from '../screens/splash/SplashScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import OTPScreen from '../screens/auth/OTPScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import HomeScreen from '../screens/home/HomeScreen';

// Import theme
import theme from '../themes';

// Create navigation stacks
const Stack = createStackNavigator();

/**
 * Main App Navigation component
 * Uses React Navigation with static configuration
 */
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash Screen - No header */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        
        {/* Onboarding Screen - No header */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        
        {/* Auth Stack */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="OTP"
          component={OTPScreen}
          options={{
            title: 'Verification',
            headerTintColor: theme.colors.primary,
            headerStyle: {
              backgroundColor: theme.colors.background,
              elevation: 0, // Android
              shadowOpacity: 0, // iOS
              borderBottomWidth: 0,
            },
          }}
        />
        
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            title: 'Business Registration',
            headerTintColor: theme.colors.primary,
            headerStyle: {
              backgroundColor: theme.colors.background,
              elevation: 0, // Android
              shadowOpacity: 0, // iOS
              borderBottomWidth: 0,
            },
          }}
        />
        
        {/* Main App Screens */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
