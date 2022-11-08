// Code your solutions in this file
const newarr = []; 

function writeCards(arr, event){
    for (let i = 0; i < arr.length; i++){
        newarr[i] = (`Thank you, ${arr[i]}, for the wonderful ${event} gift!`); 
    } 
    return newarr; 
}

writeCards(); 

function countDown(a){
    for (let i = a; i >= 0; i--){
        console.log(i)
    }
}

countDown(); 