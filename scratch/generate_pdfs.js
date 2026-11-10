const fs = require('fs');
const path = require('path');

// Ensure assets/docs directory exists
const docsDir = path.join('assets', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Function to generate a simple, valid, printable PDF 1.4 file
function createMinimalPDF(title, subtitle, sections) {
  // Build PDF text stream
  let textStream = 'BT\n';
  textStream += '/F1 24 Tf\n';
  textStream += '50 740 Td\n';
  textStream += `(${title.replace(/[()\\]/g, '\\$&')}) Tj\n`;
  textStream += '/F2 14 Tf\n';
  textStream += '0 -26 Td\n';
  textStream += `(${subtitle.replace(/[()\\]/g, '\\$&')}) Tj\n`;
  textStream += '0 -30 Td\n';

  sections.forEach(sec => {
    textStream += '/F1 14 Tf\n';
    textStream += `(${sec.heading.replace(/[()\\]/g, '\\$&')}) Tj\n`;
    textStream += '0 -18 Td\n';
    textStream += '/F2 10 Tf\n';
    sec.lines.forEach(line => {
      textStream += `(${line.replace(/[()\\]/g, '\\$&')}) Tj\n`;
      textStream += '0 -14 Td\n';
    });
    textStream += '0 -10 Td\n';
  });
  textStream += 'ET';

  const streamLength = Buffer.byteLength(textStream, 'utf8');

  let pdf = `%PDF-1.4
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj
2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj
3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595 842]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
      /F2 6 0 R
    >>
  >>
>>
endobj
4 0 obj
<<
  /Length ${streamLength}
>>
stream
${textStream}
endstream
endobj
5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj
6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj
xref
0 7
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000277 00000 n 
0000000${(350 + streamLength).toString().padStart(3, '0')} 00000 n 
0000000${(435 + streamLength).toString().padStart(3, '0')} 00000 n 
trailer
<<
  /Size 7
  /Root 1 0 R
>>
startxref
${520 + streamLength}
%%EOF`;

  return Buffer.from(pdf, 'utf8');
}

// Generate Menu PDF
const menuPdf = createMinimalPDF(
  'AURA SKY ROOFTOP & LOUNGE',
  'Seasonal Haute Cuisine & Cellar Reserves Tasting Menu (54th Floor)',
  [
    {
      heading: 'SIGNATURE ROOFTOP COCKTAILS',
      lines: [
        'Aurora 54 Spritz - London Dry Gin, Blood Orange Cordial, Elderflower Tonic ($29)',
        'Cedar & Fig Negroni - Cedar-Aged Campari, Fig Gin, Smoked Salt Rim ($27)',
        'Golden Hour Paloma - Reposado Tequila, Torched Grapefruit, Agave ($26)',
        'Smoked Saffron Old Fashioned - Small Batch Bourbon, Saffron Smoke ($32)'
      ]
    },
    {
      heading: 'EXECUTIVE CHEF TASTING MENU',
      lines: [
        'Hokkaido Scallop Crudo - Yuzu Pearl, Oscietra Caviar, Shiso Oil ($36)',
        'Charred Octopus - Binchotan Charred, Saffron Aioli, Crispy Fingerling ($32)',
        'A5 Miyazaki Wagyu Tenderloin - Black Winter Truffle, Pomme Puree ($95)',
        'Grand Cru Chocolate Sphere - Smoked Caramel, Gold Leaf Crisp ($24)'
      ]
    },
    {
      heading: 'RESERVATIONS & SOMMELIER CONTACT',
      lines: [
        'AURA SKY Tower - 54th Penthouse Floor',
        'Daily: 5:00 PM - 2:00 AM | Friday - Saturday until 3:00 AM',
        'Phone: +1 (555) 234-5678 | concierge@auraskyrooftop.com'
      ]
    }
  ]
);
fs.writeFileSync(path.join(docsDir, 'aura-sky-menu.pdf'), menuPdf);
console.log('Created assets/docs/aura-sky-menu.pdf (', menuPdf.length, 'bytes)');

// Generate Events Lookbook PDF
const eventsPdf = createMinimalPDF(
  'AURA SKY PRIVATE EVENTS & BUYOUT DECK',
  'Exclusive Skyline Venue Specifications & Luxury Hospitality (54th Floor)',
  [
    {
      heading: 'CAPACITY & VENUE CONFIGURATIONS',
      lines: [
        'Full Penthouse Buyout: Up to 350 Guests (Cocktail Reception)',
        'Seated Gastronomic Gala: Up to 140 Guests',
        'North Solarium Private Room: 15-28 Guests',
        'Sunset Edge Skydeck Terrace: 40-75 Guests'
      ]
    },
    {
      heading: 'AUDIO-VISUAL & ARCHITECTURAL HIGHLIGHTS',
      lines: [
        'Motorized Acoustic All-Weather Retractable Glass Canopy',
        'L-Acoustics Concert Sound System & 4K Seamless Video Walls',
        'Private Dedicated Express Elevator Bank & Valet Porte-Cochere',
        'Custom Branded Mixology Bars & Michelin-Trained Culinary Team'
      ]
    },
    {
      heading: 'PRIVATE EVENT INQUIRIES',
      lines: [
        'VIP Event Sales Director: Julian Vance',
        'Direct Line: +1 (555) 234-5678 | events@auraskyrooftop.com',
        'AURA SKY Tower, 54th Floor Skydeck, Metropolis'
      ]
    }
  ]
);
fs.writeFileSync(path.join(docsDir, 'aura-sky-events-deck.pdf'), eventsPdf);
console.log('Created assets/docs/aura-sky-events-deck.pdf (', eventsPdf.length, 'bytes)');

