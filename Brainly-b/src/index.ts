import express from "express";
import jsonWebToken from "jsonwebtoken"; 
import mongoose from "mongoose";
import { Usermodel, ContentModel} from  "./db.js";
import { userMiddlware } from "./middleware.js";
import { JWT_PASSWORD } from "./config.js";
import cors from "cors";

const app = express()
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors());


app.post("/api/v1/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;


    try{
        await Usermodel.create({
            username:username,
            password:password,
        })
        res.json({
            message:"user signed up"
        })
    }catch(error){
        res.status(400).json({
            message:"user already exsist"
        })
    }

})

app.post("/api/v1/signin",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await Usermodel.findOne({
        username,
        password
    })
    if (existingUser){
        const token = jsonWebToken.sign({
            id: existingUser._id
        },JWT_PASSWORD);

        res.json({
            token
        })

    }else{
        res.status(403).json({
            messsage: "incorrect credentials"
        });
    }
})

app.post("/api/v1/content",(req, res)=>{
})

app.get("/api/v1/content",userMiddlware,async(req,res)=>{
    const { title, link, type } = req.body
    // const link = req.body.link;
    // const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        title,
        //@ts-ignore
        userId: req.userId,
        tags:[]
    })
    return res.json({
        message : "content Added"
    })

})

app.delete("/api/v1/delet",(req,res)=>{

})

app.post("/api/v1/share",(req,res)=>{

})

app.get("/api/v1/brain/:shareLink",(req,res)=>{

})

app.listen(3000);
console.log("server is running on port 3000");