const Router = require("express").Router;
const contoller = require("../Controllers/topicController");

const adminMiddleware = require("../Middlewares/adminMiddleware");

const router = new Router();

router.post("/getTopics", contoller.getTopics);
router.get("/addTopic", contoller.addTopic);
router.post("/remove", adminMiddleware, contoller.remove);
router.post("/update", adminMiddleware, contoller.update);

module.exports = router;