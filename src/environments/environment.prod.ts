export const environment = {
  production: true,
  apiUrl: 'https://api.commex.com/v1',
  appName: 'Commex',
  version: '1.0.0',
  enableAnalytics: true,
  enableDebugMode: false,
  cacheTimeout: 600000, // 10 minutes
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
    enableChat: true,
    enableNotifications: true,
  },
};
