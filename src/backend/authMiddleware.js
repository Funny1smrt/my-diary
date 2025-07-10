// // src/backend/authMiddleware.js
// import admin from "./firebaseAdmin.js";

// export const verifyToken = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader?.startsWith("Bearer ")) {
//     return res.status(403).send("🚫 Немає токена");
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = await admin.auth().verifyIdToken(token);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     console.error("❌ Невірний токен:", err);
//     res.status(403).send("🚫 Невірний токен");
//   }
// };
