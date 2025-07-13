// src/backend/firebase-admin.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// потрібно для __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// читаємо JSON-файл з ключем
const serviceAccount = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./firebase-service.json"), "utf8")
);

// ініціалізація Firebase Admin SDK
const app = initializeApp({
  credential: cert(serviceAccount),
});

// отримуємо доступ до Auth
const adminAuth = getAuth(app);

export default adminAuth;
