const Router = require("express").Router;
const contoller = require("../Controllers/mainController");

const router = new Router();

router.post("/addTopic", contoller.addTopic);
router.post("/analyzeText", contoller.analyze);
router.post("/removeTopic", contoller.remove);
router.post("/redactTopic", contoller.update);

module.exports = router;