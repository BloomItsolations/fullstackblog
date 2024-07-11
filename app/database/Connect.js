import mongoose from "mongoose";
import { NextResponse } from "next/server";

async function Connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://cypressadmin:cypresspswd@cluster0.k8uxneb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/hotelblogwebapp"
    );
    console.log("database connected");
  } catch (e) {
    return NextResponse.json({ msg: e.message });
  }
}

export default Connect;
