

let { palindrome1, palindrome2 } = require('./01')
let { combineSeveralArray } = require('./02')
let { playWithCsv } = require('./03')
let { detectLeapYear } = require('./04')
let { playWithNumbers } = require('./05')
let { censoringWords } = require('./06')
let { countWords } = require('./07')
let { Str } = require('./08')

//Soal 01
let palindrome_1  = palindrome1(['ibu', 'ratna', 'antar', 'ubi']);
let palindrome_2  = palindrome2(['kasur','ini','rusak']);

console.log(`01`);
console.log(palindrome_1);
console.log(palindrome_2);


//Soal 02
console.log(`02`);
let combine_several_array = combineSeveralArray();
console.log(combine_several_array)


//Soal 03
console.log('03')
let play_with_csv = playWithCsv();
console.log(play_with_csv)


//Soal 04
console.log('04')
detectLeapYear();


//Soal 05
console.log('05')
let end   = 1000;
playWithNumbers(end)


//Soal 06
console.log('06')
let wordsCensor = censoringWords()
console.log(wordsCensor)


//Soal 07
console.log('07')
let words_count = countWords()
console.log(words_count)


//Soal 08
console.log('08')
let hurufkecil = new Str()
hurufkecil.runLower('MAKAN')
hurufkecil.runBigger('malam')
hurufkecil.runCapital('saya ingin makan')
hurufkecil.runReverseStr('kasur')
hurufkecil.runContainsStr('Saya ingin makan sate', 'makan') // true
hurufkecil.runContainsStr('Saya ingin makan sate', 'rujak') // false
hurufkecil.runContainsStr('Saya ingin makan sate', ['sate', 'rujak']) // true
hurufkecil.runAlphanumStr()   // hef2nCi273c8D2dz
hurufkecil.runAlphanumStr(6)  // ckS3jP
hurufkecil.runAlphanumStr(32) // tbFGeCycTBy8FTfXqOTkDd0YtlQngLt4