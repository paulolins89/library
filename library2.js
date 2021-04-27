let myLibrary = [];


if(localStorage.length > 0){
    let i = 0;
    for (books in localStorage){
        myLibrary[i] = JSON.parse(localStorage.getItem('book' + i));
        i++;
        //addBookToLibrary(myLibrary)
    }
    
}

localStorage.clear();


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
        read.classList.add('readCheckbox');
        read.setAttribute("id", 'read' + i);
        if(myLibrary[i].read == 'on'){
            read.setAttribute("checked", "checked");   
        }
        newBook.appendChild(read);
        
        let deleteButton = document.createElement("input");
        deleteButton.setAttribute("type", "button");
        deleteButton.setAttribute("value", "Delete");
        deleteButton.classList.add('deleteButton');
        deleteButton.setAttribute("id", 'delete' + i);
        
        newBook.appendChild(deleteButton);
        localStorage.setItem(('book' + i), JSON.stringify(myLibrary[i]));
    }
    
}

// detects whether localStorage is both supported and available
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

/*
//can be deleted after you remove the pre-added books
myLibrary.push(new Book('Pokemon', 'Hiroshi Osaka', 122, 'on'));
myLibrary.push(new Book('Harry Potter', 'JK Rowling', 234, 'on'));
myLibrary.push(new Book('The Lord of the Rings', 'JRR Tolkien', 345, 'on'));
myLibrary.push(new Book('The Power of Habit', 'John McAdoo', 455, 'off'));
myLibrary.push(new Book('Sapiens', 'Ireali Dude', 567, 'off'));
myLibrary.push(new Book('Outliers', 'Malcolm Gladwell', 678, 'off'));
*/

booksTable = document.getElementById('booksTable');

//addBookToLibrary(myLibrary);

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
});

booksTable.addEventListener('click', event => {
    if (event.target.className == 'deleteButton'){
        let targetIndex = parseFloat(event.target.id.slice(6));
        myLibrary = myLibrary.slice(0,targetIndex).concat(myLibrary.slice(targetIndex + 1))
        addBookToLibrary(myLibrary);
    }
    if (event.target.className == 'readCheckbox'){
        let targetIndex = parseFloat(event.target.id.slice(4));
        if(myLibrary[targetIndex].read == "on"){
            myLibrary[targetIndex].read = "off";
        }else{
            myLibrary[targetIndex].read = "on";
        }
    }
});

