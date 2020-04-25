'use strict';

const {Router} = require(`express`);
const searchRouter = Router();

searchRouter.get(`/`, (req, res) => res.render(`search`));

module.exports = searchRouter;
