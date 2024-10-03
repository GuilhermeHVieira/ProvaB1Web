import { Request, Response } from 'express';
import prisma from '../prisma/client'; // Importando o Prisma Client

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany(); // Usando o Prisma Client
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};
