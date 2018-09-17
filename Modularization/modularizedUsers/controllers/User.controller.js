let User = require('mongoose').model('User')
const bcrypt = require('bcrypt')

class UserController {
  all (req, res) {
    User.find({}, (err, data) => {
      if (data) {
        return res.status(200).json(data)
      } else {
        return res.status(404).json({ err: 'Failed to retrieve Users!' + err })
      }
    })
  }

  findById (req, res) {
    User.findOne({ _id: req.params.id }, (err, data) => {
      if (data) {
        return res.status(200).json(data)
      } else {
        req.flash(err)
        return res.status(404).json({ errors: 'Failed to retrieve User!' })
      }
    })
  }

  showRegister (req, res) {
    res.render('register')
  }

  register (req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (user) {
        console.log(err)
        res.flash('The email ' + req.body.email + ' already exists!')
        return res.direct('/register')
      } else {
        let user = new User(req.body)
        bcrypt.hash(user.password, 8, function (err, hash) {
          if (err) {
            res.flash("Your salt level is over 9000, can't help you")
            return res.redirect('/register')
          } else {
            user.password = hash
            user.save(errs => {
              if (errs) {
                for (let err of errs) res.flash(err)
                return res.redirect('/register')
              } else {
                req.session.userId = user._id
                res.flash('Welcome, ' + user.fname)
                return res.redirect('/login')
              }
            })
          }
        })
      }
    })
  }

  // update (req, res) {
  //   App.findOne({ _id: req.params.id }, (err, app) => {
  //     if (err) {
  //       return res.json({ errors: err })
  //     } else {
  //       // app.title = req.body.title;
  //       // app.description = req.body.description;

  //       app.save(err => {
  //         if (err) {
  //           return res.status(403).json({ errors: err })
  //         } else {
  //           return res.status(200).json(app)
  //         }
  //       })
  //     }
  //   })
  // }

//   destroy (req, res) {
//     App.findOne({ _id: req.params.id }, (err, app) => {
//       if (app) {
//         App.remove({ _id: req.params.id }, e => {
//           if (e) {
//             return res.status(404).json({ errors: 'Failed to remove app.' })
//           } else {
//             return res.status(200).json(app)
//           }
//         })
//       } else {
//         return res.status(404).json({ errors: err })
//       }
//     })
//   }
// }
}

module.exports = new UserController()
