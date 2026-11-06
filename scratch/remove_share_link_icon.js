const fs = require('fs');
const files = ['blog-details.html', ...Array.from({length: 7}, (_, i) => 'blog-details-' + (i+1) + '.html')];

const oldShareBlockPattern = /<div class="flex items-center gap-2\.5">\s*<span class="text-gray-400 font-semibold">Share:<\/span>[\s\S]*?<!-- LinkedIn App[\s\S]*?<\/a>\s*<\/div>/;

const newShareBlock = `<div class="flex items-center gap-2.5">
              <span class="text-gray-400 font-semibold">Share:</span>
              <!-- Facebook -->
              <a href="https://www.facebook.com/sharer/sharer.php" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 onclick="window.shareStory('facebook', event)" 
                 class="w-8 h-8 rounded-lg bg-zinc-900 border border-amber-500/20 hover:bg-amber-500 hover:text-black flex items-center justify-center transition" 
                 title="Share to Facebook">
                <i class="fa-brands fa-facebook-f text-xs"></i>
              </a>
              <!-- Twitter / X -->
              <a href="https://twitter.com/intent/tweet" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 onclick="window.shareStory('twitter', event)" 
                 class="w-8 h-8 rounded-lg bg-zinc-900 border border-amber-500/20 hover:bg-amber-500 hover:text-black flex items-center justify-center transition" 
                 title="Share to Twitter">
                <i class="fa-brands fa-x-twitter text-xs"></i>
              </a>
              <!-- LinkedIn -->
              <a href="https://www.linkedin.com/sharing/share-offsite/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 onclick="window.shareStory('linkedin', event)" 
                 class="w-8 h-8 rounded-lg bg-zinc-900 border border-amber-500/20 hover:bg-amber-500 hover:text-black flex items-center justify-center transition" 
                 title="Share to LinkedIn">
                <i class="fa-brands fa-linkedin-in text-xs"></i>
              </a>
            </div>`;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (oldShareBlockPattern.test(content)) {
    content = content.replace(oldShareBlockPattern, newShareBlock);
    fs.writeFileSync(f, content, 'utf8');
    console.log('Successfully removed link icon and updated Share block in', f);
  } else {
    console.log('Could not match oldShareBlockPattern in', f);
  }
});

