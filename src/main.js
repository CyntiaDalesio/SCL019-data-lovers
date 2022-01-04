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

let selectSortBy= document.getElementById('selectSortBy');
if(selectSortBy){
    let orderedFilms;
    selectSortBy.addEventListener('change',function(){


        switch (selectSortBy.value) {
            case 'sortByAZ':
             orderedFilms = sortByTitle(films, true); //orden ascendente true
            
                break;
        
            case 'sortByZA':
               orderedFilms = sortByTitle(films, false); //orden ascendente false
            
                break;
        }

        showFilms(orderedFilms);
      


});}





//recibe los fimls(filtrados u ordenados) y los muestra en pantalla creando sus respectivas etiquetas
function showFilms(films) {
    let seccionPoster = document.getElementById('conteinerFilms');
    seccionPoster.innerHTML = ''; //sin esto, concatenaba otros films
    for (let index = 0; index < films.length; index++) {
        let film = films[index]; //guardo el film actual
        let poster = film.poster; // del film actual obtengo el poster
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
