import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../themes';

/**
 * A container component for section headers
 * 
 * @param {Object} props - Component props
 * @param {string} [props.title] - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {React.ReactNode} [props.rightComponent] - Component to display on the right side
 * @param {Object} [props.style] - Additional custom styles
 * @param {Object} [props.titleStyle] - Custom styles for the title
 * @param {Object} [props.subtitleStyle] - Custom styles for the subtitle
 * @param {React.ReactNode} props.children - Section content
 */
const Section = ({
  title,
  subtitle,
  rightComponent,
  style,
  titleStyle,
  subtitleStyle,
  children,
}) => {
  const hasHeader = title || subtitle || rightComponent;
  
  return (
    <View style={[styles.container, style]}>
      {hasHeader && (
        <View style={styles.headerContainer}>
          <View style={styles.headerTextContainer}>
            {title && (
              <Text 
                variant="h4" 
                style={[styles.title, titleStyle]}
              >
                {title}
              </Text>
            )}
            
            {subtitle && (
              <Text 
                variant="body2" 
                color="textSecondary" 
                style={[styles.subtitle, subtitleStyle]}
              >
                {subtitle}
              </Text>
            )}
          </View>
          
          {rightComponent && (
            <View style={styles.rightContainer}>
              {rightComponent}
            </View>
          )}
        </View>
      )}
      
      <View style={styles.contentContainer}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.lg,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    
  },
  rightContainer: {
    marginLeft: theme.spacing.md,
  },
  contentContainer: {
    
  },
});

export default Section;
