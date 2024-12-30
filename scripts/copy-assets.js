const fs = require('fs-extra');
const path = require('path');

// Copy public folder to dist
fs.copySync('public', 'dist', {
  overwrite: true,
  errorOnExist: false,
});

console.log('Assets copied successfully!'); 