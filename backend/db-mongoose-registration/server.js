import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import User from "./models/User.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error connecting to the database", err));

// async function main() {
//   try {
//     await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to the database");
//   } catch (error) {
//     console.log("Error connecting to the database: ", error);
//   }
// }

// main();
User.create({
  username: "Max",
  password: "123",
  firstName: "Max",
  lastName: "Mustermann",
  dateOfBirth: new Date("1990-01-01"),
  email: "max@gmail.com",
  phone: "123456789",
  gender: "Männlich",
})
  .then((user) => console.log(user))
  .catch((error) => console.log(error));

app.get("/list", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.get("/register", (req, res) => {
  try {
    const newUser = new User(req.body);
    res.status(200).send("Registrierung erfolgreich");
  } catch (error) {
    res.status(400).send("Registrierung fehlgeschlagen");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
