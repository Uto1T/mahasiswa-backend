const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/mahasiswa', mahasiswaRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});