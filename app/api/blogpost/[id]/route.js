import Connect from "@/app/database/Connect";
import Post from "@/app/models/Post";
import { NextResponse } from "next/server";

export let GET=async (req,{params})=>{
    let {id}=params;
    await Connect();
    try{
       let data=await Post.findById(id);
       return NextResponse.json({data});
    }
    catch(e){
       return NextResponse.json({"msg":e.msg});
    }

}
