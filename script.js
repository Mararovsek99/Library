const myLibrary = [];







function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayEachBook(){



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

const submitAddBookBtn = document.querySelector("#submitAddBookBtn");
submitAddBookBtn.addEventListener("click", function(){
    const dialog = document.querySelector("dialog");
    const overlay = document.querySelector("#overlay");
    dialog.close();
    overlay.style.display = "none";

})

document.getElementById("submitAddBookBtn").addEventListener("click", function(){

    let form = document.getElementById("addBookForm");

    let formData = new FormData(form);

    let title = formData.get("title");
    let author = formData.get("author");
    let pages = formData.get("pages");
    let read = document.getElementById("checkBoxRead").checked;


    let newBook = {
        title: title,
        author: author,
        pages: pages,
        read: read ? "read" : "not read"
    }
    myLibrary.push(newBook);

    const container = document.querySelector(".main-page");

    let newCard = document.createElement("div");
    newCard.className = "card";
    container.appendChild(newCard);
    
    let newTitle = document.createElement("h1");
    newTitle.textContent = newBook.title;
    newCard.appendChild(newTitle);

    let newAuthor = document.createElement("h2");
    newAuthor.textContent = newBook.author;
    newCard.appendChild(newAuthor);

    let newPages = document.createElement("h2");
    newPages.textContent = newBook.pages;
    newCard.appendChild(newPages);

    let newRead = document.createElement("button");
        newRead.className = "read";
        newRead.textContent = newBook.read;
    newCard.appendChild(newRead);

    let newDel = document.createElement("button");
    newDel.textContent = "Remove";
newCard.appendChild(newDel);
    




    form.reset();


})