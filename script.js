const myLibrary = [];

function Book(name, author, year, price) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor.");
  }
  this.name = name;
  this.author = author;
  this.year = year;
  this.price = price;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, year, price) {
  const book = new Book(name, author, year, price);
  myLibrary[myLibrary.length] = book;
}
addBookToLibrary("The Great Gatsby","F. Scott Fitzgerald",1925,200);
addBookToLibrary("To Kill a Mockingbird","Harper Lee",1960,275);
addBookToLibrary("Moby-Dick","Herman Melville",1851,170);
addBookToLibrary("War and Peace","Leo Tolstoy",1867,220);