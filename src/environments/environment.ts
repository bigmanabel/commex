export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'Commex',
  version: '1.0.0',
  enableAnalytics: false,
  enableDebugMode: true,
  cacheTimeout: 300000, // 5 minutes
  itemsPerPage: 12,
  supportedLanguages: ['en', 'fr'],
  defaultLanguage: 'en',
  currency: {
    code: 'GHS',
    symbol: 'GH¢',
  },
  social: {
    facebook: 'https://facebook.com/commex',
    twitter: 'https://twitter.com/commex',
    instagram: 'https://instagram.com/commex',
    linkedin: 'https://linkedin.com/company/commex',
  },
  contact: {
    email: 'support@commex.com',
    phone: '+233 123 456 789',
    address: '123 Commerce St, Accra, Ghana',
  },
  features: {
    enableWishlist: true,
    enableReviews: true,
    enableChat: false,
    enableNotifications: true,
  },
};
