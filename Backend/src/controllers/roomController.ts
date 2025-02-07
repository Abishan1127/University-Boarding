import { Request, Response } from "express";
import { prisma } from "../db/database";

export const getRoomsByBoarding = async (req: Request, res: Response) => {
  const boardingId = parseInt(req.params.boardingId);
  if (isNaN(boardingId)) {
    return res.status(400).json({ error: "Invalid Boarding ID" });
  }

  try {
    const rooms = await prisma.room.findMany({
      where: { boarding_id: boardingId },
    });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ error: "Error fetching rooms" });
  }
};

export const addRoom = async (req: Request, res: Response) => {
  const { boarding_id, type, price, available } = req.body;
  try {
    const newRoom = await prisma.room.create({
      data: { boarding_id, type, price: parseFloat(price), available },
    });
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(500).json({ error: "Error adding room" });
  }
};
