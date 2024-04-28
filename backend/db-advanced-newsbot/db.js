import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/jobs", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");

    mongoose.connection.on("error", (err) => {
      console.error("Database connection error:", err);
    });
    mongoose.connection.on("connected", () => {
      console.error("Database connected");
    });
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
