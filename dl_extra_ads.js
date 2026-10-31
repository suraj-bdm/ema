const https = require('https');
const fs = require('fs');

const urls = [
  'https://emamumbai.com/assets/uploads/advertisement/1621790234288_6551770787100_Mobile-Banner-Size.png',
  'https://emamumbai.com/assets/uploads/advertisement/2811790235021_4761745819737_EMA__ROUND_CONDUIT_uPVC__Website_(1).jpg',
  'https://emamumbai.com/assets/uploads/advertisement/9381790326935_9991634227050_2.jpg',
  'https://emamumbai.com/assets/uploads/advertisement/6351682509448_BANNER_270x226_copy.jpg'
];

urls.forEach(url => {
  https.get(url, res => {
    let name = url.split('/').pop();
    if (res.statusCode === 200) {
      const f = fs.createWriteStream('public/images/' + name);
      res.pipe(f);
      f.on('finish', () => console.log('Downloaded', name));
    } else {
      console.log('Failed', name, res.statusCode);
    }
  });
});

