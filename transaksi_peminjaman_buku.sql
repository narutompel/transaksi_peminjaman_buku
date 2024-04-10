-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Apr 2024 pada 11.36
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `transaksi_peminjaman_buku`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi_peminjaman_buku`
--

CREATE TABLE `transaksi_peminjaman_buku` (
  `id` int(11) NOT NULL,
  `id_buku` int(11) DEFAULT NULL,
  `id_anggota` int(11) DEFAULT NULL,
  `tanggal_peminjaman` date DEFAULT NULL,
  `tanggal_pengembalian` date DEFAULT NULL,
  `status` enum('Dipinjam','Dikembalikan') DEFAULT 'Dipinjam'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `transaksi_peminjaman_buku`
--

INSERT INTO `transaksi_peminjaman_buku` (`id`, `id_buku`, `id_anggota`, `tanggal_peminjaman`, `tanggal_pengembalian`, `status`) VALUES
(1, 1, 1, '2024-01-01', '2024-01-05', 'Dikembalikan'),
(2, 2, 2, '2024-01-08', '2024-04-12', 'Dikembalikan'),
(3, 3, 3, '2024-02-23', '2024-02-28', 'Dikembalikan'),
(4, 4, 4, '2024-03-11', '2024-03-16', 'Dikembalikan'),
(5, 5, 5, '2024-03-25', '2024-03-30', 'Dikembalikan'),
(6, 6, 6, '2024-04-08', NULL, 'Dipinjam'),
(7, 7, 7, '2024-04-15', NULL, 'Dipinjam'),
(11, 302, 16, '2024-05-02', '2024-05-06', 'Dikembalikan');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `transaksi_peminjaman_buku`
--
ALTER TABLE `transaksi_peminjaman_buku`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `transaksi_peminjaman_buku`
--
ALTER TABLE `transaksi_peminjaman_buku`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
