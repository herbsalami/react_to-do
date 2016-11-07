const router = require('express').Router();

const showMethod = (req, res) => res.json(`${req.method} tasks/${req.params.taskID}`);

router.route('/:taskID')
  .get(showMethod)
  .put(showMethod)
  .delete(showMethod);

router.route('/')
  .get(showMethod)
  .post(showMethod);


module.exports = router;
