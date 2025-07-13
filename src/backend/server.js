import express from "express";
import tasksRoutes from "./routes/tasks.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRoutes); // підключення роуту
app.get("/", (req, res) => {
  res.send("✅ Сервер працює! Спробуй /api/tasks або інші API");
});

app.listen(3000, () => {
  console.log("✅ Сервер запущено на http://localhost:3000");
});
