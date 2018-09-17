let mongoose = require('mongoose')

let CelebSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 64 }
}, {timestamps: true})

mongoose.model('Celeb', CelebSchema)
