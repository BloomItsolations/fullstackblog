import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import User from "@/app/models/User";
import Connect from "@/app/database/Connect";
export let GET=async ()=>{
   await Connect();
   try{
      let data=await User.find({});
      return NextResponse.json({data})
   }
   catch(e){
      return NextResponse.json({"msg":e.message})
   }
}
export let POST=async (req)=>{
   await Connect();
     let data=await req.json();
     let {name, email,image}=data;
     let checkmail=await User.findOne({email})
     if(checkmail){
        return NextResponse.json({"msg":"Email Already Exist"})
     }

     let newUser=new User({name, email, image});

     try{
        let newdata=await newUser.save();
        return NextResponse.json({"msg":"user data added in database successfully",newdata})
     }catch(e){
        return NextResponse.json({"msg":e.message})
     }
}