const express = require('express')
const router = express.Router()
const Record = require('../models/record.js')


// 顯示所有購買項目
router.get('/', (req, res) => {
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

// 傳回新增項目
router.post('/', (req, res) => {
  const record = new Record({
    name: req.body.name,
    category: req.body.category,
    date: req.body.date,
    amount: req.body.amount,
    totalAmount: req.body.totalAmount,
    userId: req.user._id
  })

  console.log('record.date', record.date)
  record.save(err => {
    if (err) console.error(err)
    return res.redirect('/')
  })

})

// 取回項目編輯頁面
router.get('/:id/edit', (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id })
    .lean()
    .exec((err, record) => {
      if (err) return console.error(err)

      record[record.category] = true

      return res.render('update', { record: record })
    })

})


// 傳回編輯資料
router.put('/:id', (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    record.name = req.body.name
    record.date = req.body.date
    record.category = req.body.category
    record.amount = req.body.amount

    record.save(err => {
      if (err) return console.error(err)
      return res.redirect('/records')
    })
  })
})


// 刪除項目
router.delete('/:id/delete', (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    record.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/records')
    })
  })
})



module.exports = router