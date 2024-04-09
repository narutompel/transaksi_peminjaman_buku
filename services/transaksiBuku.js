const db = require("./db");
const helper = require("../helper");
const config = require("../config");

// GET
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`
    SELECT id, id_buku, id_anggota, tanggal_peminjaman, tanggal_pengembalian, status 
    FROM transaksi_peminjaman_buku 
    LIMIT ${offset}, ${config.listPerPage}
  `);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta
  };
}

module.exports = {
  getMultiple
};

// POST
async function create(transactionData) {
    const result = await db.query(`
      INSERT INTO transaksi_peminjaman_buku 
      (id_buku, id_anggota, tanggal_peminjaman, tanggal_pengembalian, status) 
      VALUES 
      (?, ?, ?, ?, ?)
    `, [transactionData.id_buku, transactionData.id_anggota, transactionData.tanggal_peminjaman, transactionData.tanggal_pengembalian, transactionData.status]);
  
    let message = 'Error in creating transaction';
  
    if (result.affectedRows) {
      message = 'Transaction created successfully';
    }
  
    return { message };
  }
  
//   PUT
  async function update(id, transactionData) {
    const result = await db.query(`
      UPDATE transaksi_peminjaman_buku 
      SET id_buku=?, id_anggota=?, tanggal_peminjaman=?, tanggal_pengembalian=?, status=? 
      WHERE id=?
    `, [transactionData.id_buku, transactionData.id_anggota, transactionData.tanggal_peminjaman, transactionData.tanggal_pengembalian, transactionData.status, id]);
  
    let message = 'Error in updating transaction';
  
    if (result.affectedRows) {
      message = 'Transaction updated successfully';
    }
  
    return { message };
  }
  

//   DELETE
async function remove(id) {
    const result = await db.query(
      `DELETE FROM transaksi_peminjaman_buku WHERE id=?`,
      [id]
    );
  
    let message = 'Error in deleting transaction';
  
    if (result.affectedRows) {
      message = 'Transaction deleted successfully';
    }
  
    return { message };
  }
  
// SEARCH
async function search(id) {
  const rows = await db.callSpSearch(id);
  const data = helper.emptyOrRows(rows);
  return {
    data
  }
}

  module.exports = {
    getMultiple,
    create,
    update,
    remove,
    search
  };
  