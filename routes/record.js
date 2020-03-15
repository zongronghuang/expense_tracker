const express = require('express')
const router = express.Router()
const Record = require('../models/record.js')
const { authenticated } = require('../config/auth.js')

// 顯示所有購買項目
router.get('/', authenticated, (req, res) => {
  const queryCategory = req.query.category

  console.log('queryCategory', queryCategory)

  if (!queryCategory || queryCategory === 'home') {
    Record.find({ userId: req.user._id, category: 'home' })
      .lean()
      .exec((err, records) => {
        if (err) console.error(err)
        let total = 0
        records.forEach(record => {
          total += record.amount
        })

        records.forEach(record => {
          const category = record.category
          return record[category] = true
        })

        return res.render('index', { records: records, total: total, home: true })
      })
  } else {
    Record.find({ userId: req.user._id, category: queryCategory })
      .lean()
      .exec((err, records) => {
        if (err) console.error(err)
        let total = 0
        records.forEach(record => {
          total += record.amount
        })

        records.forEach(record => {
          const category = record.category
          return record[category] = true
        })

        return res.render('index', { records: records, total: total, [queryCategory]: true })
      })
  }

})

// 取得新增項目頁面
router.get('/new', authenticated, (req, res) => {
  res.render('new')
})

// 傳回新增項目
router.post('/', authenticated, (req, res) => {
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
router.get('/:id/edit', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id })
    .lean()
    .exec((err, record) => {
      if (err) return console.error(err)

      record[record.category] = true

      return res.render('update', { record: record })
    })

})


// 傳回編輯資料
router.put('/:id', authenticated, (req, res) => {
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
router.delete('/:id/delete', authenticated, (req, res) => {
  Record.findOne({ _id: req.params.id, userId: req.user._id }, (err, record) => {
    if (err) return console.error(err)
    record.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/records')
    })
  })
})



module.exports = router