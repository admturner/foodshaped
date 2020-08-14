const env = process.env.ELEVENTY_ENV || 'production';
const baseUrl = ('production' === env) ? 'https://foodshaped.com/' : 'http://localhost:8080/';

module.exports = {
  title: 'Food Shaped',
  url: baseUrl,
  author: {
    name: 'Adam Turner'
  },
  tagline: [
    'Regular human food.',
    'Use food with face.',
  ],
  feed: {
    subtitle: 'Shaped like food.',
    filename: 'feed.atom',
    path: '/feed.atom',
    url: `${ baseUrl }feed.atom`,
    id: baseUrl,
  },
  charset: 'utf-8',
};
