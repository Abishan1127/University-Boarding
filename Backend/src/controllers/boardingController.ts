import { Request, Response } from "express";
import { prisma } from "../db/database";

export const getBoardingsByUniversity = async (req: Request, res: Response) => {
  const universityId = parseInt(req.params.universityId);
  if (isNaN(universityId)) {
    return res.status(400).json({ error: "Invalid University ID" });
  }

  try {
    const boardings = await prisma.boarding.findMany({
      where: { university_id: universityId },
    });
    res.json(boardings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching boardings" });
  }
};

export const addBoarding = async (req: Request, res: Response) => {
  const { university_id, name, address } = req.body;
  try {
    const newBoarding = await prisma.boarding.create({
      data: { university_id, name, address },
    });
    res.status(201).json(newBoarding);
  } catch (error) {
    res.status(500).json({ error: "Error adding boarding" });
  }
};
