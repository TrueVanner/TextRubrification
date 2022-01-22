const Router = require("express").Router;
const contoller = require("../Controllers/authController");

const router = new Router();

router.post("/authorize", contoller.generateT);
router.get("/getAdmins", authMiddleware, contoller.getAdmins);
router.post("/remove", contoller.remove);

module.exports = router;