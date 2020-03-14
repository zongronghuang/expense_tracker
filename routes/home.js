const express = require('express')
const router = express.Router()
const Record = require('../models/record.js')
const { authenticated } = require('../config/auth.js')

router.get('/', authenticated, (req, res) => {

  res.redirect('/records')

})

module.exports = router