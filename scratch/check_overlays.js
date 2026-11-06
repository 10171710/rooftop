const fs = require('fs');

function checkFile(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('=== Checking ' + file + ' ===');
  
  // Find all img tags and their immediate parents
  const imgMatches = [...html.matchAll(/<img[^>]+>/g)];
  imgMatches.forEach((m, i) => {
    const imgTag = m[0];
    const index = m.index;
    // Look at surrounding 400 chars before and after
    const contextBefore = html.substring(Math.max(0, index - 300), index);
    const contextAfter = html.substring(index, Math.min(html.length, index + 300));
    
    // Check if there is an overlay sibling
    const hasGradient = contextAfter.includes('bg-gradient') || contextBefore.includes('bg-gradient');
    const hasFromBlack = contextAfter.includes('from-black') || contextBefore.includes('from-black');
    const hasBlur = imgTag.includes('blur') || contextBefore.includes('backdrop-blur') || contextAfter.includes('backdrop-blur');
    
    if (hasGradient || hasFromBlack || hasBlur) {
      const src = (imgTag.match(/src="([^"]+)"/) || [])[1] || '';
      console.log(`Img ${i+1}: ${src.substring(0, 50)}`);
      if (hasFromBlack) console.log(`   WARNING: contains from-black nearby!`);
      if (hasGradient) console.log(`   Has gradient overlay nearby`);
      if (hasBlur) console.log(`   Has blur nearby`);
    }
  });
}

checkFile('index.html');
checkFile('index-2.html');

