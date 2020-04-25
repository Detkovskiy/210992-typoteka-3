'use strict';

const {Router} = require(`express`);
const articleRouter = Router();

articleRouter.get(`/add`, (req, res) => res.render(`new-post`));
articleRouter.get(`/category/:id`, (req, res) => res.render(`articles-by-category`));
articleRouter.get(`/edit/:id`, (req, res) => res.send(`/offers/edit/${req.params.id}`));
articleRouter.get(`/:id`, (req, res) => res.render(`post`));

module.exports = articleRouter;