import { NextResponse } from "next/server";
import JWT from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import Connect from "@/app/database/Connect";
import Admin from "@/app/models/Admin";
export let POST=async(req)=>{
    await Connect();
   let data=await req.json();
   let {email,password}=data;
   let checkusername=await Admin.findOne({email});
   if(!checkusername){
    return NextResponse.json({"msg":"Invalid Email Id!"}) 
   }

   let matchpassword=await bcrypt.compare(password, checkusername.password)
   if(!matchpassword){
    return NextResponse.json({"msg":"Invalid Password"});
   }
   let tokendata={
    id:checkusername._id,
    username:checkusername.username
   }
   let token=JWT.sign(tokendata,"tokenname");
   return NextResponse.json({"msg":"Login Successfully",userDetails:{id:checkusername._id, name:checkusername.name, email:checkusername.email,token}});
   
}