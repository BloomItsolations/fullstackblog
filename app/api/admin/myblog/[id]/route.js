import Connect from "@/app/database/Connect";
import Post from "@/app/models/Post";
import { NextResponse } from "next/server";

export let GET = async (req, { params }) => {
  const { id } = params;
  console.log("admni id ", id);
  await Connect(); // Assuming Connect function connects to MongoDB
  try {
    const data = await Post.find({ AdminId: id });
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json({ msg: "Error fetching blog posts" });
  }
};
