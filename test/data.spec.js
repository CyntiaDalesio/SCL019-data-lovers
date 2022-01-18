import { sortByTitle, sortByReleaseYear, filterByYear, filterByDirector } from '../src/data.js';


//----------------------------Funcion ordenar por titulo-----------------

 const data = [
    {
       "title": "Castle in the Sky",
       "director": "Hayao Miyazaki",
       "release_date": "1986"
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "release_date": "1988"
},
{
  "title": "Kiki's Delivery Service",
  "director": "Hayao Miyazaki",
  "release_date": "1989"
},
{
  "title": "Grave of the Fireflies",
  "director": "Isao Takahata",
  "release_date": "1988"
}
]
describe('Funcion sortByTitle ordena todos los films por titulo', () => {
  it('is a function', () => {
    expect(typeof sortByTitle).toBe('function');
  });
  
 it('Debería retornar todos los films ordenados en forma ascendente', () => {

  let OrderAsc = sortByTitle(data, true);

     expect(OrderAsc[0].title).toBe('Castle in the Sky');
     expect(OrderAsc[1].title).toBe('Grave of the Fireflies');
    expect(OrderAsc[2].title).toBe('Kiki\'s Delivery Service');
     expect(OrderAsc[3].title).toBe('My Neighbor Totoro');});


   it('Debería retornar todos los films ordenados en forma descendente', () => {
    

    let OrderDes = sortByTitle(data, false);
    expect(OrderDes[0].title).toBe('My Neighbor Totoro');
    expect(OrderDes[1].title).toBe('Kiki\'s Delivery Service');
    expect(OrderDes[2].title).toBe('Grave of the Fireflies');
    expect(OrderDes[3].title).toBe('Castle in the Sky');
   });


 });

//--------------------Funcion ordenar por año de lanzamiento descendente-----------------

describe('Función sortByReleaseYear ordena los films por año de lanzamieneto del más reciente al más antiguo', () => {
   it('is a function', () => {
     expect(typeof sortByReleaseYear).toBe('function');

     let OrderAscYear = sortByReleaseYear(data, false);

     expect(OrderAscYear[0].title).toEqual('Kiki\'s Delivery Service');
     expect(OrderAscYear[1].title).toBe('My Neighbor Totoro');
     expect(OrderAscYear[2].title).toBe('Grave of the Fireflies');
     expect(OrderAscYear[3].title).toBe('Castle in the Sky');

  });

 

   it('is a function', () => {
     expect(typeof sortByReleaseYear).toBe('function');

     let OrderDesYear = sortByReleaseYear(data, true);

     expect(OrderDesYear[0].title).toBe('Castle in the Sky');
     expect(OrderDesYear[1].title).toBe('My Neighbor Totoro');
     expect(OrderDesYear[2].title).toBe('Grave of the Fireflies');
     expect(OrderDesYear[3].title).toBe('Kiki\'s Delivery Service');

 });
  
});

//------------------------------- Función filtrar por director -------------------------------

describe('Función filterByDirector filtra por Director', () => {
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('Debería retornar los films del director', () => {
    expect(filterByDirector(data,"Isao Takahata")).toEqual([
      {
        "title": "Grave of the Fireflies",
        "director": "Isao Takahata",
        "release_date": "1988"
    }
  ]);
  });


});

//------------------------------- Función filtrar por año de lanzamiento-------------------------------
describe('Función filterByYear filtra por año de lanzamiento', () => {
  it('is a function', () => {
    expect(typeof filterByYear).toBe('function');
  });

  it('Debería retornar los films del director', () => {
    expect(filterByYear()).toBe('example');
  });
})