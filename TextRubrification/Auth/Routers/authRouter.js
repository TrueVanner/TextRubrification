const Router = require("express").Router;
const contoller = require("../Controllers/authController");

const router = new Router();

router.post("/login", contoller.login);
router.get("/getAdmins", authMiddleware, contoller.getAdmins);

module.exports = router;