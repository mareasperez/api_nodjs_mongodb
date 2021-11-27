import { Router } from "express";
import Task from "../Models/task";

const router = Router();

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.json(tasks);
});

router.post("/tasks", async (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  const task = new Task({ title, description });
  console.log(task);
  task.save();
  res.send(task);
});

router.put("/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(updatedTask);
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      res.status(404).json({ message: "task not found" });
    }
    res.json(deletedTask);
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
});

export default router;
