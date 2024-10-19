let myFavoriteFilm = {
    filmName : 'The Lord of the rings: The Fellowship of the Ring',
    dateRelease : 2001,
    director : 'Peter Jackson',
    country : 'New Zealand',
};

myFavoriteFilm.boxOffice = 2.9e9;

console.log(myFavoriteFilm.filmName);

delete myFavoriteFilm.dateRelease;

console.log(myFavoriteFilm);


