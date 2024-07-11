import mongoose from 'mongoose'
let categoryData=new mongoose.Schema({
    title:{type:String},                                             
    image:{type:String}
},{timestamps:true})
export default mongoose.models.Category || mongoose.model("Category",categoryData);