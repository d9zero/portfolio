'use strict';

require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express')
const app = express()
 


app.use(express.static('./public'));


app.get('/', function (req, res) {
  res.send('Hello World')
})
 


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

