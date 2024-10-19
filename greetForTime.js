const userName = ' Филипп ';

greetUser = () => {
        let time = new Date().getHours();
        let greets ='';
        let morningGreets = ' Доброе утро! ' + userName;
        let afternoonGreets = ' Добрый день! ' + userName;
        let eveningGreets = ' Добрый вечер! ' + userName;
        let nightGreets = ' Доброй ночи! ' + userName;
    if ( 0 < time < 6){
        greets = nightGreets
    }

    if ( 6 < time < 12)
        {
        greets = morningGreets
    }

    if( 12 < time < 18 ) {
        greets = afternoonGreets
    }
    if ( 18 < time < 24) {
        greets = eveningGreets
    } else {console.log('промежуток');
    }
    return greets
}
    console.log(greetUser(userName));
    