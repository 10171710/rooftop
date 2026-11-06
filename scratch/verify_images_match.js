const fs = require('fs');

const blogContent = fs.readFileSync('blog.html', 'utf8');

for (let i = 1; i <= 6; i++) {
  const detailFile = `blog-details-${i}.html`;
  const detailContent = fs.readFileSync(detailFile, 'utf8');

  // Extract card image from blog.html
  // Look for the post block
  const postPattern = new RegExp(`<!-- Post ${i}:[\\s\\S]*?href="${detailFile}"`, 'i');
  const match = blogContent.match(postPattern);
  let cardImg = 'not found';
  if (match) {
    const imgMatch = match[0].match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch) cardImg = imgMatch[1];
  }

  // Extract featured image from detailFile
  const detailImgMatch = detailContent.match(/<main[\s\S]*?<img[^>]+src="([^">]+)"/);
  const detailImg = detailImgMatch ? detailImgMatch[1] : 'not found';

  console.log(`Card ${i}:`);
  console.log(`  Outside Card Img: ${cardImg}`);
  console.log(`  Inside Detail Img: ${detailImg}`);
  console.log(`  Images Match: ${cardImg === detailImg}`);
}

