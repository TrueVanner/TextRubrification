require("dotenv").config();
const express = require("express");
const Logger = require("../../Logger");

const authRouter = require("./Routers/authRouter.js");

const errMiddleware = require("./Middlewares/errorMiddleware");
const authController = require("./Controllers/authController.js");
const authMiddleware = require("./Middlewares/authMiddleware");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(authMiddleware);

app.use("/auth", authRouter);
app.use("/validateToken", authController.validateT)

app.use(errMiddleware);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started, port = " + PORT);
        });
    } catch (e) {Logger.error(e)}
}

start();