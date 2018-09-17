const Celeb = require('mongoose').model('Celeb') // change the celeb to uppercase

class CelebController {
  all (req, res) {
    Celeb.find({}, (err, celebs) => {
      if (celebs) {
        return res.status(200).json(celebs)
      } else {
        return res.status(404).json('Our database blew up! ' + err)
      }
    })
  }

  create (req, res) {
    let newceleb = new Celeb({ name: req.params.name })
    newceleb.save(errs => {
      if (errs) {
        console.log(errs)
        for (let err in errs.erros) {
          console.log('errors', err.errors[err].message)
        }
        return res.status(404).json('bad news bears')
      } else {
        res.redirect('/')
      }
    })
  }

  remove (req, res) {
    Celeb.remove({ name: req.params.name }, err => {
      if (err) {
        console.log(err)
        return res.status(404).json('Nope try again')
      } else {
        return res.redirect('/')
      }
    })
  }

  find (req, res) {
    Celeb.find({ name: req.params.name }, (err, celeb) => {
      console.log(celeb)
      if (err) {
        console.log('Oopsie Daisy', err)
        return res.status(404).json('Nope try again')
      } else {
        console.log(celeb)
        res.json({ celeb })
      }
    })
  }
}

module.exports = new CelebController()
