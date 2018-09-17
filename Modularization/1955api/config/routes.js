let path = require('path') // do we need this?
let CelebController = require('../controllers/CelebController')

module.exports = app => {
  app.get('/', CelebController.all)
  app.get('/new/:name/', CelebController.create)
  app.get('/remove/:name/', CelebController.remove)
  app.get('/:name', CelebController.find)
}
