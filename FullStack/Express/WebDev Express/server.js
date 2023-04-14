// server setup
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Basic Routing
app.get('/', (req, res) => {
  res.render('index', { text2342: 'World' });
});

const useRouter = require('./routes/users');

app.use('/users', useRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
