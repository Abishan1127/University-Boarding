import express from "express";
import universityRoutes from "./routes/universityRoutes";
import boardingRoutes from "./routes/boardingRoutes";
import roomRoutes from "./routes/roomRoutes";

const app = express();
app.use(express.json());

app.use("/api/universities", universityRoutes);
app.use("/api/boardings", boardingRoutes);
app.use("/api/rooms", roomRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
