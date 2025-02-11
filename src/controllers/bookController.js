const Book = require("../models/Book");
const BookList = require("../models/BookList");

const lista = new BookList();

lista.addBook(new Book('Tarde Demais', 'Colleen Hoover', 'Galera Record', 2018));
lista.addBook(new Book('Amor Teoricamente', 'Ali Hazelwood', 'Arqueiro', 2023));

const router = {
    addBook: (req, res) => {
        try {
            const { title, author, publisher, yearPublication } = req.body;
            if (!title || !author || !publisher || !yearPublication) {
                throw new Error("Todos os campos são obrigatórios");
            }
            const book = new Book(title, author, publisher, yearPublication);
            lista.addBook(book);
            res.status(200).json({ message: "Livro adicionado com sucesso!" });
        } catch (error) {
            res.status(400).json({ message: "Erro ao adicionar livro"});
        }
    },

    getAllBooks: (req, res) => {
        try {
            const books = lista.getAllBooks();
            res.status(200).json(books);
        } catch (error) {
            res.status(404).json({ message: "Erro ao buscar livros"});
        }
    },

    getBookById: (req, res) => {
        try {
            const id = req.params.id;
            console.log(id);
            console.log(typeof id);
            res.status(200).json(lista.getBookById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar livro por id",
                error: error.message,
            });
        }
    },


    updateBook: (req, res) => {
        try {
            res.status(200).json(lista.updateBook(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar",
                error: error.message,
            });
        }
    },

    deleteBook: (req, res) => {
        try {
            const book = req.params.id;
            lista.deleteBook(book);
            res.status(200).json({ message: "Livro deletado com sucesso!" });
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar livro"});
        }
    }
}
module.exports = router;