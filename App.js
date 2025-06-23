import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation/AppNavigation';
import theme from './src/themes';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" backgroundColor={theme.colors.background} />
      <AppNavigation />
    </SafeAreaProvider>
  );
}
