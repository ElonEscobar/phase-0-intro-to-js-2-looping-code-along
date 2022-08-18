// Code your solutions in this file
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
