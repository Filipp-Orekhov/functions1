let dayNum = 2;
if(1 <= dayNum <= 7) {
    getDayNameInRussian = () => {
        switch(dayNum) {
            case 1 :
                return 'Понедельник'
            case 2 :
                return 'Вторник'
            case 3 :
                return 'Среда'
            case 4 :
                return 'Четверг'
            case 5 :
                return 'Пятница'
            case 6 :
                return 'Суббота'
            case 7 :
                return 'Воскресенье'
            default :
            return 'косяк...'
        }
    }
}
console.log(getDayNameInRussian(dayNum));
