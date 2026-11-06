const fs = require('fs');
let code = fs.readFileSync('assets/js/main.js', 'utf8');

const oldShareStart = `/* ===================================================================
   15. Social Share Story Application Windows (Twitter, Facebook, LinkedIn, Native App)
   =================================================================== */`;
const oldShareEnd = `/* ===================================================================
   16. Leave a Thought Comment Form Validation (Mandatory min. 2 letters)
   =================================================================== */`;

const newShareSection = `/* ===================================================================
   15. Social Share Story Actions (Twitter, Facebook, LinkedIn - No Popup Windows)
   =================================================================== */
window.shareStory = function(platform, event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  const url = window.location.href;
  const title = document.title || 'AURA SKY Luxury Rooftop Restaurant & Lounge';

  if (platform === 'facebook' || platform === 'fb') {
    const shareUrl = \`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(url)}\`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    if (typeof showToast === 'function') {
      showToast('Opening Facebook', 'Connecting to Facebook...', 'info');
    }
  } else if (platform === 'twitter' || platform === 'x') {
    const shareUrl = \`https://twitter.com/intent/tweet?url=\${encodeURIComponent(url)}&text=\${encodeURIComponent(title)}\`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    if (typeof showToast === 'function') {
      showToast('Opening Twitter', 'Connecting to Twitter...', 'info');
    }
  } else if (platform === 'linkedin') {
    const shareUrl = \`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(url)}\`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    if (typeof showToast === 'function') {
      showToast('Opening LinkedIn', 'Connecting to LinkedIn...', 'info');
    }
  }
};
`;

const sIdx = code.indexOf(oldShareStart);
const eIdx = code.indexOf(oldShareEnd);

if (sIdx !== -1 && eIdx !== -1) {
  code = code.substring(0, sIdx) + newShareSection + '\n' + code.substring(eIdx);
  fs.writeFileSync('assets/js/main.js', code, 'utf8');
  console.log('Successfully updated shareStory in assets/js/main.js (removed popup windows, added clean toasts)');
} else {
  console.log('Could not find share section delimiters in main.js');
}

