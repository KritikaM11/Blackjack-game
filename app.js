let cards = [];
let sum=0;
let hasBlackJack = false;
let isAlive = false;
let message ="";

function getrandom(){
    
    let randomNum =  Math.floor(Math.random()*13)+1;

    if(randomNum >10){
        return 10;
    }
    else if(randomNum === 1){
        return 11;  
    }
    else{
        return randomNum;
    }
}

let btn1 = document.querySelector(".btn-one");
btn1.addEventListener("click",startGame );

let btn2=document.querySelector(".btn-two");
btn2.addEventListener("click",newCard);

let msgEl = document.querySelector("#message-el");
console.log(msgEl);

let sumEl=document.querySelector("#sum-el")
let cardEL =document.querySelector("#cards-el");

function startGame(){
    isAlive=true;

    let firstcard = getrandom();
    let secondcard = getrandom();
     cards=[firstcard,secondcard];
     sum = firstcard + secondcard;

    renderGame();
}
function renderGame(){
    sumEl.textContent = "Sum: " + sum;

    cardEL.textContent = "Cards: "
   for(let i=0;i<cards.length;i++){
    cardEL.textContent+=cards[i]+" ";
   }
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(sum===21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack=true;
    }
    else{
        message="You're out of the game!"
        isAlive=false;
    }  
    msgEl.textContent = message;
}

function newCard(){

    if(isAlive===true && hasBlackJack===false){
        let card = getrandom();
        cards.push(card);
        sum+=card;

        renderGame();
    }
}