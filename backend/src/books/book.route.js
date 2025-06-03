const express = require('express');
const { postBook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();

router.post("/", verifyAdminToken, postBook)
router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.put("/edit/:id", verifyAdminToken, UpdateBook);
router.delete("/:id", verifyAdminToken, deleteABook)

module.exports = router;