const fs = require('fs');
const path = require('path');

const clubsFile = path.join(__dirname, 'src/data/clubs.ts');
let content = fs.readFileSync(clubsFile, 'utf8');

const replacements = {
  'tieng-anh': { cover: 'ta1.jpg', h1: 'ta2.jpg', h2: 'ta3.jpg', g1: 'ta1.jpg', g2: 'ta2.jpg', g3: 'ta3.jpg' },
  'stem': { cover: 'st1.jpg', h1: 'st1.jpg', h2: 'st1.jpg', g1: 'st1.jpg', g2: 'st1.jpg', g3: 'st1.jpg' },
  'truyen-thong': { cover: 'tt1.jpg', h1: 'tt2.jpg', h2: 'tt3.jpg', g1: 'tt1.jpg', g2: 'tt2.jpg', g3: 'tt4.jpg' },
  'vo-thuat': { cover: 'vt1.jpg', h1: 'vt1.jpg', h2: 'vt2.jpg', g1: 'vt1.jpg', g2: 'vt2.jpg', g3: 'vt1.jpg' },
  'bong-ro': { cover: 'br1.jpg', h1: 'br1.jpg', h2: 'br2.jpg', g1: 'br1.jpg', g2: 'br2.jpg', g3: 'br1.jpg' },
  'bong-da': { cover: 'bd1.jpg', h1: 'bd1.jpg', h2: 'bd2.jpg', g1: 'bd1.jpg', g2: 'bd2.jpg', g3: 'bd1.jpg' },
  'nhay-hien-dai': { cover: 'nhay.jpg', h1: 'nhay2.jpg', h2: 'nhay3.jpg', g1: 'nhay.jpg', g2: 'nhay2.jpg', g3: 'nhay3.jpg' },
  'am-nhac': { cover: 'nhac1.jpg', h1: 'nhac2.jpg', h2: 'nhac3.jpg', g1: 'nhac1.jpg', g2: 'nhac2.jpg', g3: 'nhac3.jpg' }
};

for (const [slug, imgs] of Object.entries(replacements)) {
  content = content.replace(`/images/clubs/${slug}/cover.webp`, `/images/clubs/${slug}/${imgs.cover}`);
  content = content.replace(`/images/clubs/${slug}/hero-01.webp`, `/images/clubs/${slug}/${imgs.h1}`);
  content = content.replace(`/images/clubs/${slug}/hero-02.webp`, `/images/clubs/${slug}/${imgs.h2}`);
  content = content.replace(`/images/clubs/${slug}/gallery-01.webp`, `/images/clubs/${slug}/${imgs.g1}`);
  content = content.replace(`/images/clubs/${slug}/gallery-02.webp`, `/images/clubs/${slug}/${imgs.g2}`);
  content = content.replace(`/images/clubs/${slug}/gallery-03.webp`, `/images/clubs/${slug}/${imgs.g3}`);
}

fs.writeFileSync(clubsFile, content);
console.log('Successfully updated image paths in clubs.ts');
