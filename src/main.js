import data from './data/ghibli/ghibli.js';
import { sortByTitle } from './data.js';



const cerrarModal = document.getElementById('btn-cerrar-popup');

cerrarModal.addEventListener('click', function () {

    const modal = document.getElementById('myModal');
   
    modal.style.visibility = 'hidden';
   
});


//almacena todos los films en una variable
let films = data.films;
//al cargar la pagina muestra los films desordenados
showFilms(films);
//mostrar los films ordenador por orden alfabetico
let order = document.getElementById('order');
if (order) {
    order.addEventListener('click', function () {
        let orderedFilms = sortByTitle(films, false);
        showFilms(orderedFilms);
    });
}

//recibe los fimls(filtrados u ordenados) y los muestra en pantalla creando sus respectivas etiquetas
function showFilms(films) {
    let seccionPoster = document.getElementById('conteinerFilms');
    seccionPoster.innerHTML = ''; //sin esto, concatenaba otros films
    for (let index = 0; index < films.length; index++) {
        let film = films[index];
        let poster = film.poster;
        let newDiv = document.createElement('div');
        newDiv.classList.add('filmCard');
        let elementTitle = document.createElement('p');
        elementTitle.innerHTML = film.title;
        let img = document.createElement('img');
        img.src = poster;
        newDiv.appendChild(elementTitle);
        newDiv.appendChild(img);
        //al elemento newElement le asigno dos elementos, un p y un img
        seccionPoster.appendChild(newDiv);
        // al elemento seccionPoster que es un div, le asigno el elemento new Element que consta de dos elementos (subnodos)
    }
}









//console.log(example, data);
