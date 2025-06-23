import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, Text } from '../../components';
import theme from '../../themes';

/**
 * Splash Screen component that displays on app startup
 * 
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 */
const SplashScreen = ({ navigation }) => {
  // Navigate to onboarding after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000); // 2 seconds splash screen display
    
    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/icon.png')}
          width={150}
          height={150}
          contentFit="contain"
        />
      </View>
      
      <Text variant="h1" style={styles.title}>Morowa</Text>
      <Text variant="subtitle1" color="textSecondary" style={styles.subtitle}>
        Your trusted pharmacy partner
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    padding: theme.spacing.screenPadding,
  },
  logoContainer: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    marginBottom: theme.spacing.sm,
    color: theme.colors.primary,
  },
  subtitle: {
    textAlign: 'center',
  },
});

export default SplashScreen;
