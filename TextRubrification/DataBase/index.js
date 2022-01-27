require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./Routers/authRouter');
const errorMiddleware = require("./Middlewares/errorMiddleware");

const PORT = process.env.PORT;
const URL = process.env.DB_URL;


const PORT = process.env.PORT
const URL = process.env.DB_URL2

const app = express();

app.use(express.json());

app.use('/auth',authRouter);

app.use(errorMiddleware);

const start = async () =>{
    try{
        
        await mongoose.connect(URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })

        app.listen(PORT, ()=> {
            Logger.serverStart(PORT);
        })

    }catch(e){
        Logger.error(e);
    }
}
start();