// const jsTextArea = document.getElementById("code");
// const jsButton = document.getElementById("js");
// const cTextArea = document.getElementById("js");
// const cButton = document.querySelector("c");

// function addJsCode(){
//     jsTextArea.value="js code"
// }
// function addCCode(){
//     jsTextArea.value="C++ only";
// }
//Elements
const displayButton = document.getElementById("display-btn");
const books = document.querySelectorAll(".books");
console.log(books);
console.log(displayButton);

//Display() method
displayButton.addEventListener("click",()=>{
    books[0].style.display = 'block';
    for(const book of books){
        book.style.display = 'flex'
    }
    
    // alert('clicked')
});
