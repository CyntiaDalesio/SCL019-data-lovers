import { sortByTitle, sortByReleaseYear,filterByYear, filterByDirector } from '../src/data.js';


//----------------------------Funcion ordenar por titulo-----------------

const data = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "release_date": "1991"
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "release_date": "1995"
  },
  {
    "title": "Kiki's Delivery Service",
    "director": "Hayao Miyazaki",
    "release_date": "1800"
},
{
  "title": "From Up on Poppy Hill",
  "director": "Gorō Miyazaki",
  "release_date": "1999"
}


]
describe('Funcion sortByTitle ordena todos los films por titulo', () => {
  it('is a function', () => {
    expect(typeof sortByTitle).toBe('function');
  });

  it('Debería retornar todos los films ordenados en forma ascendente', () => {

    let OrderAsc = sortByTitle(data, true);

    expect(OrderAsc[0].title).toBe('Castle in the Sky');
    expect(OrderAsc[1].title).toBe('From Up on Poppy Hill');
    expect(OrderAsc[2].title).toBe('Kiki\'s Delivery Service');
    expect(OrderAsc[3].title).toBe('My Neighbor Totoro');
    

  });

  it('Debería retornar todos los films ordenados en forma descendente', () => {


    let OrderDes = sortByTitle(data, false);

    expect(OrderDes[0].title).toBe('My Neighbor Totoro');
    expect(OrderDes[1].title).toBe('Kiki\'s Delivery Service');
    expect(OrderDes[2].title).toBe('From Up on Poppy Hill');
    expect(OrderDes[3].title).toBe('Castle in the Sky');


  });


});

//--------------------Funcion ordenar por año de lanzamiento descendiente-----------------

describe('Ordena los films por año de lanzamiento del mas reciente al mas antiguo', () => {

  
  it('is a function', () => {
    expect(typeof sortByReleaseYear).toBe('function');
  });

  it('ordenar por fecha de lanzamiento reciente al antiguo', () => {
   

    let OrderAscYear = sortByReleaseYear(data, false);
    expect(OrderAscYear[0].title).toBe('From Up on Poppy Hill');
    expect(OrderAscYear[1].title).toBe('My Neighbor Totoro');
    expect(OrderAscYear[2].title).toBe('Castle in the Sky');
    expect(OrderAscYear[3].title).toBe('Kiki\'s Delivery Service');
   

  });

  it('ordena por fecha de lanzamiento de la mas antiguo a la mas reciente', () => {
 
    let OrderDesYear = sortByReleaseYear(data, true);


    expect(OrderDesYear[0].title).toBe('Kiki\'s Delivery Service');
    expect(OrderDesYear[1].title).toBe('Castle in the Sky');
    expect(OrderDesYear[2].title).toBe('My Neighbor Totoro');
    expect(OrderDesYear[3].title).toBe('From Up on Poppy Hill');


  });


});

//-------------------------------


describe('filtra los films por director filterByDirector', () => {
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });


  it('Debería retornar los films del director seleccionado', () => {


let director = filterByDirector(data,["Hayao Miyazaki"]);

    expect(director[0].title).toBe('Kiki\'s Delivery Service');
    expect(director[1].title).toBe('Castle in the Sky');
    expect(director[2].title).toBe('My Neighbor Totoro');


  });


  it('Debería retornar los films de los directores seleccionados', () => {


    let director = filterByDirector(data,["Hayao Miyazaki","Gorō Miyazaki"]);
    
        expect(director[0].title).toEqual('Kiki\'s Delivery Service');
        expect(director[1].title).toEqual('Castle in the Sky');
        expect(director[2].title).toEqual('My Neighbor Totoro');
        expect(director[3].title).toEqual('From Up on Poppy Hill');
    
      });



});

describe('Funcion filterByYear filtra todos los films por año seleccionado', () => {
  it('is a function filterByYear ', () => {
    expect(typeof filterByYear).toBe('function');
  });

  it('Debería retornar todos los films del año seleccionado', () => {

    let yearFilms = filterByYear(data, ['1991']);

    expect(yearFilms[0].title).toBe('Castle in the Sky');
  
    

  });

  it('Debería retornar todos los films de los años seleccionado', () => {

    let year = filterByYear(data, ['1800','1995']);

    expect(year[0].title).toBe('Kiki\'s Delivery Service');
    expect(year[1].title).toBe('My Neighbor Totoro');
   
    

  });




});