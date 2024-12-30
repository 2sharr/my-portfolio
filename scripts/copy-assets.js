import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Copy public folder to dist
fs.copySync('public', 'dist', {
  overwrite: true,
  errorOnExist: false,
});

console.log('Assets copied successfully!'); 