'use strict';

const express = require(`express`);
const DEFAULT_PORT = 8081;

const app = express();

const searchRoutes = require(`./routes/search`);
const registerRoutes = require(`./routes/register`);
const offersRoutes = require(`./routes/offers`);
const loginRouter = require(`./routes/login`);
const myRouter = require(`./routes/my`);

app.use(`/search`, searchRoutes);
app.use(`/register`, registerRoutes);
app.use(`/offers`, offersRoutes);
app.use(`/login`, loginRouter);
app.use(`/my`, myRouter);

app.get(`/`, (req, res) => res.send('Главная страница'));
app.listen(DEFAULT_PORT,
() => console.log(`Сервер запущен на порту: ${DEFAULT_PORT}`));

