import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../themes';

/**
 * Card component for containing related content
 * 
 * @param {Object} props - Component props
 * @param {string} [props.title] - Card title
 * @param {React.ReactNode} [props.titleRight] - Component to display on the right side of the title
 * @param {boolean} [props.elevated=true] - Whether to show elevation shadow
 * @param {string} [props.borderColor] - Custom border color
 * @param {Object} [props.style] - Additional custom styles
 * @param {Object} [props.contentStyle] - Custom styles for the content container
 * @param {React.ReactNode} props.children - Card content
 */
const Card = ({
  title,
  titleRight,
  elevated = true,
  borderColor,
  style,
  contentStyle,
  children,
}) => {
  return (
    <View 
      style={[
        styles.container,
        elevated && theme.shadows.small,
        borderColor && { borderColor },
        style,
      ]}
    >
      {title && (
        <View style={styles.titleContainer}>
          <Text variant="h5" style={styles.title}>
            {title}
          </Text>
          {titleRight && (
            <View style={styles.titleRight}>
              {titleRight}
            </View>
          )}
        </View>
      )}
      
      <View style={[styles.contentContainer, contentStyle]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.spacing.borderRadiusMd,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    overflow: 'hidden',
    marginBottom: theme.spacing.md,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLight,
  },
  title: {
    flex: 1,
  },
  titleRight: {
    marginLeft: theme.spacing.md,
  },
  contentContainer: {
    padding: theme.spacing.lg,
  },
});

export default Card;
