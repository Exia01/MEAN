const mongoose = require('mongoose')
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const User = mongoose.model(
  'User',
  new mongoose.Schema(
    {
      fname: { type: String, required: true, minlength: 2, maxlength: 64 },
      lname: { type: String, required: true, minlength: 2, maxlength: 64 },
      email: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 64,
        validate: {
          validator: email => {
            return EMAIL_REGEX.test(email)
          }
        },
        password: {
          type: String,
          required: true,
          minlength: 2,
          maxlength: 64
        },
        dob: {
          type: Date,
          required: true
        },
        created_at: {
          type: Date,
          required: true,
          default: Date.now
        }
      },
      // age: {type: Number},
      created_at: { type: Date, default: Date.now }
    },
    { timestamps: true }
  )
)
module.exports = User
