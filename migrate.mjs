import fs from 'fs';
import path from 'path';

const rootPath = 'c:/Users/user/Desktop/Trenchlasb/TrenchLabs-main';
const frontendPath = path.join(rootPath, 'frontend');

// 2. Copy files and folders from frontend to root
const filesToMove = [
  'src',
  'public',
  'next.config.ts',
  'tsconfig.json',
  'postcss.config.mjs',
  'eslint.config.js',
  'next-env.d.ts',
  'index.html'
];

for (const file of filesToMove) {
    const srcPath = path.join(frontendPath, file);
    const destPath = path.join(rootPath, file);
    if (fs.existsSync(srcPath)) {
        if (fs.existsSync(destPath)) {
             fs.rmSync(destPath, { recursive: true, force: true });
        }
        // Copy recursively
        fs.cpSync(srcPath, destPath, { recursive: true });
    }
}

console.log("Copy completed successfully.");
