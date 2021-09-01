const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  await fs.rmdirSync('./output', { recursive: true });
  const files = [
    './dist/MFE-TWO/polyfills.js',
    './dist/MFE-TWO/main.js',
  ]
  await fs.ensureDir('output')
  await concat(files, 'output/pyb-web-components.js');
  await fs.rmdirSync('./dist', { recursive: true });
})()
