
function combineSeveralArray() {
    const first = ['Behind', 'every', 'great', 'man']
    const second = ['is', 'a', 'woman']
    const third = ['rolling', 'her', 'eyes']

    first.push(second.toString())
    first.push(third.toString())
    return first
}

module.exports = {
    combineSeveralArray
}