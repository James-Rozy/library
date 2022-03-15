let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = () => {
    return console.log(
      this.title + ", " + this.author + ", " + this.pages + ", " + this.isRead
    );
  };
}

function addBookToLibrary(title, author, pages, isRead) {
  
}

function getBookCard(book) {
  const card = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const isRead = document.createElement('p');
  const deleteBtn = document.createElement('button');

  card.classList.add('card');
  
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Not read");
theHobbit.info();
