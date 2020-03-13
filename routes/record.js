const express = require('express')
const router = express.Router()
const Record = require('../models/record.js')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {

  console.log('req.body', req.body)
  console.log('req.user', req.user)

  const record = new Record({
    name: req.body.name,
    category: req.body.category,
    date: req.body.date,
    amount: req.body.amount,
    totalAmount: req.body.totalAmount,
    userId: req.user._id
  })



  record.save(err => {
    if (err) console.error(err)
    return res.redirect('/')
  })


})


router.get('/:id/edit', (req, res) => {
  res.render('update')
})




module.exports = router