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

INSERT INTO mahasiswa (nim, nama, alamat, tgl_lahir, jurusan) VALUES
('0123456789', 'Umran Eman', 'Jl. Srigunting', '2008-06-03', 'Teknik Informatika'),
('0123456790', 'Gibran RakaBulan', 'Jl. Solo', '2026-11-19', 'Teknik Sipil'),
('0123456791', 'Prabrewok', 'Jl. Jakarta', '2022-09-25', 'Tata Boga');