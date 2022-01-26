const Router = require('express').Router
const controller = require('../Controlers/authController')

const router = new Router()
router.post('/addUser',controller.addUser)
router.get('/deleteUser',controller.deleteUser)
router.post('/findUser',controller.findUser)

module.exports = router 