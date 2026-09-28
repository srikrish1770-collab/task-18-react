import React from 'react';
import { Animated, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadow, spacing, type } from '../theme';
import { usePressScale } from './Reveal';

export type MediaCardProps = {
  eyebrow?: string;
  title?: string;
  copy?: string;
  cta?: string;
  secondaryCta?: string;
  image: ImageSourcePropType;
  imageHeight?: number;
  dark?: boolean;
  imageFirst?: boolean;
  onPress?: () => void;
};

/** The single reusable "big card" used for hero, guided tour, save, why-switch, why-iphone, ios-features, etc. */
export function MediaCard({
  eyebrow,
  title,
  copy,
  cta,
  secondaryCta,
  image,
  imageHeight = 220,
  dark = false,
  imageFirst = false,
  onPress,
}: MediaCardProps) {
  const press = usePressScale(0.985);
  const Img = (
    <Image
      source={image}
      resizeMode="contain"
      style={[st.image, { height: imageHeight }]}
      accessibilityIgnoresInvertColors
      accessibilityLabel={title ?? undefined}
    />
  );
  return (
    <Animated.View style={press.style}>
      <Pressable
        onPress={onPress}
        onPressIn={onPress ? press.onPressIn : undefined}
        onPressOut={onPress ? press.onPressOut : undefined}
        style={[st.card, dark && st.cardDark]}
        accessibilityRole={onPress ? 'button' : undefined}
        accessibilityLabel={onPress ? [title, cta].filter(Boolean).join(', ') : undefined}
      >
        {imageFirst && Img}
        {eyebrow ? <Text style={[st.eyebrow, dark && st.textOnDarkMuted]}>{eyebrow}</Text> : null}
        {title ? <Text style={[st.title, dark && st.textOnDark]}>{title}</Text> : null}
        {copy ? <Text style={[st.copy, dark && st.textOnDarkMuted]}>{copy}</Text> : null}
        {(cta || secondaryCta) && (
          <View style={st.ctaRow}>
            {cta ? <Text style={[st.ctaPrimary, dark && st.ctaPrimaryDark]}>{cta}</Text> : null}
            {secondaryCta ? <Text style={[st.ctaSecondary, dark && st.textOnDark]}>{secondaryCta}</Text> : null}
          </View>
        )}
        {!imageFirst && Img}
      </Pressable>
    </Animated.View>
  );
}

const st = StyleSheet.create({
  card: {
    backgroundColor: colors.bgAlt,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    ...shadow.card,
  },
  cardDark: { backgroundColor: colors.bgDark },
  eyebrow: { ...type.eyebrow, color: colors.muted, marginBottom: 4 },
  title: { ...type.h3, color: colors.text, marginBottom: 8 },
  copy: { ...type.body, color: colors.muted, marginBottom: 14 },
  textOnDark: { color: colors.textOnDark },
  textOnDarkMuted: { color: colors.mutedOnDark },
  image: { width: '100%', marginTop: 6 },
  ctaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  ctaPrimary: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 15,
    marginRight: 18,
  },
  ctaPrimaryDark: { color: '#5ab0ff' },
  ctaSecondary: { color: colors.blue, fontWeight: '600', fontSize: 15 },
});
