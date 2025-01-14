import { config } from "dotenv"; 
import mongoose from "mongoose";
config();

mongoose.connect(process.env.ConnectionString).then(()=>{
    console.log("connected");
})