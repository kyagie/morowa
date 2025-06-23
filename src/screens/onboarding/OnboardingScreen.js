import React, { useState, useRef } from 'react';
import { StyleSheet, View, FlatList, Dimensions, Animated } from 'react-native';
import { Button, Text, Image } from '../../components';
import theme from '../../themes';

// Get screen dimensions
const { width } = Dimensions.get('window');

// Onboarding data
const onboardingData = [
  {
    id: '1',
    title: 'Welcome to Morowa',
    description: 'Your trusted partner for all your pharmacy needs.',
    image: require('../../../assets/icon.png'), // Replace with actual onboarding image
  },
  {
    id: '2',
    title: 'Easy Ordering',
    description: 'Order medicines and healthcare products with just a few taps.',
    image: require('../../../assets/icon.png'), // Replace with actual onboarding image
  },
  {
    id: '3',
    title: 'Fast Delivery',
    description: 'Get your medications delivered right to your doorstep.',
    image: require('../../../assets/icon.png'), // Replace with actual onboarding image
  },
];

/**
 * Onboarding Screen component with swipeable slides
 * 
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object
 */
const OnboardingScreen = ({ navigation }) => {
  // State to track current slide index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Ref for the FlatList
  const slidesRef = useRef(null);
  
  // Animated value for pagination dots
  const scrollX = useRef(new Animated.Value(0)).current;
  
  // Function to handle next slide
  const goToNextSlide = () => {
    if (currentIndex < onboardingData.length - 1) {
      slidesRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      // Navigate to login screen when onboarding is complete
      navigation.replace('Login');
    }
  };
  
  // Function to handle skip
  const handleSkip = () => {
    navigation.replace('Login');
  };

  // Render individual slide
  const renderSlide = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image
          source={item.image}
          width={width * 0.8}
          height={width * 0.8}
          contentFit="contain"
          style={styles.image}
        />
        <Text variant="h2" style={styles.title}>
          {item.title}
        </Text>
        <Text
          variant="body1"
          color="textSecondary"
          style={styles.description}
        >
          {item.description}
        </Text>
      </View>
    );
  };

  // Render pagination dots
  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {onboardingData.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  opacity,
                  backgroundColor:
                    index === currentIndex
                      ? theme.colors.primary
                      : theme.colors.gray,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.skipContainer}>
        <Button
          variant="text"
          label="Skip"
          onPress={handleSkip}
        />
      </View>

      <FlatList
        ref={slidesRef}
        data={onboardingData}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
      />

      {renderPaginationDots()}

      <View style={styles.bottomContainer}>
        <Button
          label={currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
          onPress={goToNextSlide}
          fullWidth
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  skipContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.screenPadding,
  },
  image: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  description: {
    textAlign: 'center',
    maxWidth: '80%',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.spacing.xl,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  bottomContainer: {
    padding: theme.spacing.screenPadding,
    paddingBottom: theme.spacing.screenPadding + 10,
  },
});

export default OnboardingScreen;
