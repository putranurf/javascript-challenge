
function countWords() {
    let string = `Aku ingin begini
    Aku ingin begitu
    Ingin ini itu banyak sekali
    
    Semua semua semua
    Dapat dikabulkan
    Dapat dikabulkan
    Dengan kantong ajaib
    
    Aku ingin terbang bebas
    Di angkasa
    Hei… baling baling bambu
    
    La... la... la...
    Aku sayang sekali
    Doraemon
    
    La... la... la...
    Aku sayang sekali`

    var jumlah_aku = 0
    var jumlah_ingin = 0
    var jumlah_dapat = 0
    for (let index = 0; index < string.split(/\s+/).length; index++) {
        if(string.split(/\s+/)[index] === ('Aku' || 'aku')) {
            jumlah_aku += 1
        } else if(string.split(/\s+/)[index] === ('ingin' || 'Ingin')) {
            jumlah_ingin += 1
        } else if(string.split(/\s+/)[index] === ('Dapat' || 'dapat')) {
            jumlah_dapat += 1
        }
    }

    return 'Aku = ' + jumlah_aku + ' - ' + 'Ingin = ' + jumlah_ingin + ' - ' + 'Dapat = ' +jumlah_dapat
}

module.exports = {
    countWords
}