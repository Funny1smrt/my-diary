import express from "express";
import sql from "./db.js"; // Підключаємо базу

const app = express();
app.use(express.json());

sql`SELECT NOW()`
  .then((res) => {
    console.log("🟢 Підключення до БД OK:", res);
  })
  .catch((err) => {
    console.error("❌ Помилка підключення до БД:", err);
  });


app.get("/", (req, res) => {
  res.send("✅ Сервер працює! Привіт з бекенду 👋");
});
app.get("/api/time", async (req, res) => {
  const result = await sql`SELECT NOW()`;
  res.json({ now: result[0].now });
});
app.listen(process.env.PORT, () => {
  console.log("✅ Сервер запущено на http://localhost:" + process.env.PORT);
});