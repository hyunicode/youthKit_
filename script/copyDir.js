// // import { spawn } from 'child_process';
// const { spawn } = require('child_process');

// const copyDir = (src, dist) => {
//   spawn('cp', ['-r', src, dist]);
// };

// copyDir('./packages', './docs');

const fs = require('fs');
const path = require('path');

const copyDir = (src, dist) => {
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }

  const files = fs.readdirSync(src);
  for (const file of files) {
    const srcPath = path.join(src, file);
    const distPath = path.join(dist, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, distPath);
    } else {
      fs.copyFileSync(srcPath, distPath);
    }
  }
};

copyDir('./packages', './docs');
