import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

type HeaderProps = {
  title?: string;
  onNavigate?: (section: string) => void;
};

const navItems = [
  { label: 'Store', section: 'hero' },
  { label: 'Mac', section: 'guided' },
  { label: 'iPad', section: 'compare' },
  { label: 'iPhone', section: 'hero' },
  { label: 'Watch', section: 'save' },
  { label: 'AirPods', section: 'accessories' },
  { label: 'Accessories', section: 'accessories' },
  { label: 'Support', section: 'support' },
];

export function Header({
  title = 'iPhone',
  onNavigate,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();

  const isDesktop = width >= 900;

  const handleNavigate = (section: string) => {
    setMenuOpen(false);
    onNavigate?.(section);
  };

  return (
    <>
      <View style={s.header}>
        {/* DESKTOP NAVBAR */}
        {isDesktop ? (
          <>
            <View style={s.desktopLeft}>
              <Ionicons
                name="logo-apple"
                size={18}
                color={colors.text}
              />

              {navItems.map((item) => (
                <Pressable
                  key={item.label}
                  onPress={() => handleNavigate(item.section)}
                  style={s.desktopItem}
                >
                  <Text style={s.desktopText}>
                    {item.label}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View style={s.desktopRight}>
              <Pressable style={s.iconButton}>
                <Ionicons
                  name="search-outline"
                  size={20}
                  color={colors.text}
                />
              </Pressable>

              <Pressable style={s.iconButton}>
                <Ionicons
                  name="bag-outline"
                  size={20}
                  color={colors.text}
                />
              </Pressable>
            </View>
          </>
        ) : (
          <>
            {/* MOBILE HEADER */}
            <Pressable
              onPress={() => setMenuOpen(true)}
              style={s.menuButton}
              hitSlop={10}
            >
              <Ionicons
                name="menu-outline"
                size={28}
                color={colors.text}
              />
            </Pressable>

            <Ionicons
              name="logo-apple"
              size={20}
              color={colors.text}
            />

            <Text style={s.mobileTitle}>
              {title}
            </Text>

            <View style={s.mobileRight}>
              <Pressable style={s.iconButton}>
                <Ionicons
                  name="search-outline"
                  size={22}
                  color={colors.text}
                />
              </Pressable>

              <Pressable style={s.iconButton}>
                <Ionicons
                  name="bag-outline"
                  size={22}
                  color={colors.text}
                />
              </Pressable>
            </View>
          </>
        )}
      </View>

      {/* MOBILE DRAWER */}
      <Modal
        visible={menuOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setMenuOpen(false)}
      >
        <View style={s.overlay}>
          <View style={s.drawer}>
            <View style={s.drawerHeader}>
              <Text style={s.drawerTitle}>
                Menu
              </Text>

              <Pressable
                onPress={() => setMenuOpen(false)}
              >
                <Ionicons
                  name="close-outline"
                  size={32}
                  color={colors.text}
                />
              </Pressable>
            </View>

            <ScrollView>
              {navItems.map((item) => (
                <Pressable
                  key={item.label}
                  style={s.drawerItem}
                  onPress={() =>
                    handleNavigate(item.section)
                  }
                >
                  <Text style={s.drawerText}>
                    {item.label}
                  </Text>

                  <Ionicons
                    name="chevron-forward"
                    size={18}
                    color="#86868b"
                  />
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}

const s = StyleSheet.create({
  header: {
    height: 58,
    backgroundColor: colors.bg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  /* DESKTOP */
  desktopLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },

  desktopItem: {
    paddingVertical: 8,
  },

  desktopText: {
    fontSize: 13,
    color: colors.text,
  },

  desktopRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  /* MOBILE */
  menuButton: {
    marginRight: 12,
  },

  mobileTitle: {
    flex: 1,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },

  mobileRight: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },

  iconButton: {
    padding: 6,
    marginLeft: 6,
  },

  /* DRAWER */
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  drawer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 56,
  },

  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  drawerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },

  drawerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },

  drawerText: {
    fontSize: 17,
    color: colors.text,
  },
});