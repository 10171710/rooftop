const fs = require('fs');
const https = require('https');
const path = require('path');

const avatarsDir = path.join(__dirname, '..', 'assets', 'images', 'avatars');
if (!fs.existsSync(avatarsDir)) {
  fs.mkdirSync(avatarsDir, { recursive: true });
}

const avatars = [
  {
    name: 'avatar-elena-voyage.jpg',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=80'
  },
  {
    name: 'avatar-marcus-architect.jpg',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&h=240&q=80'
  },
  {
    name: 'avatar-clara-hautestyle.jpg',
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&h=240&q=80'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', err => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

(async () => {
  for (const item of avatars) {
    const dest = path.join(avatarsDir, item.name);
    console.log(`Downloading ${item.name}...`);
    try {
      await download(item.url, dest);
      console.log(`Saved ${item.name} (${fs.statSync(dest).size} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err.message);
    }
  }
})();

