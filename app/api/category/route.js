import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import Category from '@/app/models/Category';
import Connect from '@/app/database/Connect';

export async function GET(){

  await Connect();
   try{
    let data=await Category.find({});
    return NextResponse.json({"category":data})
   }
   catch(errror){
     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
   }

}

export async function POST(request) {
  const formData = await request.formData();

  
  if (!formData.has('file')) {
    return NextResponse.json({ error: 'image not found in request' }, { status: 400 });
  }

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

  const file = formData.get('file');

  try {
    const arrayBuffer = await file.arrayBuffer();
    const base64String = Buffer.from(arrayBuffer).toString('base64');
    const result = await cloudinary.uploader.upload(`data:${file.type};base64,${base64String}`, {
      folder: 'uploads'
    });
    await Connect();

    const  title  = formData.get('title'); 
    const newCategory = new Category({
      title,
      image: result.secure_url
    });

    const savedCategory = await newCategory.save();

    return NextResponse.json(savedCategory, { status: 200 });
  } catch (error) {
    console.error('Error uploading file to Cloudinary:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
