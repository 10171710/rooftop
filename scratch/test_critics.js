const https = require('https');

const candidates = [
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80'
];

candidates.forEach(url => {
  https.get(url, (res) => {
    console.log(res.statusCode, url.substring(0, 60));
  }).on('error', (e) => {
    console.error(e.message);
  });
});

