import { Request, Response } from 'express';
import prisma from '../prisma/client';

// Listar todos os posts
export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar posts' });
  }
};

// Criar um novo post
export const createPost = async (req: Request, res: Response) => {
  const { userId, content, imageUrl } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        userId,
        content,
        imageUrl,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar post' });
  }
};
// Atualizar um post
export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content, imageUrl } = req.body;
  try {
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: { content, imageUrl },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar post' });
  }
};

// Deletar um post
export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.post.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Post deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar post' });
  }
};
