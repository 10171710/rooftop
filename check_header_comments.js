const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasBrandLogoComment = content.includes('<!-- Brand Logo -->');
  const hasRightHeaderActions = content.includes('<!-- Right Header Actions') || content.includes('Right Header Actions');
  console.log(`${f.padEnd(25)}: brandLogoComment=${hasBrandLogoComment}, rightHeaderActions=${hasRightHeaderActions}`);
});
