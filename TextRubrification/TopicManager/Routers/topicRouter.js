const Router = require("express").Router;
const contoller = require("../Controllers/topicController");

const router = new Router();

router.post("/getTopics", contoller.getTopics);
router.get("/addTopic", authMiddleware, contoller.addTopic);
router.post("/remove", contoller.remove);
router.post("/update", contoller.update);

module.exports = router;