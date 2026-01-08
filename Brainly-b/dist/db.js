import mongoose, { model, Schema } from "mongoose";
mongoose.connect("mongodb+srv://patelmanm:Manmpatel11@cluster0.inttvey.mongodb.net/");
const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});
export const Usermodel = model("user", UserSchema);
//# sourceMappingURL=db.js.map