// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

//ORDENAR POR TÍTULO
export const sortByTitle = (data, OrderAsc) => {


  if (OrderAsc) {
    return data.sort(function (a, b) {
      //al ser String ni number no puedo hacer un sort directo
      //la funcion recibe un array de films
      //tengo que hacer una funcion que me compare los titulos de dos films cada vez
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
  } else {
    return data.sort(function (a, b) {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });

  }

};

//ORDENAR POR AÑO

export const sortByReleaseYear = (data, ancientRecent) => {


  if (ancientRecent) {
    return data.sort(function (a, b) {
      //al ser String ni number no puedo hacer un sort directo
      //la funcion recibe un array de films
      //tengo que hacer una funcion que me compare los titulos de dos films cada vez
      if (a.release_date > b.release_date) {
        return 1;
      }
      if (a.release_date < b.release_date) {
        return -1;
      }
      return 0;
    });
  } else {
    return data.sort(function (a, b) {
      if (a.release_date > b.release_date) {
        return -1;
      }
      if (a.release_date < b.release_date) {
        return 1;
      }
      return 0;
    });

  }

}

// FILTRAR POR AÑO => método filter
export const filterByYear = (data, release_date1, release_date2) => {
let releaseFilms = data.filter(dataFilms => (dataFilms.release_date <= release_date2 && dataFilms.release_date>= release_date1 ));
return releaseFilms;
}

//FILTRAR POR DIRECTOR => método filter 
export const filterByDirector = (data, nameDirector) => {
  let filmsByDirector = data.filter(dataFilms => (dataFilms.director == nameDirector));
return filmsByDirector;
}

//EXPORTANDO FUNCIONES A MAIN.JS
export default sortByTitle; sortByReleaseYear; filterByYear; filterByDirector;




