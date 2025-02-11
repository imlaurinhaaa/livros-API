const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/books", bookController.getAllBooks);
router.post("/books", bookController.addBook);
router.delete("/books/:id", bookController.deleteBook);
router.get("/books/:id", bookController.getBookById);
router.put("/books/:id", bookController.updateBook);


module.exports = router;
