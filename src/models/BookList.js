class BookList {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getAllBooks() {
        return this.books;
    }

    getBookById(id) {
        const book = this.books.find((book) => book.id == id);
        console.log('encontrado', book);
        if (!book) {
            throw new Error("Livro não encontrado");
        }
        return book;
    }

    updateBook(id, updateData) {
        const book = this.getBookById(id);
        Object.assign(book, updateData);
        return book;
    }

    deleteBook(id) {
        this.books = this.books.filter(book => book.id != id);
    }
}

module.exports = BookList;