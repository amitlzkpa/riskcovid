require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const DIR = 'dist';
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(DIR));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/update', function(req, res) {
  let json = req.body;
  console.log(json);
  res.send(json);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});