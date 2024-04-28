import express from "express";
import { refresh } from "./data.js";
import { connect } from "./db.js";
import Job from "./Job.js";

const app = express();
connect();
app.use(express.json());

// Start the interval that fetches new data from the API every 5 minutes
setInterval(refresh, 5 * 60 * 1000);

app.get("/refresh", (req, res) => {
  // Do a refresh every time it is requested
  refresh();
  res.send("OK");
});

app.get("/ai-jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    const aiJobs = jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes("ai") ||
        job.text.toLowerCase().includes("ai")
      );
    });
    res.json(aiJobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  // TODO: Get all jobs from MongoDB
  // TODO: Filter the jobs list looking for the word "AI" in the title or the text
  // TODO: Respond with the matches
});

app.post("/ai-jobs", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// TODO: add endpoint to delete a single job based on its id
app.get("/ai-jobs/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Job.findByIdAndDelete(id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// TODO: add endpoint to delete all jobs
app.get("/jobs", async (req, res) => {
  try {
    await Job.deleteMany();
    res.send("All jobs deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = 3007;
app.listen(port, () => console.log(`Server is running on port ${port}`));
