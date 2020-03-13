const express = require('express')
const router = express.Router()
const Record = require('../models/record.js')


// 顯示所有購買項目
router.get('/', (req, res) => {
  const category = req.query.category
  console.log('category', category)
  Record.find()
    .lean()
    .exec((err, records) => {
      if (err) console.error(err)

      records.forEach(record => {
        const category = record.category
        return record[category] = true
      })

      return res.render('index', { records: records })
    })


})

// 取得新增項目頁面
router.get('/new', (req, res) => {
  res.render('new')
})

// 新增項目
router.post('/', (req, res) => {
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

// 取回項目編輯頁面
router.get('/:id/edit', (req, res) => {
  res.render('update')
})




module.exports = router