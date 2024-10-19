
const p = 130;

defineDivideWithoutReminderBy3And5 = () => {
    let res ;
    let z = 3;
    let x = 5;
    let c = 15;
    for( i = 1 ; i <= p ; i++ ) {
        if (i % 15 === 0) {
            rez = 'fizzbuzz'
        }
        
        if ( i % 3 === 0 && i % 5 !== 0) {
            rez = 'fizz';
        }

        if ( i % 5 === 0 && i % 3 !== 0 ) {
            res = 'buzz';
        }

        else {
            res = 'ни то, ни сё'
        }
        console.log(res);
        
    }
    return;
}

console.log(defineDivideWithoutReminderBy3And5(p));

//вышла хрень, хотя выглядит просто. опять же, нехватка времени или мозгов