// Import required modules
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Connect from "@/app/database/Connect";
import Admin from "@/app/models/Admin";

async function seedDefaultAdmin() {
  // MongoDB connection URL
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
    const admin = await Admin.create(defaultAdminData);
    console.log("Default admin seeded successfully:", admin);
  } catch (error) {
    console.error("Error seeding default admin:", error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}

// Call the function to seed default admin
await seedDefaultAdmin();
