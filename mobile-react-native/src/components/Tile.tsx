import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadow, spacing, type } from '../theme';

/**
 * Tile lives inside a horizontal HorizontalScroller (Accessories, Services).
 * It intentionally does NOT use Pressable/press-scale: a swipe gesture that
 * starts on a touchable inside a horizontally-scrolling list is a classic
 * react-native-web touch-responder conflict ("Cannot record touch end
 * without a touch start") — the ScrollView takes over the gesture mid-drag
 * and the browser's touch-end event then points at an identifier RNW has
 * already cleared. A plain View keeps the card visual and animation-free
 * for touch purposes, while entrance motion still comes from <Reveal>.
 */
export function Tile({
  title,
  copy,
  cta,
  image,
  dark = false,
  width = 230,
}: {
  title: string;
  copy?: string;
  cta?: string;
  image: ImageSourcePropType;
  dark?: boolean;
  width?: number;
}) {
  return (
    <View style={[s.tile, { width }, dark && s.tileDark]}>
      <Image
        source={image}
        resizeMode="contain"
        style={s.image}
        accessibilityIgnoresInvertColors
        accessibilityLabel={title}
      />
      <Text style={[s.title, dark && s.titleDark]}>{title}</Text>
      {copy ? <Text style={[s.copy, dark && s.copyDark]} numberOfLines={3}>{copy}</Text> : null}
      {cta ? <Text style={[s.cta, dark && s.ctaDark]}>{cta}</Text> : null}
    </View>
  );
}

const s = StyleSheet.create({
  tile: {
    backgroundColor: colors.bgAlt,
    borderRadius: radius.md,
    padding: spacing.md,
    ...shadow.soft,
  },
  tileDark: { backgroundColor: colors.bgDark },
  image: { width: '100%', height: 130, marginBottom: 10 },
  title: { ...type.h3, fontSize: 18, color: colors.text, marginBottom: 4 },
  titleDark: { color: colors.textOnDark },
  copy: { ...type.small, color: colors.muted, marginBottom: 8 },
  copyDark: { color: colors.mutedOnDark },
  cta: { color: colors.blue, fontWeight: '600', fontSize: 14 },
  ctaDark: { color: '#5ab0ff' },
});
