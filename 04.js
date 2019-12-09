
function detectLeapYear() {
    let end_year   = 2020;
    for (let start_year = 2010; end_year >= start_year; start_year++) {
        if (start_year % 4 === 0){
            if(start_year % 100 !== 0){
                console.log(start_year + ' Leap Year')
            } else {
                if (start_year % 400 === 0 ){
                    console.log(start_year + ' Leap Year')
                } else {
                    console.log(start_year + ' Not Leap Year') 
                }
            } 
        } else {
            console.log(start_year + ' Not Leap Year') 
        }
    }
    
}

module.exports = {
    detectLeapYear
}