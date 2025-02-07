import express from "express";
import { getRoomsByBoarding, addRoom } from "../controllers/roomController";

const router = express.Router();

router.get("/", getRoomsByBoarding);
router.post("/", addRoom);

export default router;
