var express = require('express')
var router = express.Router()

/* GET imprint page. */
router.get('/', function(req, res, next) {
  res.render('imprint', require(__dirname + '../../data/de.json'))
})

module.exports = router
