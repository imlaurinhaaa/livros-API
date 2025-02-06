class BookList {
    constructor() {
        this.books = [];
    }

    getAllBooks() {
        return this.books;
    }

    getBookById(id) {
        const book = this.books.find(book => book.id == id);
        if(!song) {
            throw new Error('Book not found');
        }
        return book;
    }

    addBook(book) {
        this.books.push(book);
    }

    updateBook(id, updateData) {
        const book = this.getBookById(id);
        Object.assign(book, updateData);
        return book;
    }

    deleteBook(id) {
        this.books = this.books.filter(book => book.id != id);
    }

    getAllTotalBooks() {
        return this.books.length;
    }
}