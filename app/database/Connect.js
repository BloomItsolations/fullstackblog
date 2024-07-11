import mongoose from "mongoose";
import { NextResponse } from "next/server";

async function Connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("database connected");
  } catch (e) {
    return NextResponse.json({ msg: e.message });
  }
}

export default Connect;
