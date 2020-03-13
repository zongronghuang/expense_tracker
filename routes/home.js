const express = require('express')
const router = express.Router()
const Record = require('../models/record.js')

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

module.exports = router