const myLibrary = [];

function Book(author, title, pageNumber, haveRead) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.haveRead = haveRead;
}
book1 = Book("Robert Greene", "40 Laws of Power", 452, "no")
book2 = Book("Brianna West", "The Mountain is You", 241, "no")

myLibrary.push(book1);
myLibrary.push(book2);

function addBookToLibrary(author, title, pageNumber, haveRead) {
  // do stuff here
  book = new Book(author, title, pageNumber, haveRead);
  myLibrary.push(book);
}