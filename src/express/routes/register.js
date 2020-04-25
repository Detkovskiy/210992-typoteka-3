'use strict';

const {Router} = require(`express`);
const registerRouter = Router();

registerRouter.get(`/`, (req, res) => res.render(`sign-up`));

module.exports = registerRouter;
