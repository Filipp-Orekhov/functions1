const text = ' Папа у Васи силён в математике. Папа решает, а Вася сдаёт! Где это видано! Где это слыхано? Папа решает, а Вася сдаёт! ';

getFirstWords = (text) => {
    let firstSentenceLetter =/[А-я]/g;
    let firstSentenceWord =text.match (firstSentenceLetter);
    return firstSentenceWord;
}
console.log(getFirstWords(text));
//не хватило времени или мозгов