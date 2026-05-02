const Jimp = require('jimp');

Jimp.read('src/assets/logo.png', (err, image) => {
  if (err) throw err;
  
  // To avoid removing black from the logo text, 
  // we could do a flood fill. But since the background 
  // is just a solid block and the logo is surrounded by white,
  // replacing near-black should be fine.
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    var red = this.bitmap.data[idx + 0];
    var green = this.bitmap.data[idx + 1];
    var blue = this.bitmap.data[idx + 2];

    if (red < 20 && green < 20 && blue < 20) {
      this.bitmap.data[idx + 3] = 0; // transparent
    }
  });
  
  image.write('src/assets/logo.png');
  console.log("Background removed successfully!");
});
