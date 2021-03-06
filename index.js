import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

const app = express();

// const hostname = '127.0.0.1';

const port = process.env.PORT || 5000;

const server = http.createServer(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Users routes(app);
require('./api/routes/user')(app);

// Meals routes(app);
require('./api/routes/meal')(app);

// Menus routes(app);
require('./api/routes/menu')(app);

// Orders routes(app);
require('./api/routes/order')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the food app',
}));

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});

module.exports = app;
