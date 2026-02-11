import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://manmpatel101:<db_password>@cluster0.c3qll1m.mongodb.net/brainly").then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log("failed to connect database", err)
});

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String, required: true },
})

export const Usermodel = model("User", UserSchema);


const ContentSchema = new Schema({
    title: String,
    type: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
})

export const ContentModel = model("Content", ContentSchema);

const ShareLinkSchema = new Schema({
    pageType: {
        type: String,
        enum: ["question"],
        required: true,
    },

    pageId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    clicks: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

export const ShareLink = model("ShareLink", ShareLinkSchema);
