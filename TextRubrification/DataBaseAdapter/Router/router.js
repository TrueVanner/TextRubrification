const Router = require("express").Router;
const contoller = require("../Controller/controller");

const router = new Router();

router.post("/getAll", controller.getAll);
router.post("/addTopic", contoller.addTopic);
router.post("/addWord", contoller.addWord);
router.post("/removeTopic", contoller.removeTopic);
router.post("/removeWord", contoller.removeword);
router.post("/updateTopic", controller.updateTopic);
router.post("/updateWord", controller.updateWord)

module.exports = router;