// Code your solutions in this file
/*
!this code is from the code-along
for (age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!\n`);
}

const gifts = ["teddy bear","drone","doll"];
function wrapGifts(gifts){
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);
*/

//solution to the assignment

function writeCards(name , eventName){
    const writeCardsArray = [];
    for(let x=0; x < name.length; x++){
        const cardMessage =(`Thank you, ${name[x]}, for the wonderful ${eventName} gift!`);
        writeCardsArray.push(cardMessage); 
    }
    return(writeCardsArray);
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num){
    for(let i = 0; num >= i; num --){
        console.log(num);
    }
}
