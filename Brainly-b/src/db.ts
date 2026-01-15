import mongoose,{model ,Schema} from "mongoose";

mongoose.connect("mongodb+srv://patelmanm:Manmpatel11@cluster0.inttvey.mongodb.net/");

const UserSchema = new Schema({
    username: {type:String, unique:true},
    password: {type:String, require:true},
})

export const Usermodel= model("User", UserSchema);


const ContentSchema= new Schema({
    title: String,
    type: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: {type:mongoose.Types.ObjectId, ref:'User', required: true}
})

export const ContentModel = model("Content", ContentSchema);