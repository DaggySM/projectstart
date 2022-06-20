'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    // numberOfFilms == '' проверка на пустую строкц || numberOfFilms == null проверка на ноль || isNaN(numberOfFilms) проверка на отмену
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) { 
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
 start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) /* * */ {  
                personalMovieDB.movies[a] = b;
                console.log('dobe');
            } else {
                console.log('error');
                i--; /* * */
            }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) { 
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

//2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
//false - выводит в консоль главный объект программы

function showMyBd(hidden) { // проверяет на приватность базы. Есть приватная не выводит данные
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyBd(personalMovieDB.privat);

//3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
//"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
//genres

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // для пользователя выводим с 1 а для базы нужно указать с нуля. (нумерация в массиве с нуля)
    }
}
writeYourGenres();


/* a != null && b != null - если нажимаем отмену. 
a != '' && b != '' - проверка на пустые строки, 
&& a.length < 50 - проверка на количество символов */
/* i--; если условие не выполнилось, вернемся на одну итерацию назад и зададим вопросы повторно */
