const fs = require('fs');

function checkDivs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const openCount = (content.match(/<div(\s|>)/gi) || []).length;
  const closeCount = (content.match(/<\/div>/gi) || []).length;
  console.log(`${filePath}: open divs = ${openCount}, close divs = ${closeCount}, diff = ${openCount - closeCount}`);
}

checkDivs('index.html');
