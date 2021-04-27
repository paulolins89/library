let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(myLibrary){
    while (booksTable.lastElementChild){
        booksTable.removeChild(booksTable.lastElementChild);
    }
    for(i = 0; i < myLibrary.length; i++){
        let newBook = document.createElement("div");
        newBook.classList.add('books');
        booksTable.appendChild(newBook);
        let title = document.createElement("p")
        title.textContent = myLibrary[i].title;
        let author = document.createElement("p")
        author.textContent = myLibrary[i].author;
        let pages = document.createElement("p")
        pages.textContent = myLibrary[i].pages;
        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pages);
        let read = document.createElement("input");
        read.setAttribute("type", "checkbox");
        if(myLibrary[i].read == 'on'){
            read.setAttribute("checked", "checked");   
        }
        newBook.appendChild(read);
        let deleteButton = document.createElement("input");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "Delete?");
        deleteButton.classList.add('deleteButton');
        deleteButton.setAttribute("id", 'delete' + i);
        newBook.appendChild(deleteButton);
        
    }
}

myLibrary.push(new Book('Pokemon', 'Hiroshi Osaka', 122, 'on'));
myLibrary.push(new Book('Harry Potter', 'JK Rowling', 234, 'on'));
myLibrary.push(new Book('The Lord of the Rings', 'JRR Tolkien', 345, 'on'));
myLibrary.push(new Book('The Power of Habit', 'John McAdoo', 455, 'off'));
myLibrary.push(new Book('Sapiens', 'Ireali Dude', 567, 'off'));
myLibrary.push(new Book('Outliers', 'Malcolm Gladwell', 678, 'off'));

booksTable = document.getElementById('booksTable');

console.log(myLibrary);
addBookToLibrary(myLibrary);

deleteButtons = document.querySelectorAll('.deleteButton');

deleteButtons.forEach(input => {
    input.addEventListener('click', event => {
        console.log(event);
    });
});

bookForm.addEventListener('submit', event => {
    event.preventDefault();
    let titleInput = document.getElementById('titleInput').value;
    let authorInput = document.getElementById('authorInput').value;
    let pageInput = document.getElementById('pageInput').value;
    let readInput = document.getElementById('readInput').checked ? 
        document.getElementById('readInput').value : 'off';
    myLibrary.push(new Book(titleInput, authorInput, pageInput, readInput));
    addBookToLibrary(myLibrary);
    bookForm.reset();
    console.log(deleteButtons);
});

