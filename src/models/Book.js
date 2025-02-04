const { v4: uuid4 } = require("uuid");

class Book {
    constructor(title, author, publisher, yearPublication ) {
        this.uuid4 = uuid4();
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.yearPublication = yearPublication;
    }
}

module.exports = Book;