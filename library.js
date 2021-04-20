let myLibrary = [];

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){

}

const addButton = document.getElementById('addButton');
const bookForm = document.getElementById('book-form');
const closeForm = document.getElementById('closeButton');

addButton.addEventListener('click', () => {
    bookForm.style.display = "block";
})

closeForm.addEventListener('click', () =>{
    bookForm.style.display = "none";
})