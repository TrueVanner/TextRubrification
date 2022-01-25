const Router = require("express").Router;
const contoller = require("../Controllers/authController");
const adminMiddleware = require("../Middlewares/adminMiddleware");

const router = new Router();

router.post("/register", contoller.register);
router.post("/login", contoller.login);
router.get("/getAdmins", adminMiddleware, contoller.getAdmins);
router.get("/addAdmin", adminMiddleware, contoller.addAdmin);

module.exports = router;