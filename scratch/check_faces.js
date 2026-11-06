const https = require('https');

function checkImage(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ statusCode: res.statusCode, headers: res.headers });
    }).on('error', (e) => resolve({ error: e.message }));
  });
}

async function run() {
  const r1 = await checkImage('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80');
  console.log('Suit face photo:', r1.statusCode);

  const r2 = await checkImage('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80');
  console.log('Model photo:', r2.statusCode);
}
run();
