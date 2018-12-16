const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/ngElement/runtime.js',
        './dist/ngElement/polyfills.js',
        './dist/ngElement/scripts.js',
        './dist/ngElement/main.js',
    ]

    await fs.ensureDir('elements');

    await concat(files, 'elements/jsa-counter.js');

    await fs.copyFile('./dist/ngElement/styles.css', 'elements/styles.css');

})()