import express from 'express';
import bodyParser from 'body-parser';
import db from './api/config/database';

const app = express();

const port = process.env.PORT || 8001;

// Database connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(error => console.log(`Error: ${error}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('The API is working, CHI!!!');
});

app.listen(port, () => {
  console.log(`Server is running at PORT ${port}`);
});
