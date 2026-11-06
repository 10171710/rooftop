const fs = require('fs');
let code = fs.readFileSync('assets/js/main.js', 'utf8');

const commentValidationJs = `
/* ===================================================================
   16. Leave a Thought Comment Form Validation (Mandatory min. 2 letters)
   =================================================================== */
window.submitCommentForm = function(form) {
  const nameInput = form.querySelector('input[name="fullname"]') || form.querySelector('input[type="text"]');
  const fullName = nameInput ? nameInput.value.trim() : '';

  if (fullName.length < 2) {
    if (typeof showToast === 'function') {
      showToast('Validation Error', 'Full Name is mandatory and must contain at least 2 letters.', 'warning');
    }
    if (nameInput) {
      nameInput.focus();
      nameInput.classList.add('border-red-500');
      setTimeout(() => nameInput.classList.remove('border-red-500'), 2500);
    }
    return false;
  }

  if (typeof showToast === 'function') {
    showToast('Reflection Received', \`Thank you, \${fullName}! Your reflection is awaiting moderation.\`, 'success');
  }
  form.reset();
  return true;
};
`;

if (!code.includes('window.submitCommentForm')) {
  code = code.trimEnd() + '\n' + commentValidationJs + '\n';
  fs.writeFileSync('assets/js/main.js', code, 'utf8');
  console.log('Added window.submitCommentForm to assets/js/main.js');
} else {
  console.log('window.submitCommentForm already exists in main.js');
}

