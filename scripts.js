
const displayButton = document.getElementById("display-btn");
const resetButton = document.getElementById("reset-btn");
const countButton = document.getElementById("count-btn");
const emptyButton = document.getElementById("empty-btn");
const fullButton = document.getElementById("full-btn");
const popButton = document.getElementById("pop-btn");
const peekButton = document.getElementById("peek-btn");
const pushButton = document.getElementById("push-btn");
const changeButton = document.getElementById("change-btn");
const allBooksDiv = document.querySelector(".view");
const booksDiv = document.querySelector(".books");
const codeChangeCode = document.getElementById("the-code");
const storyBook = document.querySelector(".story");
const openBookButton = document.querySelector(".open-popup");
const closeBookButton = document.querySelector(".popup__close");
const popUpContent = document.querySelector(".popup__content");
let bookArr = ['The Ugly Duckling','Cindarella','Paddington','The cat in the hat','The three little pigs','Little red ridding hood']
class Stack{
    constructor(){
      this.items = ['The Ugly Duckling','Cindarella','Paddington','The cat in the hat','The three little pigs','Little red ridding hood'];
    }
    
     //Push an item in the Stack
     push = function(element){
       this.items.push(element);
     }    
  
     //Pop an item from the Stack
     pop = function(){
       return this.items.pop();
     }
       
     //Peek top item from the Stack
     peek = function(){
       return this.items[this.items.length - 1];
     }
  
     //Is Stack empty
     isEmpty = function(){
       return this.items.length === 0;
     }     
  
     //Clear the Stack
     clear = function(){
        this.items.length = 0;
     }
       
     //Size of the Stack
     size = function(){
       return this.items.length;
     }
  }
  let stack = new Stack();   //creating new instance of Stack
  let inputField = document.getElementsByName("abook");

let num = 5;
let seletedBookIndex;

storyBook.addEventListener("click",()=>{
    storyBook.classList.remove("hide");

})
openBookButton.addEventListener("click",()=>{
    storyBook.click();
})
closeBookButton.addEventListener("click",()=>{
    storyBook.classList.add("hide");
    
})
let story="";
peekButton.addEventListener("click",()=>{
     seletedBookIndex=prompt("Enter the index of the book you'd like to read 📖📚");
    if(seletedBookIndex==5){
                openBookButton.click();
             story  = `
                <h1 class="popup__title r-title">Long Story Short: Little red ridding hood</h1>
                <img src="./images/red.jfif"></img>
                <ul>
                <li>Little Red Riding Hood lived in a wood with her mother. One 
                day Little Red Riding Hood went to visit her granny. She had 
                a nice cake in her basket.</li>
                <li>On her way Little Red Riding Hood met a wolf. 
                ‘Hello!’ said the wolf. ‘Where are you going?’</li>
                <li>‘I’m going to see my grandmother. She lives in a house behind those trees.’
                </li>
                <li>The wolf ran to Granny’s house and ate Granny up. He got into Granny’s bed. A little 
                later, Little Red Riding Hood reached the house. She looked at the wolf</li>
                <li>The wolf ran to Granny’s house and ate Granny up. He got into Granny’s bed. A little 
                later, Little Red Riding Hood reached the house. She looked at the wolf</li>
                <li>Granny, what big ears you have!’
                ‘All the better to hear you with!’ said the wolf.</li>
                <li>Granny, what a big nose you have!’
                ‘All the better to smell you with!’ said the wolf</li>
                <li>Granny, what a big nose you have!’
                ‘All the better to smell you with!’ said the wolf</li>
                <li>A woodcutter was in the wood. He heard a loud scream and ran to the house. 
                </li>
                <li>The woodcutter hit the wolf over the head. The wolf opened his mouth wide and 
                shouted and Granny jumped out.</li>
                </ul>
                <li>The wolf ran away and Little Red Riding Hood never saw the wolf again. 
                </li>
                </ul>
                <hr>`
        popUpContent.insertAdjacentHTML("beforebegin",story);
    }else if(seletedBookIndex==4){ openBookButton.click();
        openBookButton.click();
     story  = `
        <h1 class="popup__title r-title">Long Story Short: The three little Pigs</h1>
        <img src="./images/pigs.jpg"></img>
        <ul>
        <li>A mother pig sends her THREE LITTLE PIGS out into the world to seek their fortunes, and each builds a house.</li>
        <li>The first little pig builds a house of straw, but a wolf blows down that house and eats the pig.</li>
        <li>The second little pig builds a house of sticks, but the same wolf blows it down and eats the pig.</li>
        <li>The third pig builds a strong house of bricks, so when the wolf comes to the door, he can't blow the house down.</li>
        <li>The wolf devises several schemes to trick the third pig into leaving his house so the wolf can eat him, but the pig outsmarts the wolf every time.</li>
        <li>Finally, the wolf tries to sneak down the pig's chimney, but the pig places a pot of water to boil over the fire, and when the wolf falls in, the pig cooks the wolf and eats him for supper.</li>
           </ul>
           <hr>`
           
popUpContent.insertAdjacentHTML("beforebegin",story);}
    else if(seletedBookIndex==3){
        openBookButton.click();
    story  = `
        <h1 class="popup__title r-title">Long Story Short: The cat in the hat</h1>
        <img src="./images/cat.jfif"></img>
        <ul>
        <li>Two children, Sally and Sam, are home alone and having a very dreary day.</li>
        <li>Suddenly, they’re graced with a surprise visit from a stranger, the Cat.</li>
        <li>He comes in, assures them their mom won’t mind his toys and tricks, and makes a very big mess. </li>
        <li>Before the Cat leaves, he cleans up his mess, and when Sam and Sally’s mother returns home, nothing is amiss.</li>

           </ul>
           <hr>`
           
popUpContent.insertAdjacentHTML("beforebegin",story);
    }
    else if(seletedBookIndex==2){ 
        openBookButton.click();

     story  = `
    <h1 class="popup__title r-title">Long Story Short: Paddington</h1>
    <img src="./images/bear.webp"></img>
    <ul>
    <li>One day Mr and Mrs Brown are going to Paddington station to pick up their daughter Judy after her summer vacations, but instead they find a bear sitting on a bench with a suitcase.</li>
    <li>They ask the bear if he wants to stay with the Brown family, the bear politely replies yes, so the bear is named after the station, Paddington. </li>
    <li>Paddington keeps having adventures - for example falling in tubs of hot water, creating havoc underground in the subway stations, having funny shopping expeditions, painting first prize paintings by accident, </li>
    <li> becoming an actor in a theatre and dropping marmalade sandwiches on top of people's heads in the theatre, going to the seaside and sailing in buckets all day long and making eggs disappear and making them reappear under peoples bums.</li>
       </ul>
       <hr>`
       
    popUpContent.insertAdjacentHTML("beforebegin",story);}
    else if(seletedBookIndex==1){
        openBookButton.click();

        story  = `
        <h1 class="popup__title r-title">Long Story Short: Cindarella</h1>
        <img src="./images/princess.jfif"></img>
        <ul>
        <li>Cinderella is a princess.</li>
        <li>She was born to 2 lovely parents.</li>
        <li>Her mother dies early, and her father remarries.</li>
        <li>But the stepmother and Cinderella’s two stepsisters treated her like a servant.</li>
        <li>Cinderella meets the Prince once in the forest.</li>
        <li>She goes to the royal ball ceremony with the fairy godmother’s help and dances with the prince.</li>
        <li>The carriage, driver, horse, dress, etc., were all magical and would have returned to normal just after the clock struck midnight.</li>
        <li>In a hurry to leave the palace before midnight, Cinderella forgets her slippers.</li>
        <li>The prince traces her back by those slippers and marries her.</li>
        <li>They live happily ever after.</li>
           </ul>
           <hr>`
       
popUpContent.insertAdjacentHTML("beforebegin",story);}
    else if(seletedBookIndex==0){
        openBookButton.click();

        story  = `
                <h1 class="popup__title r-title">Long Story Short: The ugly duckling</h1>
                <img src="./images/duck.png"></img>
                <ul>
                <li>The Ugly Duckling looked very different from his siblings, who made fun of him and treated him horribly because he didn’t look like them. </li>
                <li>He wished he was beautiful like the swans he saw flying in the sky. </li>
                <li>By spring, he was fully grown and tried to join a flock of swans.</li>
                <li>The young swans treated him like one of their own. </li>
                <li>He was surprised that such beautiful creatures would want to be with him. However, then he saw his reflection and saw that he too was a beautiful swan.</li>
                   </ul>`
           
popUpContent.insertAdjacentHTML("beforebegin",story);
    }
    else if(seletedBookIndex =='')
    alert("No book selected")
})
let newBookIndex;
let newBookName = "";
changeButton.addEventListener("click",()=>{
        newBookIndex=prompt("Enter the index of the book you'd like to change");

        for(let i = 0;i<bookArr.length;i++){
            if(newBookIndex==i){
                newBookName =prompt("Enter the new name");
                bookArr[i] = newBookName;
                displayButton.click();
        }
    }
})

resetButton.addEventListener("click",()=>{
    bookArr = ['The Ugly Duckling','Cindarella','Paddington','The cat in the hat','The three little pigs','Little red ridding hood']
    displayButton.click();
})
displayButton.addEventListener("click",()=>{

    for(let i = 0 ; i <bookArr.length ;i++){
        inputField[i].value = bookArr[5-i];
    }
     codeChangeCode.style.display="block";
   
 });

popButton.addEventListener("click",(e)=>{
       let show = document.getElementById("book"+num);
      //  console.log(show);
        show.classList.add("hide")
        num--;
      //  console.log("pop"+num);
        stack.pop();
        if(num<0){
            alert("Stack state will now be underflow,push to view again ☜(ﾟヮﾟ☜)");
        }
        
  
})
pushButton.addEventListener("click",(e)=>{
    if(num==5){
        alert("Stack overflow,TRY POPPING (☞ﾟヮﾟ)☞");
        return;
    }
    num++;
    let show = document.getElementById("book"+num);
   //  console.log(show);
     show.classList.remove("hide")
   //  console.log("push"+num);
})

emptyButton.addEventListener("click",()=>{
    if(num<0){
        alert("Empty stack,(⊙_⊙;)")
    }else{
        alert("Not empty")
    }
})
fullButton.addEventListener("click",()=>{
    if(num==5){
        alert("full stack (╯°□°）╯︵ ┻━┻")
    }else{
        alert("not full")
    }
})
countButton.addEventListener("click",()=>{
    alert("The stack count is... 🥁🥁🥁🥁-> " + (num+1))
})

//  stack.push(2);
//  stack.push(3);
//  console.log(stack.peek());
//  console.log(stack.isEmpty());

//console.log(stack.size());
//  console.log(stack.pop());
//  console.log(stack.size());
//  stack.clear();
//  console.log(stack.isEmpty());