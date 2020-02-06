'use strict';

const fs = require(`fs`).promises;
const moment = require('moment');
const {
  getRandomInt,
  shuffle,
  chalk
} = require(`../../utils`);

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;

const FILE_SENTENCES_PATH = `./data/sentences.txt`;
const FILE_TITLES_PATH = `./data/titles.txt`;
const FILE_CATEGORIES_PATH = `./data/categories.txt`;

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

const generateOffers = (count, titles, categories, sentences) => (
  Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length - 2)],
    announce: shuffle(sentences).slice(1, 5).join(` `),
    fullText: shuffle(sentences).slice(1, getRandomInt(0, sentences.length - 2)).join(` `),
    createdDate: moment().subtract(getRandomInt(1, 30), 'days').subtract(getRandomInt(0, 2), 'months').format('YYYY-MM-DD hh:mm:ss'),
    category: shuffle(categories).slice(0, getRandomInt(1, 4)),
  }))
);

module.exports = {
  name: `--generate`,
  async run(args) {

    const sentences = await readContent(FILE_SENTENCES_PATH);
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);

    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;

    if (countOffer > 1000) {
      return console.error(chalk.red(`Не больше 1000 объявлений!`));
    }

    const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences), null, 2);

    try {
      await fs.writeFile(FILE_NAME, content);
      console.log(chalk.green(`Operation success. File created.`));

    } catch (e) {
      console.error(e);
      console.error(chalk.red(`Can't write data to file...`));
    }
  }
};

