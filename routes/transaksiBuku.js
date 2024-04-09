const express = require('express');
const router = express.Router();
const transaksiBuku = require('../services/transaksiBuku');

/* GET transaction. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await transaksiBuku.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting transaksi peminjaman buku `, err.message);
    next(err);
  }
});

/* POST a new transaction */
router.post('/', async function(req, res, next) {
    try {
      res.json(await transaksiBuku.create(req.body));
    } catch (err) {
      console.error(`Error while creating transaction`, err.message);
      next(err);
    }
  });
  

/* PUT a transaction by ID */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await transaksiBuku.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating transaction`, err.message);
      next(err);
    }
  });
  
/* DELETE a transaction by ID */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await transaksiBuku.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting transaction`, err.message);
      next(err);
    }
  });
  
//  permintaan GET
router.get('/:id', async function(req, res, next) {
    try {
      res.json(await transaksiBuku.search(req.params.id)); // perhatikan pemanggilan fungsi search di sini
    } catch (err) {
      console.error(`Error while searching transactions `, err.message);
      next(err);
    }
  });
  

module.exports = router;
