const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.use('/products', require('./api/tiger.api'));

app.listen(port, () => {
  console.log('Server is up on ' + port);
});
