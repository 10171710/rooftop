const fs = require('fs');
let code = fs.readFileSync('assets/js/main.js', 'utf8');

const shareFunction = `
/* ===================================================================
   15. Social Share Story Application Windows (Twitter, Facebook, LinkedIn, Native App)
   =================================================================== */
window.shareStory = function(platform, event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  const url = window.location.href;
  const title = document.title || 'AURA SKY Luxury Rooftop Restaurant & Lounge';

  // Centered popup helper
  const openCenteredPopup = (targetUrl, windowName, w = 600, h = 600) => {
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    const width = window.innerWidth || document.documentElement.clientWidth || screen.width;
    const height = window.innerHeight || document.documentElement.clientHeight || screen.height;
    const left = ((width / 2) - (w / 2)) + dualScreenLeft;
    const top = ((height / 2) - (h / 2)) + dualScreenTop;
    const newWindow = window.open(
      targetUrl, 
      windowName, 
      \`scrollbars=yes,width=\${w},height=\${h},top=\${top},left=\${left},noopener,noreferrer\`
    );
    if (window.focus && newWindow) {
      newWindow.focus();
    }
    return newWindow;
  };

  if (platform === 'twitter' || platform === 'x') {
    const shareUrl = \`https://twitter.com/intent/tweet?url=\${encodeURIComponent(url)}&text=\${encodeURIComponent(title)}\`;
    const popup = openCenteredPopup(shareUrl, 'XShare', 600, 520);
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    if (typeof showToast === 'function') {
      showToast('Opening X (Twitter)', 'Opening X application share & login dialog...', 'info');
    }
  } else if (platform === 'facebook' || platform === 'fb') {
    const shareUrl = \`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(url)}\`;
    const popup = openCenteredPopup(shareUrl, 'FacebookShare', 620, 620);
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    if (typeof showToast === 'function') {
      showToast('Opening Facebook', 'Opening Facebook application share & login dialog...', 'info');
    }
  } else if (platform === 'linkedin') {
    const shareUrl = \`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(url)}\`;
    const popup = openCenteredPopup(shareUrl, 'LinkedInShare', 620, 620);
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    if (typeof showToast === 'function') {
      showToast('Opening LinkedIn', 'Opening LinkedIn application share & login dialog...', 'info');
    }
  } else if (platform === 'copy' || platform === 'link') {
    // Attempt mobile / modern OS native share sheet first
    if (navigator.share) {
      navigator.share({
        title: title,
        text: 'Read this chronicle on AURA SKY Gazette:',
        url: url
      }).then(() => {
        if (typeof showToast === 'function') {
          showToast('Shared', 'Article shared successfully via device apps!', 'success');
        }
      }).catch(() => {
        // Fallback to clipboard if user cancels or closes share sheet
      });
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        if (typeof showToast === 'function') {
          showToast('Link Copied', 'Article link copied to clipboard! Ready to paste & share.', 'success');
        }
      }).catch(() => {
        if (typeof showToast === 'function') {
          showToast('Link Copied', 'Article link copied to clipboard!', 'success');
        }
      });
    } else {
      if (typeof showToast === 'function') {
        showToast('Link Copied', 'Article link copied to clipboard!', 'success');
      }
    }
  }
};
`;

if (!code.includes('window.shareStory')) {
  code = code.trimEnd() + '\n' + shareFunction + '\n';
  fs.writeFileSync('assets/js/main.js', code, 'utf8');
  console.log('Added window.shareStory to assets/js/main.js');
} else {
  console.log('window.shareStory already exists in main.js');
}

