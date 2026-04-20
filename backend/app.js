const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/', (req, res) => {
  res.send("Backend Working ✅");
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});


app.post('/task', (req, res) => {
  const { task } = req.body;

  if (!task || task.trim() === "") {
    return res.status(400).send("Task is required");
  }

  tasks.push({ task });
  res.send("Task Added");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});