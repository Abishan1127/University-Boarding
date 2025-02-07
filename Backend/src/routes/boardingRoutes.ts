import express from "express";
import { getBoardingsByUniversity, addBoarding } from "../controllers/boardingController";

const router = express.Router();

router.get("/", getBoardingsByUniversity);
router.post("/", addBoarding);

export default router;
