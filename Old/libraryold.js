let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //for styling purposes
    this.height = 150 + (Math.random() * 50);
    this.width = 15 + (Math.random() * 25);
    this.color = [Math.random()*255, Math.random()*255, Math.random()*255]; 
}

function addBookToLibrary(myLibrary){
    for(i = 0; i < myLibrary.length; i++){
        let newBook = document.createElement("div");
        newBook.classList.add('book');
        if(myLibrary[i].read == 'on'){
            innerShelfRead.appendChild(newBook);
        }else{
            innerShelfNotRead.appendChild(newBook);
        }
        newBook.style.height = myLibrary[i].height + "px";
        newBook.style.width = myLibrary[i].width + "px";
        newBook.style.backgroundColor = "rgb(" + myLibrary[i].color[0] + ", " +
                                                 myLibrary[i].color[1] + ", " +
                                                 myLibrary[i].color[2] + ")";
        newBook.appendChild(document.createTextNode(myLibrary[i].title));    
    }
}

//just to test making the divs on javascript 
myLibrary.push(new Book('Pokemon', 'Hiroshi Osaka', 122, 'on'));
myLibrary.push(new Book('Harry Potter', 'JK Rowling', 234, 'on'));
myLibrary.push(new Book('The Lord of the Rings', 'JRR Tolkien', 345, 'on'));
myLibrary.push(new Book('The Power of Habit', 'John McAdoo', 455, 'off'));
myLibrary.push(new Book('Sapiens', 'Ireali Dude', 567, 'off'));
myLibrary.push(new Book('Outliers', 'Malcolm Gladwell', 678, 'off'));

const addButton = document.getElementById('addButton');
const bookForm = document.getElementById('book-form');
const closeFormButton = document.getElementById('closeButton');
const submitButton = document.getElementById('submitButton');
const innerShelfRead = document.getElementById('innerShelfRead');
const innerShelfNotRead = document.getElementById('innerShelfNotRead');
const bookEndNotRead = document.getElementById('bookEndNotRead');

console.log(myLibrary);
addBookToLibrary(myLibrary);


addButton.addEventListener('click', () => bookForm.style.display = "block");
closeFormButton.addEventListener('click', () => bookForm.style.display = "none");
bookForm.addEventListener('submit', event => {
    event.preventDefault();
    let titleInput = document.getElementById('titleInput').value;
    let authorInput = document.getElementById('authorInput').value;
    let pageInput = document.getElementById('pageInput').value;
    let readInput = document.getElementById('readInput').checked ? 
        document.getElementById('readInput').value : 'off';
    newBook = new Book(titleInput, authorInput, pageInput, readInput);
    myLibrary.push(newBook);
    
    bookForm.reset();
    console.log(myLibrary);
});
