const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const models = path.join(__dirname, '../models')
mongoose.connect('mongodb://localhost/User')

fs.readdirSync(models).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(models + '/' + file)
  }
})
