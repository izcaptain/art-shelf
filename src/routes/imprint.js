var express = require('express')
var router = express.Router()

/* GET imprint page. */
router.get('/', function(req, res, next) {
  res.render('imprint')
})

module.exports = router
