import path from 'path';

const baseUrl = 'https://vijay.singh.info';

export const config = {
  baseUrl,
  title: 'Vijay Singh | Frontend Architect',
  pageTitle: (title: string) => `${title} | Vijay Singh`,
  themeColor: '#1976d2',
  manifest: '/manifest.json',
  faviconUrl: '/static/icons/favicon.png',
  faviconAppleUrl: '/static/icons/favicon-apple.png',
  googleAnalyticsToken: 'G-432SY69LDS',
  cookieAccept: 'vjworld_cookie_accept',
  cookieDate: 'vjworls_cookie_date',
  themes: ['light', 'dark', 'os default'],
  themeLocalStorageName: 'vjworld_theme',
  colors: {
    black: '#0f0f0f',
    blue: '#2daae1',
    gray: '#d0d0d0',
    white: '#ffffff'
  },
  dates: {
    luxon: {
      article: 'yyyy-MM-dd'
    }
  },
  urls: {
    home: '/',
    blog: '/blog',
    projects: '/projects',
    cookiePolicy: '/cookie-policy'
  }
};
