import mongoose from "mongoose";
import { NextResponse } from "next/server";

async function Connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("database connected");
  } catch (e) {
    return NextResponse.json({ msg: e.message });
  }
}

export default Connect;
