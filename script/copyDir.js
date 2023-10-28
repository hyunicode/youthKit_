// // import { spawn } from 'child_process';
// const { spawn } = require('child_process');

// const copyDir = (src, dist) => {
//   spawn('cp', ['-r', src, dist]);
// };

// copyDir('./packages', './docs');

const fs = require('fs');
const path = require('path');

const sourceDir = './packages';
const targetDir = './docs';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 递归遍历文件夹，从sourceDir拷贝到targetDir
function copyDir(sourceDir, targetDir) {
  const files = fs.readdirSync(sourceDir);
  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath);
      }
      copyDir(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

copyDir(sourceDir, targetDir);
