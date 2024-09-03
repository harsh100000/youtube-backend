import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import express from "express"

const app = express()

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`MongoDB connected !! DB host: ${connectionInstance.connection.host}`)

        app.on("error",(error)=>{
            console.log("Error occured : ", error);
            throw error
        })

    } catch (error) {
        console.log("MONGODB connection failed : ", error);
        process.exit(1);
    }
}

export default connectDB