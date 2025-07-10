import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import postgres from "postgres";

// Потрібно для правильного шляху до `.env`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Завантаження змінних з .env
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("❌ DATABASE_URL is not defined in .env file");
}

const sql = postgres(connectionString);
export default sql;
