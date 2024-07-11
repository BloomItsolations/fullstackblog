import mongoose from 'mongoose'
let Userdata=new mongoose.Schema({
    name:{type:String},                                             
    email:{type:String},
    image:{type:String}
},{timestamps:true})
export default mongoose.models.User || mongoose.model("User",Userdata);