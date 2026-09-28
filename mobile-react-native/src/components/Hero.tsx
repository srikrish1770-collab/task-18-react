import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors, spacing, type } from '../theme';
import { usePressScale } from './Reveal';

const { height: SCREEN_H } = Dimensions.get('window');

export type HeroSlide = {
  eyebrow?: string;
  title: string;
  headline?: string;
  sub?: string;
  image: ImageSourcePropType;
  dark?: boolean;
  cta?: string;
  secondaryCta?: string;
};

/**
 * A single full-bleed, screen-dominant Apple-style hero block — large
 * typography, generous spacing, and big product imagery. Stack multiple
 * <Hero> instances in a ScrollView (one per product) for a true marketing
 * landing-page feel: each hero fills most of the viewport before the next
 * is revealed by scrolling, rather than being squeezed into a small card.
 */
export function Hero({ slide }: { slide: HeroSlide }) {
  const press = usePressScale(0.985);
  return (
    <View style={[s.wrap, { minHeight: SCREEN_H * 0.74 }, slide.dark && s.wrapDark]}>
      <View style={s.textBlock}>
        {slide.eyebrow ? (
          <Text style={[s.eyebrow, slide.dark && s.eyebrowDark]}>{slide.eyebrow}</Text>
        ) : null}
        <Text style={[s.title, slide.dark && s.textOnDark]}>{slide.title}</Text>
        {slide.headline ? (
          <Text style={[s.headline, slide.dark && s.textOnDark]}>{slide.headline}</Text>
        ) : null}
        {slide.sub ? (
          <Text style={[s.sub, slide.dark && s.subDark]}>{slide.sub}</Text>
        ) : null}

        {(slide.cta || slide.secondaryCta) && (
          <Animated.View style={press.style}>
            <Pressable
              onPressIn={press.onPressIn}
              onPressOut={press.onPressOut}
              style={s.ctaRow}
              accessibilityRole="button"
              accessibilityLabel={[slide.cta, slide.secondaryCta].filter(Boolean).join(', ')}
            >
              {slide.cta ? (
                <View style={s.ctaPillWrap}>
                  <Text style={s.ctaPillText}>{slide.cta}</Text>
                </View>
              ) : null}
              {slide.secondaryCta ? (
                <Text style={[s.ctaSecondary, slide.dark && s.textOnDark]}>
                  {slide.secondaryCta} ›
                </Text>
              ) : null}
            </Pressable>
          </Animated.View>
        )}
      </View>

      <Image
        source={slide.image}
        resizeMode="contain"
        style={s.image}
        accessibilityIgnoresInvertColors
        accessibilityLabel={`${slide.title}${slide.headline ? ', ' + slide.headline.replace('\n', ' ') : ''}`}
      />
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.bgAlt,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  wrapDark: { backgroundColor: colors.bgDark },
  textBlock: { alignItems: 'center' },
  eyebrow: { ...type.eyebrow, color: colors.muted, marginBottom: 8, textAlign: 'center' },
  eyebrowDark: { color: colors.mutedOnDark },
  title: { ...type.hero, color: colors.text, textAlign: 'center' },
  headline: { ...type.headline, color: colors.text, textAlign: 'center', marginTop: 6 },
  sub: { ...type.small, color: colors.muted, textAlign: 'center', marginTop: 10 },
  subDark: { color: colors.mutedOnDark },
  textOnDark: { color: colors.textOnDark },
  ctaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 20, gap: 20 },
  ctaPillWrap: {
    backgroundColor: colors.blue,
    borderRadius: 999,
    paddingHorizontal: 22,
    paddingVertical: 11,
  },
  ctaPillText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  ctaSecondary: { color: colors.blue, fontWeight: '600', fontSize: 16 },
  image: { width: '100%', height: 300, marginTop: 24 },
});
