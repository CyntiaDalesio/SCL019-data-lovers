// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };


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

}

export default sortByTitle;

