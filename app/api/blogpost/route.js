import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import Connect from "@/app/database/Connect";
import Post from "@/app/models/Post";
import Admin from "@/app/models/Admin";
import bcrypt from "bcryptjs";
export async function GET() {
  await Connect();
  try {
    let hashedpassword = await bcrypt.hash("adminPassword", 8);
    // Define default admin data
    const defaultAdminData = {
      name: "Admin Name",
      email: "admin@example.com",
      phone: "1234567890",
      password: hashedpassword,
    };

    // Insert default admin into MongoDB using Mongoose
    await Admin.create(defaultAdminData);
    // Fetch all blog posts from MongoDB using Mongoose
    let data = await Post.find({});
    return NextResponse.json({ Post: data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const formData = await request.formData();

  if (
    !formData.has("file") ||
    !formData.has("title") ||
    !formData.has("AdminId") ||
    !formData.has("content") ||
    !formData.has("authername")
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  const file = formData.get("file");
  const title = formData.get("title");
  const AdminId = formData.get("AdminId");
  const content = formData.get("content");
  const authername = formData.get("authername");

  try {
    const arrayBuffer = await file.arrayBuffer();
    const base64String = Buffer.from(arrayBuffer).toString("base64");
    let result;

    if (file.type.startsWith("image/")) {
      result = await cloudinary.uploader.upload(
        `data:${file.type};base64,${base64String}`,
        {
          folder: "uploads",
          resource_type: "image",
        }
      );
    } else if (file.type.startsWith("video/")) {
      result = await cloudinary.uploader.upload(
        `data:${file.type};base64,${base64String}`,
        {
          folder: "uploads",
          resource_type: "video",
        }
      );
    } else {
      return NextResponse.json(
        { error: "Unsupported file type" },
        { status: 400 }
      );
    }

    await Connect();
    const newBlogPost = new Post({
      title,
      image: result.secure_url,
      AdminId: AdminId,
      content,
      authername,
      comments: [],
    });

    const savedBlogPost = await newBlogPost.save();

    return NextResponse.json(savedBlogPost, { status: 200 });
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
