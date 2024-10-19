const age = 100;


   if ( 1 <= age && age <= 17) {
    mess = 'n' + ' - ' + 'ребёнок';
   };
   if ( age <= 30 && 17 < age) {
    mess = 'n' + ' - ' + 'молодой';
   }
   if ( age <= 55 && 30 < age) {
    mess = 'n' + ' - ' + 'зрелый';
   };
   if ( age > 55 && age <= 100) {
    mess = 'age' + ' - ' + 'старый';
   };

console.log(mess);


