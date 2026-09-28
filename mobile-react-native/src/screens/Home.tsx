import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { MediaCard } from '../components/MediaCard';
import { HorizontalScroller } from '../components/HorizontalScroller';
import { Tile } from '../components/Tile';
import { Reveal } from '../components/Reveal';
import { Hero } from '../components/Hero';
import { CompareCard } from '../components/CompareCard';
import { Footer } from '../components/Footer';
import { colors } from '../theme';
import { ChapterNav } from '../components/ChapterNav';

import {
  products,
  accessories,
  heroes,
  guidedTour,
  compare,
  whySwitch,
  save,
  carrierOffers,
  whyIphone,
  iosFeatures,
  services,
  servicesIntro,
} from '../data/content';

export default function Home() {
  let i = 0;
  const next = () => i++;

  const scrollRef = useRef<ScrollView>(null);

  const sectionY = useRef<Record<string, number>>({});

  const scrollToSection = (section: string) => {
    const y = sectionY.current[section];

    if (y !== undefined) {
      scrollRef.current?.scrollTo({
        y,
        animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={s.safe}>
      <Header
        title="iPhone"
        onNavigate={scrollToSection}
      />

      <ChapterNav />

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={s.page}
        showsVerticalScrollIndicator={false}
      >
        {/* HERO */}
        <View
          onLayout={(e) => {
            sectionY.current.hero =
              e.nativeEvent.layout.y;
          }}
        >
          <Reveal index={next()}>
            <Hero slide={heroes[0]} />
          </Reveal>
        </View>

        <Reveal index={next()}>
          <Hero slide={heroes[1]} />
        </Reveal>

        {/* GUIDED TOUR */}
        <View
          onLayout={(e) => {
            sectionY.current.guided =
              e.nativeEvent.layout.y;
          }}
        >
          <Reveal index={next()}>
            <MediaCard
              eyebrow={guidedTour.eyebrow}
              title={guidedTour.title}
              cta={guidedTour.cta}
              image={guidedTour.image}
              imageHeight={210}
              imageFirst
            />
          </Reveal>
        </View>

        {/* COMPARE */}
        <View
          onLayout={(e) => {
            sectionY.current.compare =
              e.nativeEvent.layout.y;
          }}
        >
          <Reveal index={next()}>
            <Section
              eyebrow={compare.eyebrow}
              title={compare.title}
              copy="Swipe to see specs side by side."
            />
          </Reveal>
        </View>

        <Reveal index={next()} style={s.bleedBottom}>
          <HorizontalScroller
            data={products}
            keyExtractor={(p) => p.name}
            renderItem={(p) => (
              <CompareCard
                product={p}
                width={220}
              />
            )}
          />
        </Reveal>

        {/* SWITCHING */}
        <Reveal index={next()}>
          <MediaCard
            eyebrow={whySwitch.eyebrow}
            title={whySwitch.title}
            copy={whySwitch.copy}
            cta={whySwitch.cta}
            image={whySwitch.image}
            imageHeight={200}
          />
        </Reveal>

        {/* SAVE */}
        <View
          onLayout={(e) => {
            sectionY.current.save =
              e.nativeEvent.layout.y;
          }}
        >
          <Reveal index={next()}>
            <Section title="Ways to save on iPhone" />
          </Reveal>
        </View>

        <Reveal index={next()}>
          <MediaCard
            title={save.title}
            copy={save.copy}
            cta={save.cta}
            image={save.image}
            imageHeight={190}
          />
        </Reveal>

        {/* CARRIER */}
        <Reveal index={next()}>
          <MediaCard
            title={carrierOffers.title}
            copy={carrierOffers.copy}
            cta={carrierOffers.cta}
            image={carrierOffers.image}
            imageHeight={180}
          />
        </Reveal>

        {/* WHY APPLE */}
        <Reveal index={next()}>
          <MediaCard
            title={whyIphone.title}
            copy={whyIphone.copy}
            image={whyIphone.image}
            imageHeight={200}
            imageFirst
          />
        </Reveal>

        {/* ACCESSORIES */}
        <View
          onLayout={(e) => {
            sectionY.current.accessories =
              e.nativeEvent.layout.y;
          }}
        >
          <Reveal index={next()}>
            <Section title="Featured accessories" />
          </Reveal>
        </View>

        <Reveal index={next()} style={s.bleedBottom}>
          <HorizontalScroller
            data={accessories}
            keyExtractor={(a) => a.name}
            renderItem={(a) => (
              <Tile
                title={a.name}
                copy={a.copy}
                cta="Shop now"
                image={a.image}
                width={250}
              />
            )}
          />
        </Reveal>

        {/* IOS */}
        <Reveal index={next()}>
          <MediaCard
            eyebrow={iosFeatures.eyebrow}
            title={iosFeatures.title}
            copy={iosFeatures.copy}
            image={iosFeatures.image}
            imageHeight={210}
            imageFirst
          />
        </Reveal>

        {/* SERVICES */}
        <View
          onLayout={(e) => {
            sectionY.current.services =
              e.nativeEvent.layout.y;
          }}
        >
          <Reveal index={next()}>
            <Section
              title={servicesIntro.title}
              copy={servicesIntro.copy}
            />
          </Reveal>
        </View>

        <Reveal index={next()} style={s.bleedBottom}>
          <HorizontalScroller
            data={services}
            keyExtractor={(svc) => svc.key}
            renderItem={(svc) => (
              <Tile
                title={svc.title}
                copy={svc.copy}
                cta={svc.cta}
                image={svc.image}
                dark={svc.dark}
              />
            )}
          />
        </Reveal>

        {/* FOOTER */}
        <View
          onLayout={(e) => {
            sectionY.current.support =
              e.nativeEvent.layout.y;
          }}
        >
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  page: {
    paddingBottom: 40,
  },

  bleedBottom: {
    marginBottom: 16,
  },
});