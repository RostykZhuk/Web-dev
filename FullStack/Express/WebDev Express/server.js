// server setup
const express = require('express');
const app = express();

// Basic Routing
app.get('/', (req, res) => {
  console.log('Here');
  //   res.json({ message: 'Error' });
  res.download('server.js');
});

app.listen(3000);
