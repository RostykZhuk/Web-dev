// server setup
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Basic Routing
app.get('/', (req, res) => {
  res.render('index', { text2342: 'World' });
});

const useRouter = require('./routes/users');

app.use('/users', useRouter);

app.listen(3000);
