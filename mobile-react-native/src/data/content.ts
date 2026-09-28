export const products = [
  { name: 'iPhone 14 Pro', tag: 'Pro. Beyond.', price: '$999', image: require('../../assets/iphone-14-pro.png'), features: ['6.1-inch display', 'A16 Bionic', '48MP Main camera', 'Dynamic Island'] },
  { name: 'iPhone 14', tag: 'A total powerhouse.', price: '$799', image: require('../../assets/iphone-14-blue.png'), features: ['6.1-inch display', 'A15 Bionic', '12MP Dual camera', 'Emergency SOS'] },
  { name: 'iPhone 13', tag: 'As amazing as ever.', price: '$599', image: require('../../assets/iphone-13-green.png'), features: ['6.1-inch display', 'A15 Bionic', 'Dual-camera system', 'All-day battery'] },
  { name: 'iPhone SE', tag: 'Serious power. Serious value.', price: '$429', image: require('../../assets/iphone-se.png'), features: ['4.7-inch display', 'A15 Bionic', '12MP camera', 'Touch ID'] },
];

export const accessories = [
  { name: 'MagSafe', copy: 'Snap on a magnetic case, wallet, or charger. And charge wirelessly, too.', image: require('../../assets/magsafe.png') },
  { name: 'AirTag', copy: "Attach one to your keys. Put another in your backpack. If they're misplaced, just use Find My.", image: require('../../assets/airtag.png') },
  { name: 'AirPods Max', copy: 'High-fidelity audio with Adaptive EQ. Magic runs in the family.', image: require('../../assets/airpods-max.png') },
];

// Top masthead heroes: iPhone 14 and iPhone 14 Pro
export const heroes = [
  {
    eyebrow: 'New',
    title: 'iPhone 14',
    headline: 'Two great sizes.\nNow with a splash of yellow.',
    sub: 'From $799 or $33.29/mo. for 24 mo. before trade-in.',
    image: require('../../assets/iphone-colors.png'),
    dark: false,
    cta: 'Shop iPhone',
    secondaryCta: 'Learn more',
  },
  {
    eyebrow: 'iPhone 14 Pro',
    title: 'Pro. Beyond.',
    headline: 'The ultimate iPhone.',
    sub: 'From $999 or $41.62/mo. for 24 mo. before trade-in.',
    image: require('../../assets/pro-hero.png'),
    dark: true,
    cta: 'Shop iPhone',
    secondaryCta: 'Learn more',
  },
];

// Row labels used to render each product's spec sheet in the Compare section
export const compareSpecLabels = ['Display', 'Chip', 'Camera', 'Highlight'];

export const guidedTour = {
  eyebrow: 'A Guided Tour of',
  title: 'iPhone 14 &\niPhone 14 Pro',
  cta: 'Watch the film',
  image: require('../../assets/guided-tour.png'),
};

export const compare = {
  eyebrow: 'Compare',
  title: 'Which iPhone is right for you?',
};

export const whySwitch = {
  eyebrow: 'Switching to iPhone',
  title: 'is super simple.',
  copy: 'Move your photos, contacts, and more with just a few taps.',
  cta: 'Learn more',
  image: require('../../assets/switching.png'),
};

export const save = {
  title: 'Trade in your current phone\nfor credit toward a new one.',
  copy: 'Get $200–$600 in credit when you trade in iPhone 11 or higher and upgrade to iPhone 14 or iPhone 14 Pro.¹',
  cta: 'Learn more',
  image: require('../../assets/tradein-phone.png'),
};

export const carrierOffers = {
  title: 'Save up to $800 with select\ncarrier deals at Apple.⁸',
  copy: 'Get the carrier deals you love and save on a new iPhone when you trade in and purchase right here at Apple.',
  cta: 'Find your deal',
  image: require('../../assets/carrier-deals.png'),
};

export const iosFeatures = {
  eyebrow: 'iOS 16',
  title: 'What makes an iPhone\nan iPhone?',
  copy: 'Personal is powerful.',
  image: require('../../assets/ios16.png'),
};

export const whyIphone = {
  title: 'Why Apple is the best\nplace to buy iPhone.',
  copy: 'You can choose the payment option that works for you, pay less with a trade-in, and get set up quickly.',
  image: require('../../assets/best-place.png'),
};

export const services = [
  { key: 'tv', title: 'Apple TV+', copy: 'Get 3 months of Apple TV+ free when you buy an iPhone.', cta: 'Learn more', image: require('../../assets/apple-tv.png'), dark: true },
  { key: 'music', title: 'Apple Music', copy: 'Over 100 million songs. Start listening for free today.', cta: 'Learn more', image: require('../../assets/apple-music.png'), dark: false },
  { key: 'arcade', title: 'Apple Arcade', copy: 'Get 3 months of Apple Arcade free when you buy an iPhone.', cta: 'Learn more', image: require('../../assets/apple-arcade.png'), dark: false },
  { key: 'fitness', title: 'Apple Fitness+', copy: 'Fitness for everyone. Now all you need is iPhone.', cta: 'Learn more', image: require('../../assets/fitness.png'), dark: false },
  { key: 'news', title: 'Apple News+', copy: 'Get 3 months of Apple News+ free when you buy an iPhone.', cta: 'Learn more', image: require('../../assets/apple-news.png'), dark: false },
  { key: 'gift', title: 'Apple Gift Card', copy: 'The gift card for everything Apple.', cta: 'Buy', image: require('../../assets/gift-card.png'), dark: false },
];

export const servicesIntro = {
  title: 'Get more out of your iPhone.',
  copy: 'Bundle up to six Apple services and enjoy more for less with Apple One.',
};

export const footerGroups = [
  { title: 'Shop and Learn', links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Accessories'] },
  { title: 'Services', links: ['Apple Music', 'Apple TV+', 'Apple Fitness+', 'Apple News+', 'Apple Arcade', 'Apple One', 'Apple Card'] },
  { title: 'Apple Store', links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Trade In', 'Financing', 'Shopping Help'] },
  { title: 'Apple Values', links: ['Accessibility', 'Education', 'Environment', 'Privacy', 'Supplier Responsibility'] },
];
