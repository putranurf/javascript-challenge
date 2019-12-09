
let isPrime = require('prime-number')

function playWithNumbers(end) {
    for (let index = 0; index <= end; index++) {
        if ( index % 2 === 0 ) {
            if(isPrime(index) === true && index <= 100){
                if ( isMultipleof5(index) === true ){ 
                    console.log(index + ' is Even and is Prime and isMultiple of 5')
                 } else {
                    console.log(index + ' is Even and is Prime ')
                 }
            } else {
                if ( isMultipleof5(index) === true ){ 
                    console.log(index + ' is Even and isMultiple of 5')
                 } else {
                    console.log(index + ' is Even ')
                 }
            }
        } else if(index % 2 !== 0){
            if(isPrime(index) === true && index <= 100){
                if ( isMultipleof5(index) === true ){ 
                    console.log(index + ' is Odd and is Prime and isMultiple of 5')
                 } else {
                    console.log(index + ' is Odd and is Prime ')
                 }
            } else {
                if ( isMultipleof5(index) === true ){ 
                    console.log(index + ' is Odd and isMultiple of 5')
                 } else {
                    console.log(index + ' is Odd ')
                 }
            }
            
        }
    }
}

function isMultipleof5(params) {

    while (params > 0 ) 
    params = params - 5; 
  
    if ( params == 0 ) 
        return true; 
  
    return false; 
}


module.exports = {
    playWithNumbers
}