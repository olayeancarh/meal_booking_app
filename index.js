const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('The API is working, CHI!!!');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
