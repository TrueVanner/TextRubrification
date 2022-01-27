require("dotenv").config();
const express = require("express");

const authRouter = require("./Routers/topicRouter");

const errMiddleware = require("./Middlewares/errMiddleware");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/topic", topicRouter);

app.use(errMiddleware);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started, port = " + PORT);
        });
    } catch (e) {console.log(e)}
}

start();