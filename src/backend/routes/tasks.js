import express from "express";
import sql from "../db.js";
import authMiddleware from "./authMiddleware.js";

const router = express.Router();

// Отримати задачі для користувача
router.get("/", authMiddleware, async (req, res) => {
  const userId = req.user.uid;
  const tasks = await sql`SELECT * FROM tasks WHERE user_id = ${userId}`;
  res.json(tasks);
});

// Додати нову задачу
router.post("/", authMiddleware, async (req, res) => {
  const userId = req.user.uid;
  const { title } = req.body;
  const result = await sql`
    INSERT INTO tasks (user_id, title) 
    VALUES (${userId}, ${title}) 
    RETURNING *`;
  res.status(201).json(result[0]);
});

// Видалити задачу
router.delete("/:id", authMiddleware, async (req, res) => {
  const userId = req.user.uid;
  const taskId = req.params.id;
  await sql`DELETE FROM tasks WHERE id = ${taskId} AND user_id = ${userId}`;
  res.status(204).send();
});

router.patch("/:id", authMiddleware, async (req, res) => {
  const userId = req.user.uid;
  const taskId = req.params.id;
  const { status } = req.body;

  try {
    const result = await sql`
      UPDATE tasks
      SET status = ${status}
      WHERE id = ${taskId} AND user_id = ${userId}
      RETURNING *`;

    if (result.length === 0) {
      return res.status(404).json({ error: "Задачу не знайдено" });
    }
    res.json(result[0]);
    console.log("✅ Змінено статус задачі:", result[0]);

  } catch (err) {
    console.error("❌ Помилка при оновленні статусу:", err.message);
    res.status(500).json({ error: "Внутрішня помилка сервера" });
  }
});

    

export default router;
