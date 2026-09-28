export const colors = {
  bg: '#ffffff',
  bgAlt: '#f5f5f7',
  bgDark: '#000000',
  text: '#1d1d1f',
  textOnDark: '#ffffff',
  muted: '#6e6e73',
  mutedOnDark: 'rgba(255,255,255,0.72)',
  blue: '#0071e3',
  border: '#d2d2d7',
  cardShadow: 'rgba(0,0,0,0.12)',
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 44,
};

export const radius = {
  sm: 14,
  md: 20,
  lg: 28,
  pill: 999,
};

export const shadow = {
  card: {
    boxShadow: '0px 8px 20px rgba(0,0,0,0.12)',
  },
  soft: {
    boxShadow: '0px 4px 12px rgba(0,0,0,0.06)',
  },
};

export const type = {
  eyebrow: {
    fontSize: 15,
    fontWeight: '600' as const,
  },

  hero: {
    fontSize: 38,
    fontWeight: '700' as const,
    letterSpacing: -1,
    lineHeight: 42,
  },

  headline: {
    fontSize: 20,
    fontWeight: '600' as const,
    letterSpacing: -0.2,
    lineHeight: 26,
  },

  h1: {
    fontSize: 36,
    fontWeight: '700' as const,
    letterSpacing: -0.8,
  },

  h2: {
    fontSize: 28,
    fontWeight: '700' as const,
    letterSpacing: -0.6,
  },

  h3: {
    fontSize: 21,
    fontWeight: '700' as const,
    letterSpacing: -0.3,
  },

  body: {
    fontSize: 16,
    lineHeight: 22,
  },

  small: {
    fontSize: 13,
    lineHeight: 18,
  },
};