require("dotenv").config();
const express = require("express");

const authRouter = require("./Routers/authRouter");

const errMiddleware = require("./Middlewares/errorMiddleware");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const URL = process.env.DB_URL;
const app = express();

app.use(express.json());

app.use("/auth", mainRouter);

app.use(errMiddleware);

const start = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => {
            console.log("Server started, port = " + PORT);
        });
    } catch (e) {console.log(e)}
}

start();











