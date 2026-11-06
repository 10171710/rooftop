const fs = require('fs');

let content = fs.readFileSync('menu.html', 'utf8');

// Regex to match the bottom row in each card:
// <div class="flex items-center justify-between text-xs pt-3 border-t border-gray-800">
//   <span class="...">...</span>
//   <button ...>+ Tasting List</button>
// </div>

const regex = /<div class="flex items-center justify-between text-xs pt-3 border-t border-gray-800">\s*<span class="[^"]*">(.*?)<\/span>\s*<button[\s\S]*?\+ Tasting List<\/button>\s*<\/div>/g;

let matchCount = 0;
const newContent = content.replace(regex, (match, innerSpan) => {
  matchCount++;
  // Ensure the icon has text-amber-400 if it doesn't already, or clean it up
  let cleanedInner = innerSpan.replace(/class="([^"]*)"/g, (m, cls) => {
    return 'class="' + cls.replace(/text-[a-z]+-[0-9]+/g, 'text-amber-400') + '"';
  });
  return `<div class="flex items-center text-xs pt-3 border-t border-gray-800">
              <span class="text-amber-400 font-semibold inline-flex items-center gap-1.5">${cleanedInner}</span>
            </div>`;
});

console.log(`Replaced ${matchCount} blocks in menu.html`);
if (matchCount === 9) {
  fs.writeFileSync('menu.html', newContent, 'utf8');
  console.log('Successfully saved menu.html');
} else {
  console.error('Expected 9 matches, got:', matchCount);
}

