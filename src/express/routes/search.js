'use strict';

const {Router} = require(`express`);
const searchRouter = Router();

searchRouter.get(`/`, (req, res) => res.send(`/search`));

module.exports = searchRouter;
