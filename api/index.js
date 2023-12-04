import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import bcrypt from 'bcrypt';

import User from './models/User.models.js';

const app = express();
app.use(express.json());
app.use(cors());

// const bcryptSalt = bcrypt.genSalt(12);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro na conexão ao MongoDB:', err));

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.post('/api/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    // Gera o salt dentro da função assíncrona
    const hashedSenha = await bcrypt.hash(senha, 12);

    // Cria um novo usuário e o salva no banco de dados
    const newUser = new User({
      nome,
      email,
      senha: bcrypt.hashSync(senha, hashedSenha),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(8000, () => {
  console.log('Servidor rodando na porta 8000');
});
