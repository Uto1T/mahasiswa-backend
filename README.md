# Mahasiswa Backend API

REST API berbasis Express.js dan MySQL untuk mengelola operasi CRUD (Create, Read, Update, Delete) data mahasiswa.

## Struktur Database
Database: `db_mahasiswa` | Tabel: `mahasiswa`

```sql
CREATE DATABASE IF NOT EXISTS db_mahasiswa;
USE db_mahasiswa;

CREATE TABLE IF NOT EXISTS mahasiswa (
  nim VARCHAR(15) NOT NULL,
  nama VARCHAR(100) NOT NULL,
  alamat TEXT,
  tgl_lahir DATE,
  jurusan VARCHAR(50),
  PRIMARY KEY (nim)
);
```
*(Script lengkap beserta data awal tersedia pada file `database.sql`).*

## Cara Instalasi & Menjalankan
1. Install dependencies:
   ```bash
   npm install
   ```
2. Buat file `.env` di folder root backend dan sesuaikan konfigurasi MySQL:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password_mysql_anda
   DB_NAME=db_mahasiswa
   ```
3. Jalankan server:
   ```bash
   npm run dev
   ```
Server berjalan di `http://localhost:5000`.