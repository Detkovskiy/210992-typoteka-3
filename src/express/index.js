'use strict';

const express = require(`express`);
const path = require(`path`);
const DEFAULT_PORT = 8084;

const app = express();

const PUBLIC_DIR = `public`;
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

const searchRoutes = require(`./routes/search`);
const registerRoutes = require(`./routes/register`);
const articlesRoutes = require(`./routes/articles`);
const loginRouter = require(`./routes/login`);
const myRouter = require(`./routes/my`);
const categories = require(`./routes/categories`);

app.use(`/search`, searchRoutes);
app.use(`/register`, registerRoutes);
app.use(`/articles`, articlesRoutes);
app.use(`/login`, loginRouter);
app.use(`/my`, myRouter);
app.use(`/categories`, categories);

app.get(`/`, (req, res) => res.render('main'));

app.use((req, res) => res.status(400).render(`errors/404`));
app.use((err, req, res, next) => res.status(500).render(`errors/500`));

app.listen(DEFAULT_PORT,
() => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));

