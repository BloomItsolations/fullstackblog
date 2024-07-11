import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Connect from "@/app/database/Connect";
export let GET = async () => {
  await Connect();
  try {
    let data = await Admin.find({});
    return NextResponse.json({ data });
  } catch (e) {
    return NextResponse.json({ msg: e.message });
  }
};
export let POST = async (req) => {
  await Connect();
  let data = await req.json();
  let { name, email, password } = data;
  let checkmail = await Admin.findOne({ email });
  if (checkmail) {
    return NextResponse.json({ msg: "Email Already Exist" });
  }
  let hashedpassword = await bcrypt.hash(password, 8);
  let newUser = new Admin({ name, email, password: hashedpassword });
  try {
    let newdata = await newUser.save();
    return NextResponse.json({ msg: "Sign Up successfully", newdata });
  } catch (e) {
    return NextResponse.json({ msg: e.message });
  }
};
