
class Str {

    lower(params) {        
        console.log(params.toLowerCase())
        return params.toLowerCase()
    }

    upper(params){
        console.log(params.toUpperCase())
        return params.toUpperCase()
    }

    capitalize(params){
        console.log(params.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }))
        return params.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })
    }

    reverseStr(params){
        let splitString  = params.split(""); 
        let reverseArray = splitString.reverse(); 
        let joinArray    = reverseArray.join(""); 
        console.log(joinArray)
        return joinArray
    }

    containsStr(target, pattern){
        console.log(target)
        console.log(pattern)
        var value = 0;
        if(Array.isArray(pattern)){
            for (let index = 0; index < pattern.length; index++) {
                value = value + target.includes(pattern[index]);
            }
            console.log(value === 1)
            return (value === 1)
        } else {
            target.includes(pattern)
            console.log(target.includes(pattern))
            return target.includes(pattern)
        }
    }

    alphanumStr(params){
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < params; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(result)
        return result;
    }

    runLower(params) {
      this.lower(params);
    }

    runBigger(params) {
      this.upper(params);
    }

    runCapital(params) {
      this.capitalize(params);
    }

    runReverseStr(params){
      this.reverseStr(params)
    }

    runContainsStr(params, item){
      this.containsStr(params, item)
    }

    runAlphanumStr(params){
      this.alphanumStr(params)
    }

}


module.exports = {
    Str
}