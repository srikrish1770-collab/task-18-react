import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

export function ChapterNav() {
  return (
    <View style={s.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces
        decelerationRate="fast"
        
      >
        <Image
          source={require('../../assets/chapter-nav-reference.png')}
          style={s.image}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f5f5f7',
    borderBottomWidth: 1,
    borderBottomColor: '#d2d2d7',
  },

  image: {
    width: 1200, // important
    height: 110,
  },
});