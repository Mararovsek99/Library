const myLibrary = [{
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    read: "read",
},
{
    title: "1984",
    author: "George Orwell",
    pages: 328,
    read: "read",
},
{
    title: "Moby Dick",
    author: "Herman Melville",
    pages: 635,
    read: "read",
},
{
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: "read",
}];







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