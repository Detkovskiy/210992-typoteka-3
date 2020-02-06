'use strict';

const packageJsonFile = require(`../../../package.json`);
const {chalk} = require(`../../utils`);

module.exports = {
  name: `--version`,
  run() {
    const version = packageJsonFile.version;
    console.info(chalk.blue(version));
  }
};
