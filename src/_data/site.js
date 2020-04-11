const env = process.env.ELEVENTY_ENV || 'production';
const baseUrl = ( 'production' === env ) ? 'https://eternalpastry.com/' : 'http://localhost:8080/';

module.exports = {
  title: 'Eternal Pastry',
  url: baseUrl,
  author: {
    name: 'Adam Turner'
  },
  tagline: [
	'Color of Bread',
    'What even is pastry, really?',
    'Regular human food.',
    'Use mouth with food.',
  ],
  feed: {
    subtitle: 'The Eternal Pastry food place',
    filename: 'feed.atom',
    path: '/feed.atom',
    url: `${ baseUrl }feed.atom`,
    id: baseUrl,
  },
  charset: 'utf-8',
};
