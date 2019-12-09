
function palindrome1(args){
    args.push('bapak')
    const result = args.reverse();
    return result
}

function palindrome2(args){
    args.push('bantal')
    const result2 = args.reverse();
    return result2
}

module.exports = {
    palindrome1,
    palindrome2
}