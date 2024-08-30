const myLibrary = [];





class Book {
    constructor (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? "Read" : "Not read";
}
}

function displayEachBook(){/*--------------------------------------------------------function that can display each book in array */



    myLibrary.forEach(book => {

    const container = document.querySelector(".main-page");

    let newCard = document.createElement("div");
    newCard.className = "card";
    container.appendChild(newCard);
    
    let newTitle = document.createElement("h1");
    newTitle.textContent = book.title;
    newCard.appendChild(newTitle);

    let newAuthor = document.createElement("h2");
    newAuthor.textContent = book.author;
    newCard.appendChild(newAuthor);

    let newPages = document.createElement("h2");
    newPages.textContent = book.pages;
    newCard.appendChild(newPages);

    let newRead = document.createElement("button");
        newRead.className = "read";
        newRead.textContent = book.read;
    newCard.appendChild(newRead);

    let newDel = document.createElement("button");
    newDel.textContent = "Remove";
newCard.appendChild(newDel);
    
        
    });

    
}




const addBookBtn = document.querySelector("#addBookBtn");
addBookBtn.addEventListener("click", function(){
    openDialog();
})
function openDialog(){
    const dialog = document.querySelector("dialog");
    const overlay = document.querySelector("#overlay");
    dialog.showModal();
    overlay.style.display = "block";
}

document.getElementById("submitAddBookBtn").addEventListener("click", function(){/*----------------------function for adding new book on main page from form */
     let form = document.getElementById("addBookForm");
    if(form.checkValidity()){

    let form = document.getElementById("addBookForm");

    let formData = new FormData(form);

    let title = formData.get("title");
    let author = formData.get("author");
    let pages = formData.get("pages");
    let read = document.getElementById("checkBoxRead").checked;


    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);                                /*-----------------------------------adds new book in array */

    displayEachBook();
    
        const dialog = document.querySelector("dialog");
        const overlay = document.querySelector("#overlay");
        dialog.close();
        overlay.style.display = "none";
    
    form.reset();

    }
    else{
        form.reportValidity();
    }


    


})


document.querySelector(".main-page").addEventListener("click", function(event) {
    let parentCard = event.target.parentNode;/* --------------------------find parent or card element of button */
    let titleOfButton = parentCard.querySelector("h1");/* ------------------find title of book for searching in array */
    let h1Title = titleOfButton.textContent;

    updateBook = myLibrary.find(book => book.title === h1Title); /*--------------function is from chat, because i cant find whort and clever solution for this. */
    

    if (event.target.classList.contains("read")){  /*---------------------because is just two buttons, i have if contition, to change read status or else delete the card */
        if (event.target.classList.contains("read")) {/*-------------------------changes the text in button from read to not read */
            if (event.target.textContent === "Read") {
                event.target.textContent = "Not read";
                event.target.style.backgroundColor = "var(--red)";
                updateBook.read = "Not read";
            } else {
                event.target.textContent = "Read";
                event.target.style.backgroundColor = "var(--light-green)";
                updateBook.read = "Read";
            }
        }
    }
    else{
        parentCard.remove();/*----------------delete card in DOM */
        
        let bookIndex = myLibrary.findIndex(book => book.title === h1Title)/*---------delete object in array */
        myLibrary.splice(bookIndex, 1);
    }
});