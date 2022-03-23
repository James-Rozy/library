const body = document.querySelector("body");
const libraryGrid = document.querySelector(".library-grid");
const btnAddBook = document.querySelector(".btn-add-book");
const modalAddBook = document.querySelector(".modal-add-book");
const modalContent = document.querySelector(".modal-content");
const addBookForm = document.querySelector(".add-book-form");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const genreInput = document.querySelector(".genre-input");
const pagesInput = document.querySelector(".pages-input");
const isReadInput = document.querySelector(".is-read-input");
const modalBtnDone = document.querySelector(".modal-btn-done");

let myLibrary = [];

function Book(title, author, genre, pages, isRead) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.isRead = isRead;

  this.info = () => {
    return console.log(
      this.title +
        ", " +
        this.author +
        ", " +
        this.genre +
        ", " +
        this.pages +
        ", " +
        this.isRead
    );
  };
}

btnAddBook.onclick = () => addBook();

function addBook() {
  // if done is pressed add book to library and close modal
  modalBtnDone.addEventListener("click", () => {

    modalAddBook.style.display = "none";
  });

  // closing the modal by clicking on the blurred background
  window.onclick = (e) => {
    if (e.target === modalAddBook) {
      modalAddBook.style.display = "none";
    }
  }

  modalAddBook.style.display = "block";
}

function bookCard(book) {
  const card = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const genre = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("div");
  const isRead = document.createElement("p");
  const ifRead = document.createElement("input");
  const deleteBtn = document.createElement("button");

  card.classList.add("book-card");
  title.classList.add("title");
  author.classList.add("author");
  genre.classList.add("genre");
  pages.classList.add("pages");
  read.classList.add("read");
  isRead.classList.add("is-read");
  ifRead.setAttribute("type", "checkbox");
  ifRead.classList.add("if-read");
  deleteBtn.classList.add("btn-delete-book");

  title.textContent = book.title;
  author.textContent = book.author;
  genre.textContent = book.genre;
  pages.textContent = book.pages + " pages";
  isRead.textContent = book.isRead;
  deleteBtn.textContent = "Delete";

  if (isRead.textContent === "Read") {
    isRead.style.color = "var(--is-read-color)";
    ifRead.setAttribute("checked", "true");
  } else {
    isRead.style.color = "var(--delete-bg-color)";
  }

  ifRead.addEventListener("change", () => {
    if (ifRead.checked === true) {
      isRead.textContent = "Read";
      isRead.style.color = "var(--is-read-color)";
    } else {
      isRead.textContent = "Not Read";
      isRead.style.color = "var(--delete-bg-color)";
    }
  });

  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(genre);
  card.appendChild(pages);
  read.appendChild(isRead);
  read.appendChild(ifRead);
  card.appendChild(read);
  card.appendChild(deleteBtn);
  libraryGrid.appendChild(card);
}

function addBooksToLibrary(library = []) {
  for (i in library) {
    let currBook = library[i];
    let currCard = bookCard(currBook);
  }
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "Fantasy Fiction",
  "295",
  "Read"
);

const chamberOfSecrets = new Book(
  "Harry Potter and the Chamber of Secrets",
  "J.K. Rowling",
  "Fantasy Fiction",
  "341",
  "Read"
);

myLibrary.push(theHobbit);
myLibrary.push(chamberOfSecrets);

addBooksToLibrary(myLibrary);
