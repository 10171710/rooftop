const fs = require('fs');
const jsFiles = ['assets/js/main.js'];
jsFiles.forEach(f => {
  if (fs.existsSync(f)) {
    console.log(f, fs.readFileSync(f, 'utf8').length);
  }
});

