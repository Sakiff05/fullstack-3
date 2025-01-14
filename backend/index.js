import express from "express";
import cors from "cors"
const app = express()
import "./config/config.js"
import { route } from "./routers/ProductRouters.js";

app.use(cors())
app.use(express.json())

app.listen("5000",()=>{
    console.log("Listening at port 5000");
})

app.use(route,()=>{
    console.log("connected");
})