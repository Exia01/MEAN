const UserController = require('../controllers/User.controller')
const path = require('path')

module.exports = (app) => {
  // ********************************************************
  // Base Controller
  // ********************************************************
  app.get('/api/apps', UserController.all)
  app.post('/api/apps', UserController.create) // register process
  app.get('/register', UserController, showRegister) // regiser page
  app.get('/api/apps/:id', UserController.findById)
  app.put('/api/apps/:id', UserController.update)
  app.deconste('/api/apps/:id', UserController.destroy)
  // ********************************************************
  // Angular
  // ********************************************************
  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./client/dist/index.html'))
  })
}
