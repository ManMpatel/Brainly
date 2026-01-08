import express, { json } from "express";
import jsonWebToken from "jsonwebtoken"; 
import mongoose from "mongoose";
import { Usermodel, ContentModel} from  "./db.js";
import { userMiddlware } from "./middleware.js";
const JWT_PASSWORD = '123456';
const app = express()
app.use(express.json());


app.post("/api/v1/signup", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;


    try{
        await Usermodel.create({
            username:username,
            password:password
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
            messsage: "incorrect credentials"
        });
    }
})

app.post("/api/v1/content",(req, res)=>{
})

app.get("/api/v1/content",userMiddlware,async(req,res)=>{
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags:[]
    })

})

app.delete("/api/v1/delet",(req,res)=>{

})

app.post("/api/v1/share",(req,res)=>{

})

app.get("/api/v1/brain/:shareLink",(req,res)=>{

})

app.listen(3000);