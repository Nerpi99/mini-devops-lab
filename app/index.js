const express = require('express');
const mongoose = require('mongoose');
const Message = require('./Message');
const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/devops_lab';

app.use(express.json());

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB 🚀'))
  .catch(err => console.error('Mongo connection error:', err));

app.get('/hello', (req, res) => {
  res.send('Hello from DevOps Lab with Mongo!');
});

app.get('/health', (req, res) => {
  res.send({ status: 'ok' });
});

// GET /messages
app.get('/messages', async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

// POST /messages
app.post('/messages', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  const msg = new Message({ text });
  await msg.save();
  res.status(201).json(msg);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
