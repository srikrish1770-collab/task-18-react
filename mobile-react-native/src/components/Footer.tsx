import React from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, type } from '../theme';
import { footerGroups } from '../data/content';
import { usePressScale } from './Reveal';

function FooterGroupRow({ title }: { title: string }) {
  const press = usePressScale(0.98);
  return (
    <Animated.View style={press.style}>
      <Pressable
        onPressIn={press.onPressIn}
        onPressOut={press.onPressOut}
        style={s.groupRow}
        accessibilityRole="button"
        accessibilityLabel={title}
      >
        <Text style={s.groupTitle}>{title}</Text>
        <Ionicons name="chevron-forward" size={16} color={colors.muted} />
      </Pressable>
    </Animated.View>
  );
}

/**
 * Compact, mobile-first footer. Apple's desktop footer dumps every link into
 * a tall multi-column grid — on a phone that reads as a wall of tiny text.
 * Instead this collapses each group into a single tappable row (like the
 * Apple Store app's account/menu screens), keeping the footer short while
 * still surfacing every category.
 */
export function Footer() {
  return (
    <View style={s.wrap}>
      <View style={s.brandRow}>
        <Ionicons name="logo-apple" size={16} color={colors.muted} />
        <Text style={s.brandText}>iPhone</Text>
      </View>

      <View style={s.groups}>
        {footerGroups.map((g) => (
          <FooterGroupRow title={g.title} key={g.title} />
        ))}
      </View>

      <View style={s.legalWrap}>
        <Text style={s.legal}>Copyright © 2026 Apple Inc. All rights reserved.</Text>
        <Text style={s.legalLinks}>Privacy · Terms of Use · Sales and Refunds · Legal · Site Map</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    backgroundColor: colors.bgAlt,
    marginTop: spacing.lg,
    paddingTop: spacing.lg,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: spacing.md,
  },
  brandText: { ...type.small, fontWeight: '700', color: colors.muted, letterSpacing: 0.4 },
  groups: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  groupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: 13,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  groupTitle: { fontSize: 15, fontWeight: '600', color: colors.text },
  legalWrap: { paddingHorizontal: spacing.lg, paddingVertical: spacing.md },
  legal: { ...type.small, color: colors.muted, marginBottom: 4 },
  legalLinks: { ...type.small, color: colors.muted },
});
