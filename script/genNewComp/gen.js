/* eslint-disable @typescript-eslint/no-require-imports */
const infoCollector = require('./infoCollector');
const tplReplacer = require('./tplReplacer');

const f = async () => {
  const meta = await infoCollector();
  tplReplacer(meta);
};

f();
