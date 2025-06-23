import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import SplashScreen from '../screens/splash/SplashScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import OTPScreen from '../screens/auth/OTPScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen';
import HomeScreen from '../screens/home/HomeScreen';
import OrdersScreen from '../screens/orders/OrdersScreen';
import SearchScreen from '../screens/search/SearchScreen';
import MoreScreen from '../screens/more/MoreScreen';

// Import theme
import theme from '../themes';

// Create navigation stacks
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Main Tab Navigation component
 * Contains the bottom tab navigation with Home, Orders, Search and More
 */
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'OrdersTab') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'SearchTab') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'MoreTab') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.background,
          elevation: 0, // Android
          shadowOpacity: 0, // iOS
          borderBottomWidth: 0,
        },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        options={{ 
          title: 'Home',
          headerTitle: 'Morowa',
        }}
      />
      <Tab.Screen 
        name="OrdersTab" 
        component={OrdersScreen} 
        options={{ 
          title: 'Orders',
          headerTitle: 'My Orders',
        }}
      />
      <Tab.Screen 
        name="SearchTab" 
        component={SearchScreen} 
        options={{ 
          title: 'Search',
          headerTitle: 'Find Products', 
        }}
      />
      <Tab.Screen 
        name="MoreTab" 
        component={MoreScreen} 
        options={{ 
          title: 'More',
          headerTitle: 'More Options', 
        }}
      />
    </Tab.Navigator>
  );
};

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
        
        {/* Main App Screens with Bottom Tabs */}
        <Stack.Screen
          name="MainApp"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
