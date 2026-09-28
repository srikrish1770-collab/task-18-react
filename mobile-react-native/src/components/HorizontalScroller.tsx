import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { spacing } from '../theme';

export function HorizontalScroller<T>({
  data,
  renderItem,
  keyExtractor,
}: {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={s.row}
      decelerationRate="fast"
      snapToAlignment="start"
    >
      {data.map((item, i) => (
        <React.Fragment key={keyExtractor(item, i)}>{renderItem(item, i)}</React.Fragment>
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  row: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xs, gap: spacing.md },
});
