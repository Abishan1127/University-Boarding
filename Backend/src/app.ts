import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import universityRoutes from "./routes/universityRoutes";
import boardingRoutes from "./routes/boardingRoutes";
import roomRoutes from "./routes/roomRoutes.js";
import { Pool } from "pg";

dotenv.config();

// ✅ Create an instance of Pool
const pool = new Pool({
  user: process.env.DB_USER,         // PostgreSQL username
  host: process.env.DB_HOST,         // Database host (e.g., localhost)
  database: process.env.DB_NAME,     // Database name
  password: process.env.DB_PASSWORD, // Database password
  port: Number(process.env.DB_PORT), // PostgreSQL port (default: 5432)
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/universities", universityRoutes);
app.use("/api/boardings", boardingRoutes);
app.use("/api/rooms", roomRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to UniLanka Backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await pool.connect();  // ✅ Use the `pool` instance to connect
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
});
