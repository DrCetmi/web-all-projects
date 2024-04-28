import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: String,
  gender: {
    type: String,
    enum: ["Männlich", "Weiblich", "Divers", "N/A"],
    default: "N/A",
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
