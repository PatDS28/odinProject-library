const myLibrary = [];

function Book(author, title, pageNumber, haveRead) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.haveRead = haveRead;
}
// book1 = new Book("Robert Greene", "40 Laws of Power", 452, "no")
// book2 = new Book("Brianna West", "The Mountain is You", 241, "no")
// myLibrary.push(book1);
// myLibrary.push(book2);

function addBookToLibrary(author, title, pageNumber, haveRead) {
  // do stuff here
  book = new Book(author, title, pageNumber, haveRead);
  myLibrary.push(book);
}

function showBooks(author, title, pageNumber, haveRead){
  const container = document.querySelector(".books-list-container")
  const newDiv = document.createElement("div");
  newDiv.className = "card";
  const h2_title = document.createElement("h2")
  h2_title.textContent = "Title: " + title;
  const h4_author = document.createElement("h4")
  h4_author.textContent = "Author: " + author;
  const h4_pageNumber = document.createElement("h4")
  h4_pageNumber.textContent = "Number of Page: " + pageNumber;
  const h4_haveRead = document.createElement("h4")
  h4_haveRead.textContent = "Have read: " + haveRead;
  newDiv.appendChild(h2_title);
  newDiv.appendChild(h4_author);
  newDiv.appendChild(h4_pageNumber);
  newDiv.appendChild(h4_haveRead);

  container.appendChild(newDiv);
}
// showBooks(myLibrary[0].author, myLibrary[0].author, myLibrary[0].author, myLibrary[0].author)

const openModal = document.querySelector(".open-modal");
const dialog = document.querySelector(".dialog");

openModal.addEventListener("click", ()=>{
  dialog.showModal();
});