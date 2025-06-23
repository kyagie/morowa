import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../components';
import theme from '../../themes';

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="h1" style={styles.text}>Orders Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.primary,
  },
});

export default OrdersScreen;
