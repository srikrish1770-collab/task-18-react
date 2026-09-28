import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, type } from '../theme';

export function Section({
  eyebrow,
  title,
  copy,
  dark = false,
  children,
  tight = false,
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
  dark?: boolean;
  tight?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <View style={[s.wrap, tight && s.tight]}>
      {eyebrow ? <Text style={[s.eyebrow, dark && s.eyebrowDark]}>{eyebrow}</Text> : null}
      {title ? <Text style={[s.title, dark && s.titleDark]}>{title}</Text> : null}
      {copy ? <Text style={[s.copy, dark && s.copyDark]}>{copy}</Text> : null}
      {children}
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { paddingHorizontal: spacing.lg, marginBottom: spacing.md },
  tight: { marginBottom: 0 },
  eyebrow: { ...type.eyebrow, color: colors.blue, marginBottom: 4, textAlign: 'center' },
  eyebrowDark: { color: '#9fc8ff' },
  title: { ...type.h2, color: colors.text, textAlign: 'center', marginBottom: 8 },
  titleDark: { color: colors.textOnDark },
  copy: { ...type.body, color: colors.muted, textAlign: 'center' },
  copyDark: { color: colors.mutedOnDark },
});
