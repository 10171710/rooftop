const fs = require('fs');

const dir = 'assets/images/dashboard-thumbs';
if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir);
  console.log(`dashboard-thumbs has ${files.length} files:`);
  console.log(files);
} else {
  console.log('dashboard-thumbs directory DOES NOT EXIST!');
}
