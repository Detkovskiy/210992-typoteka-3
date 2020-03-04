'use strict';

const {Router} = require(`express`);
const registerRouter = Router();

registerRouter.get(`/`, (req, res) => res.send(`/register`));

module.exports = registerRouter;
