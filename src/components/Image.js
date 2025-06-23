import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image as ExpoImage } from 'expo-image';
import theme from '../themes';

/**
 * Custom Image component using Expo Image for optimized performance
 * 
 * @param {Object} props - Component props
 * @param {string|number} props.source - Image source (uri for remote images, require for local)
 * @param {string} [props.contentFit='cover'] - How the image should fit the container
 * @param {number|string} [props.width] - Image width
 * @param {number|string} [props.height] - Image height
 * @param {Object} [props.style] - Additional custom styles
 * @param {boolean} [props.rounded] - Whether to apply border radius
 * @param {number} [props.borderRadius] - Custom border radius value
 * @param {boolean} [props.withBorder] - Whether to apply a border
 * @param {string} [props.placeholder] - Placeholder image or blurhash
 * @param {Object} [props.rest] - Other props to pass to ExpoImage
 */
const Image = ({
  source,
  contentFit = 'cover',
  width,
  height,
  style,
  rounded = false,
  borderRadius,
  withBorder = false,
  placeholder,
  ...rest
}) => {
  // Determine border radius based on props
  const borderRadiusValue = borderRadius 
    ? borderRadius 
    : rounded 
      ? theme.spacing.borderRadiusMd 
      : 0;
  
  // Prepare border style if needed
  const borderStyle = withBorder ? theme.borders.thin : {};
  
  // Convert number source (require) to object format expected by ExpoImage
  const imageSource = typeof source === 'number' 
    ? source 
    : { uri: source };
  
  // Placeholder setup
  const placeholderContent = placeholder 
    ? { placeholder: placeholder, contentFit: 'cover' } 
    : {};
  
  return (
    <View style={[styles.container, borderStyle, { borderRadius: borderRadiusValue }]}>
      <ExpoImage
        source={imageSource}
        contentFit={contentFit}
        transition={300}
        style={[
          styles.image,
          { 
            width: width, 
            height: height,
            borderRadius: borderRadiusValue,
          },
          style,
        ]}
        {...placeholderContent}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    backgroundColor: theme.colors.mediumGray + '20', // Light placeholder color
  },
});

export default Image;
