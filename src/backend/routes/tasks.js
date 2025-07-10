// import express from "express";
// import sql from "../db.js";
// import { verifyToken } from "../authMiddleware.js";

// const router = express.Router();

// // GET /api/tasks
// router.get("/", verifyToken, async (req, res) => {
//   const { uid } = req.user;

//   const tasks = await sql`
//     SELECT * FROM tasks
//     WHERE user_id = ${uid}
//     ORDER BY created_at DESC
//   `;

//   res.json(tasks);
// });

// // POST /api/tasks
// router.post("/", verifyToken, async (req, res) => {
//   const { title } = req.body;
//   const { uid } = req.user;

//   if (!title || !uid) return res.status(400).send("Missing title or user");

//   const [task] = await sql`
//     INSERT INTO tasks (id, user_id, title)
//     VALUES (${crypto.randomUUID()}, ${uid}, ${title})
//     RETURNING *
//   `;

//   res.status(201).json(task);
// });

// // PUT /api/tasks/:id
// router.put("/:id", verifyToken, async (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   const { uid } = req.user;

//   const [task] = await sql`
//     UPDATE tasks SET title = ${title}
//     WHERE id = ${id} AND user_id = ${uid}
//     RETURNING *
//   `;

//   if (!task) return res.status(404).json({ error: "Задачу не знайдено" });

//   res.json(task);
// });

// // DELETE /api/tasks/:id
// router.delete("/:id", verifyToken, async (req, res) => {
//   const { id } = req.params;
//   const { uid } = req.user;

//   const result = await sql`
//     DELETE FROM tasks WHERE id = ${id} AND user_id = ${uid}
//   `;

//   if (result.count === 0) return res.status(404).send("Задача не знайдена");

//   res.sendStatus(204);
// });

// export default router;
