const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const proposed = [
  'photo-1519501025264-65ba15a82390',
  'photo-1558030006-450675393462',
  'photo-1556679343-c7306c1976bc',
  'photo-1492684223066-81342ee5ff30',
  'photo-1509198397868-475647b2a1e5',
  'photo-1539136788836-5699e78bfc75',
  'photo-1527061011665-3652c757a4d4',
  'photo-1512917774080-9991f1c4c750',
  'photo-1525994886773-080587e161c2'
];

let hasConflict = false;
proposed.forEach(id => {
  files.forEach(f => {
    const c = fs.readFileSync(f, 'utf8');
    if (c.includes(id)) {
      console.log(`CONFLICT: ${id} is already used in ${f}`);
      hasConflict = true;
    }
  });
});

if (!hasConflict) {
  console.log('ALL 9 PROPOSED PHOTOS ARE 100% UNIQUE ACROSS THE ENTIRE PROJECT!');
}

