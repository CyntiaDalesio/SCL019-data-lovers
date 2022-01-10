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

//recibe los fimls(filtrados u ordenados) y los muestra en pantalla creando sus respectivas etiquetas
function showFilms(films) {
    let seccionPoster = document.getElementById('conteinerFilms');
    seccionPoster.innerHTML = ''; //sin esto, concatenaba otros films

    for (let index = 0; index < films.length; index++) {
        let film = films[index]; //guardo el film actual
        let poster = film.poster; // del film actual obtengo el poster
        let newDiv = document.createElement('div'); // creando nuevo div para guardar elemento title y poster
        newDiv.classList.add('filmcard'); //al nuevo div se le asigna clase 'filmCard'
        let elementTitle = document.createElement('p'); // creando elemento 'p' para guardar título.
        elementTitle.innerHTML = film.title; //'imprimiendo' data film.title
        let img = document.createElement('img'); //creando elemento 'img'
        img.src = poster;  //dando ubicación a elemento img para que lo 'traiga'
        newDiv.appendChild(img);
        newDiv.appendChild(elementTitle);   // al nuevo div 'imprime' título
         // al nuevo div 'imprime' img poster
        //al elemento newElement le asigno dos elementos, un p y un img
       // seccionPoster.appendChild(newDiv);
        // al elemento seccionPoster que es un div, le asigno el elemento new Element que consta de dos elementos (subnodos)
        
        let elementTitle2 = document.createElement ('p');
        elementTitle2.innerHTML = 'Title:  ' + film.title;
        let year = document.createElement('p');
        year.innerHTML = 'Release year:  ' + film.release_date;
        let description = document.createElement('p');
        description.innerHTML ='Synopsis:  ' + film.description;   //  Obteniendo descripcion del film
        let director = document.createElement('p');
        director.innerHTML = 'Director: ' + film.director;


        let newDivBackCard = document.createElement('div');
        newDivBackCard.classList.add('informationCard');
        newDivBackCard.appendChild(elementTitle2);
        newDivBackCard.appendChild(year);
        newDivBackCard.appendChild(description);
        newDivBackCard.appendChild(director);

        //seccionPoster.appendChild(newDivBackCard);

        let target = document.createElement('div');
        target.classList.add('target');
        target.appendChild(newDiv);
        target.appendChild(newDivBackCard);

        let wrapTarget = document.createElement('div');
        wrapTarget.classList.add('wrapTarget');

        wrapTarget.appendChild(target);

        seccionPoster.appendChild(wrapTarget);
        }


}





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
















//console.log(example, data);
