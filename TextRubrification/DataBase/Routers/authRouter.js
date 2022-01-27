const Router = require('express').Router
const controller = require("../Controller/authController")

const router = new Router()
router.post('/addUser',controller.addUser)
router.post('/deleteUser',controller.deleteUser)
router.get('/findUser',controller.findUser)

module.exports = router 