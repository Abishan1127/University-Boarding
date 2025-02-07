import { Request, Response } from "express";
import { prisma } from "../db/database"; // Assuming Prisma is used

export const getAllUniversities = async (req: Request, res: Response) => {
  try {
    const universities = await prisma.university.findMany();
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: "Error fetching universities" });
  }
};

export const addUniversity = async (req: Request, res: Response) => {
  const { name, location } = req.body;
  try {
    const newUniversity = await prisma.university.create({
      data: { name, location },
    });
    res.status(201).json(newUniversity);
  } catch (error) {
    res.status(500).json({ error: "Error adding university" });
  }
};
