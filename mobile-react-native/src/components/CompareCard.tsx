import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadow, spacing, type } from '../theme';
import { compareSpecLabels } from '../data/content';

export type CompareProduct = {
  name: string;
  price: string;
  image: ImageSourcePropType;
  features: string[];
};

/**
 * A single product's spec sheet, sized to sit inside a horizontal scroller
 * for side-by-side comparison. Deliberately a plain View (no Pressable /
 * press-scale): a touchable that spans the full width of a card inside a
 * horizontally-swiping list is exactly what triggers react-native-web's
 * "Cannot record touch end without a touch start" touch-bank warning when
 * a swipe starts on the card and the ScrollView takes over the gesture.
 */
export function CompareCard({ product, width = 220 }: { product: CompareProduct; width?: number }) {
  return (
    <View style={[s.card, { width }]}>
      <Image
        source={product.image}
        resizeMode="contain"
        style={s.image}
        accessibilityIgnoresInvertColors
        accessibilityLabel={product.name}
      />
      <Text style={s.name}>{product.name}</Text>
      <Text style={s.price}>From {product.price}</Text>
      <View style={s.divider} />
      {product.features.map((f, idx) => (
        <View style={s.row} key={f}>
          <Text style={s.rowLabel}>{compareSpecLabels[idx] ?? ''}</Text>
          <Text style={s.rowValue} numberOfLines={2}>{f}</Text>
        </View>
      ))}
      <View style={s.button}>
        <Text style={s.buttonText}>See full comparison</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: colors.bgAlt,
    borderRadius: radius.md,
    padding: spacing.md,
    ...shadow.soft,
  },
  image: { width: '100%', height: 140, marginBottom: 8 },
  name: { ...type.h3, fontSize: 17, color: colors.text },
  price: { fontSize: 14, fontWeight: '600', color: colors.muted, marginTop: 2, marginBottom: 10 },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: colors.border, marginBottom: 10 },
  row: { marginBottom: 8 },
  rowLabel: { fontSize: 11, fontWeight: '700', color: colors.muted, textTransform: 'uppercase', letterSpacing: 0.4 },
  rowValue: { fontSize: 13, color: colors.text, marginTop: 1, lineHeight: 17 },
  button: {
    marginTop: 6,
    paddingVertical: 9,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.blue,
    alignItems: 'center',
  },
  buttonText: { color: colors.blue, fontWeight: '600', fontSize: 13 },
});
