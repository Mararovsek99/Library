const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){

    let title = prompt("Enter the title of the book");
    let author = prompt("Enter the author of the book");
    let pages = prompt("Enter the number of pages");
    let read = prompt("Have you read this book?");

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);

    console.log(`${title} by ${author} has been added to the library`);
}