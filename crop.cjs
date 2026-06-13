const { Jimp } = require('jimp');

async function processImage() {
  try {
    const image = await Jimp.read('public/assets/vienatec/trongdong.png');
    const size = Math.min(image.bitmap.width, image.bitmap.height);
    // crop to center square
    const x = (image.bitmap.width - size) / 2;
    const y = (image.bitmap.height - size) / 2;
    image.crop({ x, y, w: size, h: size });
    image.circle();
    await image.write('public/assets/vienatec/trongdong_circle.png');
    console.log('Successfully cropped to circle!');
  } catch (err) {
    console.error(err);
  }
}

processImage();
