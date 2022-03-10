function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = () => {
    return console.log(
      this.title + ", " + this.author + ", " + this.pages + ", " + this.read
    );
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Not read");
theHobbit.info();
