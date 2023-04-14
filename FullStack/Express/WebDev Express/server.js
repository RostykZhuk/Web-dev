// server setup
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Basic Routing
app.get('/', (req, res) => {
  res.render('index', { text2342: 'World' });
});

app.listen(3000);
