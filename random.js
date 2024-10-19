// const min =3;
// const max =8;

// randomNum = (min, max) => {
//     let res;
//     return res = Math.random()
// }

// console.log(random());


getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min - 1)) + min;
}

console.log(getRandomInt());
