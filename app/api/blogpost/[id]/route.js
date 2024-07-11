import Connect from "@/app/database/Connect";
import Post from "@/app/models/Post";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

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

export let DELETE=async (req,{params})=>{
    let {id}=params;
    await Connect();
    try{
       let deletedata=await Post.findByIdAndDelete(id);
       return NextResponse.json({"msg":"Item Deleted Successfully"})
    }
    catch(e){
        return NextResponse.json({"msg":e.message})
    }
}

export async function PUT(request, {params}) {
    let {id}=params;
    const formData = await request.formData();

    if (!formData.has('title')  || !formData.has('content') || !formData.has('authername')) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
     
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });

    try {
        let imageUrl = '';

        if (formData.has('file')) {
            const file = formData.get('file');
            const arrayBuffer = await file.arrayBuffer();
            const base64String = Buffer.from(arrayBuffer).toString('base64');
            const result = await cloudinary.uploader.upload(`data:${file.type};base64,${base64String}`, {
                folder: 'uploads'
            });
            imageUrl = result.secure_url;
        }

        await Connect(); 
        const existingPost = await Post.findById(id);

        if (!existingPost) {
            return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
        }

        existingPost.title = formData.get('title');
        existingPost.content = formData.get('content');
        existingPost.authername = formData.get('authername');
        if (imageUrl !== '') {
            existingPost.image = imageUrl;
        }

        let updatedata=await Post.findByIdAndUpdate(id,existingPost)

        return NextResponse.json(updatedata, { status: 200 });
    } catch (error) {
        console.error('Error updating blog post:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
