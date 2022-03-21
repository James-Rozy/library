const libraryGrid = document.querySelector(".library");
const btnAddBook = document.querySelector(".btn-add-book");
const btnDeleteBook = document.querySelector(".btn-delete-book");

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

function addBooksToLibrary(library = []) {
  for (i in library) {
    let currBook = library[i];
    let currCard = bookCard(currBook);
  }
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

  // deleteBtn.addEventListener("")

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

function checkIfRead(e) {
  
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "Fantasy Fiction",
  "295",
  "Not read"
);

const chamberOfSecrets = new Book(
  "Harry Potter 2",
  "J.K. Rowling",
  "Fantasy Fiction",
  "341",
  "Not read"
);

myLibrary.push(theHobbit);
myLibrary.push(chamberOfSecrets);

addBooksToLibrary(myLibrary);
