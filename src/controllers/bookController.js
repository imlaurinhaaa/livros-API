const Book = require("../models/book");
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
            const page = new Book(title, author, publisher, yearPublication);
            lista.addBook(page);
            res.status(200).json({ message: "Livro adicionado com sucesso!" });
        } catch (error) {
            res.status(400).json({ message: "Erro ao adicionar livro", error });
        }
    },

    getAllBooks: (req, res) => {
        try {
            const books = lista.getAllBooks();
            res.status(200).json(books);
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar livros", error });
        }
    },

    getBooksById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).jsoon(lista.getBookById(id));
        } catch (error) {
            res.status(404).json({ message: "Livro não encontrado", error });
        }
    },

    updateBook: (req, res) => {
        try {
            const id = req.params.id;
            const book = req.body;
            lista.updateBook(id, book);
            res.status(202).json({ message: "Livro atualizado com sucesso!" });
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar livro", error });
        }
    },

    deleteBook: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.deleteBook(id));
        } catch (error) {
            res.status(404).json({ message: "Erro ao deletar livro", error });
        }
    },

    getTotalBooks: (req, res) => {
        try {
            res.status(200).json(lista.getTotalBooks());
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar total de livros", error });
        }
    }
}
module.exports = router;