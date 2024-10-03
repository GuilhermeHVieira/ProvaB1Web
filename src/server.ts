import express from 'express';
import userRoutes from './routes/UserRoutes';
import postRoutes from './routes/PostRoutes';
import commentRoutes from './routes/CommentRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
