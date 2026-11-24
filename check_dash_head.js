const fs = require('fs');
const html = fs.readFileSync('dashboard.html', 'utf8');

const head = html.substring(0, html.indexOf('</head>') + 7);
console.log(head);
