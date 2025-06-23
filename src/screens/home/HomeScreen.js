import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, Image, Section, Button } from '../../components';
import theme from '../../themes';

/**
 * Home Screen - main dashboard for the app
 * 
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 */
const HomeScreen = ({ navigation }) => {
  // Sample categories for pharmacy items
  const categories = [
    { id: '1', name: 'Prescription', icon: '💊' },
    { id: '2', name: 'OTC Medicines', icon: '🩹' },
    { id: '3', name: 'Health & Wellness', icon: '🧴' },
    { id: '4', name: 'Medical Supplies', icon: '🩺' },
  ];
  
  // Sample featured products
  const featuredProducts = [
    { id: '1', name: 'Paracetamol', price: '5.99', image: require('../../../assets/icon.png') },
    { id: '2', name: 'Vitamin C', price: '12.99', image: require('../../../assets/icon.png') },
    { id: '3', name: 'First Aid Kit', price: '24.99', image: require('../../../assets/icon.png') },
  ];
  
  // Sample recent orders
  const recentOrders = [
    { id: '1', orderNumber: 'ORD-001', date: '2025-06-20', status: 'Delivered' },
    { id: '2', orderNumber: 'ORD-002', date: '2025-06-22', status: 'Processing' },
  ];

  // Render category item
  const renderCategoryItem = (category) => (
    <TouchableOpacity key={category.id} style={styles.categoryItem}>
      <View style={styles.categoryIconContainer}>
        <Text style={styles.categoryIcon}>{category.icon}</Text>
      </View>
      <Text variant="body2" style={styles.categoryName}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
  
  // Render product item
  const renderProductItem = (product) => (
    <TouchableOpacity key={product.id} style={styles.productItem}>
      <Card style={styles.productCard}>
        <Image
          source={product.image}
          width={80}
          height={80}
          contentFit="contain"
          style={styles.productImage}
        />
        <Text variant="subtitle2" style={styles.productName}>
          {product.name}
        </Text>
        <Text variant="h5" color="primary" style={styles.productPrice}>
          ${product.price}
        </Text>
      </Card>
    </TouchableOpacity>
  );
  
  // Render order item
  const renderOrderItem = (order) => (
    <Card key={order.id} style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text variant="subtitle2">Order #{order.orderNumber}</Text>
        <Text
          variant="caption"
          color={order.status === 'Delivered' ? 'success' : 'info'}
          style={styles.orderStatus}
        >
          {order.status}
        </Text>
      </View>
      <Text variant="body2" color="textSecondary">
        Date: {order.date}
      </Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text variant="h4">Welcome to</Text>
            <Text variant="h2" color="primary">
              Morowa Pharmacy
            </Text>
          </View>
          <TouchableOpacity>
            <View style={styles.profileIcon}>
              <Text>👤</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Quick Action Buttons */}
        <View style={styles.quickActions}>
          <Button
            label="Order Medicines"
            leftIcon={<Text>🛒</Text>}
            style={styles.actionButton}
          />
          <Button
            label="Refill Prescription"
            leftIcon={<Text>📝</Text>}
            variant="outline"
            style={styles.actionButton}
          />
        </View>
        
        {/* Categories */}
        <Section
          title="Categories"
          rightComponent={
            <TouchableOpacity>
              <Text variant="body2" color="primary">
                See All
              </Text>
            </TouchableOpacity>
          }
        >
          <View style={styles.categoriesContainer}>
            {categories.map(renderCategoryItem)}
          </View>
        </Section>
        
        {/* Featured Products */}
        <Section
          title="Featured Products"
          rightComponent={
            <TouchableOpacity>
              <Text variant="body2" color="primary">
                See All
              </Text>
            </TouchableOpacity>
          }
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}
          >
            {featuredProducts.map(renderProductItem)}
          </ScrollView>
        </Section>
        
        {/* Recent Orders */}
        <Section
          title="Recent Orders"
          rightComponent={
            <TouchableOpacity>
              <Text variant="body2" color="primary">
                See All
              </Text>
            </TouchableOpacity>
          }
        >
          {recentOrders.map(renderOrderItem)}
        </Section>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.screenPadding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
    marginTop: theme.spacing.lg,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.shadows.small,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  actionButton: {
    flex: 0.48,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '23%',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  categoryIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.surfaceLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
    ...theme.shadows.small,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryName: {
    textAlign: 'center',
  },
  productsContainer: {
    paddingVertical: theme.spacing.sm,
  },
  productItem: {
    width: 140,
    marginRight: theme.spacing.lg,
  },
  productCard: {
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  productImage: {
    marginBottom: theme.spacing.sm,
  },
  productName: {
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
  productPrice: {
    
  },
  orderCard: {
    marginBottom: theme.spacing.md,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  orderStatus: {
    fontWeight: theme.weights.bold,
  },
});

export default HomeScreen;
