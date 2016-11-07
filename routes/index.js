const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('get Home');
});

module.exports = router;
