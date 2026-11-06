const fs = require('fs');

['index.html', 'index-2.html'].forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n================== ${file} ==================`);
  
  // Find all <img> tags and their surroundings
  const imgRegex = /<img[\s\S]*?>/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const imgTag = match[0];
    const pos = match.index;
    const parentBlock = content.slice(Math.max(0, pos - 200), Math.min(content.length, pos + 400));
    
    const srcMatch = imgTag.match(/src="([^"]+)"/);
    const src = srcMatch ? srcMatch[1] : 'unknown';
    
    const hasGradient = parentBlock.includes('gradient');
    const hasFromBlack = parentBlock.includes('from-black') || parentBlock.includes('from-[#');
    
    if (hasGradient || hasFromBlack) {
      console.log(`\n[${file}] Image: ${src}`);
      // Find the overlay line
      const lines = parentBlock.split('\n');
      lines.forEach(l => {
        if (l.includes('gradient') || l.includes('from-') || l.includes('backdrop-blur')) {
          console.log('   Overlay/Style: ' + l.trim());
        }
      });
    }
  }
});

