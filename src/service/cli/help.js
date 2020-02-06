'use strict';

const {chalk} = require(`../../utils`);

module.exports = {
  name: `--help`,
  run() {
    const text = `
    Программа запускает http-сервер и формирует файл с данными для api.

    Гайд:
      server <command>

      Команды:

      --version:            выводит номер версии
      --help:               печатает этот текст
      --generate <count>    формирует файл mocks.json
    `;

    console.log(chalk.hex('#646464')(text));
  }
};
