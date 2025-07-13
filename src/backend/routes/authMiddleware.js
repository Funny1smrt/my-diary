// src/backend/routes/authMiddleware.js
import adminAuth from "../firebase-admin.js";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const user = await adminAuth.verifyIdToken(token);
    req.user = user; // важливо — прикріплюємо юзера до запиту
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
