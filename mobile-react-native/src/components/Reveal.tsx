import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Platform, StyleProp, ViewStyle } from 'react-native';

// The native animated module doesn't exist on react-native-web, so using
// useNativeDriver there falls back to JS animation with a console warning.
// Only request the native driver on actual native platforms.
const NATIVE_DRIVER = Platform.OS !== 'web';

/**
 * Reveal: a lightweight, dependency-free entrance animation.
 * Fades + slides a section up as the screen mounts, staggered by `index`.
 * Uses React Native's built-in Animated API only (no reanimated needed).
 */
export function Reveal({
  children,
  index = 0,
  style,
}: {
  children: React.ReactNode;
  index?: number;
  style?: StyleProp<ViewStyle>;
}) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 560,
      delay: 60 + index * 70,
      easing: Easing.bezier(0.16, 1, 0.3, 1),
      useNativeDriver: NATIVE_DRIVER,
    }).start();
  }, [progress, index]);

  const translateY = progress.interpolate({ inputRange: [0, 1], outputRange: [24, 0] });

  return (
    <Animated.View style={[style, { opacity: progress, transform: [{ translateY }] }]}>
      {children}
    </Animated.View>
  );
}

/** Simple press-scale feedback for cards/buttons, Apple-style tactility. */
export function usePressScale(to = 0.97) {
  const scale = useRef(new Animated.Value(1)).current;
  const onPressIn = () =>
    Animated.timing(scale, { toValue: to, duration: 110, useNativeDriver: NATIVE_DRIVER }).start();
  const onPressOut = () =>
    Animated.timing(scale, { toValue: 1, duration: 140, useNativeDriver: NATIVE_DRIVER }).start();
  return { style: { transform: [{ scale }] }, onPressIn, onPressOut };
}
