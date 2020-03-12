const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/:id/edit', (req, res) => {
  res.render('update')
})

module.exports = router