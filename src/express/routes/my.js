'use strict';

const {Router} = require(`express`);
const myRouter = Router();

myRouter.get(`/`, (req, res) => res.render(`my`));
myRouter.get(`/comments`, (req, res) => res.render(`comments`));

module.exports = myRouter;
