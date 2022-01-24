// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

//ORDENAR POR TÍTULO
export const sortByTitle = (data, OrderAsc) => {

  let dataCopyAsc=data;
  let dataCopyDes=data;
  if (OrderAsc) {
    return dataCopyAsc.sort(function (a, b) {
      //al ser String ni number no puedo hacer un sort directo
      //la funcion recibe un array de films
      //tengo que hacer una funcion que me compare los titulos de dos films cada vez
      if (a.title >= b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
     
    });
  } else {
    return dataCopyDes.sort((a,b)=> ((a.title<b.title) ? 1:-1));
   
  }

};


//ORDENAR POR AÑO

export const sortByReleaseYear = (data, ancientRecent) => {

let dataAncient=data;
let dataRecent=data;


  if (ancientRecent) {
    return dataAncient.sort(function (a, b) {
      //al ser String ni number no puedo hacer un sort directo
      //la funcion recibe un array de films
      //tengo que hacer una funcion que me compare los titulos de dos films cada vez
      if (a.release_date >= b.release_date) {
        return 1;//----------
      }
      if (a.release_date < b.release_date) {
        return -1;
      }
      // return 0;//---------------
    });
  } else {
    return dataRecent.sort(function (a, b) {
      if (a.release_date >= b.release_date) {
        return -1;
      }
      if (a.release_date < b.release_date) {
        return 1;
      }
      // return 0;//------------------
    });

  }

}


export const filterByYear = (data, release_dates) => {// release_dates = ['1986','2004']
  let releaseFilms = data.filter(film => (release_dates.some(year => (film.release_date >= parseInt(year) && film.release_date < parseInt(year) + 5))));
  return releaseFilms;
}


//FILTRAR POR DIRECTOR => método filter 
export const filterByDirector = (data, nameDirector) => {
  let filmsByDirector = data.filter(dataFilms => (nameDirector.includes(dataFilms.director)));
  return filmsByDirector;
}

//EXPORTANDO FUNCIONES A MAIN.JS
export default sortByTitle; sortByReleaseYear; filterByYear; filterByDirector;




