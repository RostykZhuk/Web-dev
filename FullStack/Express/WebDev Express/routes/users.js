const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User List');
});
router.get('/new', (req, res) => {
  res.send('User New Form');
});

router.post('/', (req, res) => {
  res.send('Create User');
});

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Get user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Get user with id ${req.params.id}`);
  });

const users = [{ name: 'Rostyk' }, { name: 'Martin' }];
router.param('id', (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
