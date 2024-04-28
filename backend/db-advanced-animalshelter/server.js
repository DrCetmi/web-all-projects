import express from "express";
import * as db from "./db.js";

const app = express();
const port = 3000;
await db.connect();

// TODO: Add endpoints
app.get("/animals", async (req, res) => {
  const animals = await db.animals.find();
  res.json(animals);
});

app.post("/animals", async (req, res) => {
  const animal = req.body;
  const newAnimal = await db.animals.create(animal);
  res.json(newAnimal);
});

app.put("/animals/:id", async (req, res) => {
  const id = req.params.id;
  const animal = req.body;
  const updatedAnimal = await db.animals.findByIdAndUpdate(id, animal, {
    new: true,
  });
  res.json(updatedAnimal);
});

app.patch("/animals/:id", async (req, res) => {
  const id = req.params.id;
  const animal = req.body;
  const updatedAnimal = await db.animals.findByIdAndUpdate(id, animal, {
    new: true,
  });
  res.json(updatedAnimal);
});

app.delete("/animals/:id", async (req, res) => {
  const id = req.params.id;
  await db.animals.findByIdAndDelete(id);
  res.json({ message: "Deleted" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
