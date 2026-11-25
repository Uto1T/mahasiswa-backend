const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM mahasiswa';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Gagal mengambil data', error: err.message });
    }
    res.status(200).json(results);
  });
});

router.post('/', (req, res) => {
  const { nim, nama, alamat, tgl_lahir, jurusan } = req.body;
  const sql = 'INSERT INTO mahasiswa (nim, nama, alamat, tgl_lahir, jurusan) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [nim, nama, alamat, tgl_lahir, jurusan], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Gagal menambahkan data mahasiswa', error: err.message });
    }
    res.status(201).json({
      message: 'Data mahasiswa berhasil ditambahkan',
      data: { nim, nama, alamat, tgl_lahir, jurusan }
    });
  });
});

router.put('/:nim', (req, res) => {
  const { nim } = req.params;
  const { nama, alamat, tgl_lahir, jurusan } = req.body;
  const sql = 'UPDATE mahasiswa SET nama = ?, alamat = ?, tgl_lahir = ?, jurusan = ? WHERE nim = ?';

  db.query(sql, [nama, alamat, tgl_lahir, jurusan, nim], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Gagal mengubah data mahasiswa', error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Mahasiswa dengan NIM ${nim} tidak ditemukan` });
    }
    res.status(200).json({ message: 'Data mahasiswa berhasil diperbarui' });
  });
});

router.delete('/:nim', (req, res) => {
  const { nim } = req.params;
  const sql = 'DELETE FROM mahasiswa WHERE nim = ?';

  db.query(sql, [nim], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Gagal menghapus data mahasiswa', error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Mahasiswa dengan NIM ${nim} tidak ditemukan` });
    }
    res.status(200).json({ message: 'Data mahasiswa berhasil dihapus' });
  });
});

module.exports = router;