import { sortByTitle, filterByYear, filterByDirector } from '../src/data.js';


//----------------------------Funcion ordenar por titulo-----------------

 const data = [
    {
       "title": "Castle in the Sky",
       "director": "Hayao Miyazaki"
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki"
},
{
  "title": "Kiki's Delivery Service",
  "director": "Hayao Miyazaki"
},
]
describe('Funcion sortByTitle ordena todos los films por titulo', () => {
  it('is a function', () => {
    expect(typeof sortByTitle).toBe('function');
  });
  
 it('Debería retornar todos los films ordenados en forma ascendente', () => {

  let OrderAsc = sortByTitle(data, true);

     expect(OrderAsc[0].title).toBe('Castle in the Sky');
    expect(OrderAsc[1].title).toBe('Kiki\'s Delivery Service');
     expect(OrderAsc[2].title).toBe('My Neighbor Totoro');});


   it('Debería retornar todos los films ordenados en forma descendente', () => {
    

    let OrderDes = sortByTitle(data, false);
    expect(OrderDes[0].title).toBe('Whisper of the Heart');
   });
   
//     expect(OrderDes[1].title).toBe('When Marnie Was There');
//     expect(OrderDes[2].title).toBe('The wind Rises');
//     expect(OrderDes[3].title).toBe('The Tale of the Princess Kaguya');
//     expect(OrderDes[4].title).toBe('The Secret World of Arrietty');
//     expect(OrderDes[5].title).toBe('The Cat Returns');
//     expect(OrderDes[6].title).toBe('Tales from Earthsea');
//     expect(OrderDes[7].title).toBe('Spirited Away');
//     expect(OrderDes[8].title).toBe('Princess Mononoke');
//     expect(OrderDes[9].title).toBe('Porco Rosso');
//     expect(OrderDes[10].title).toBe('Ponyo on the Cliff by the Sea');
//     expect(OrderDes[11].title).toBe('Pom Poko');
//     expect(OrderDes[12].title).toBe('Only Yesterday');
//     expect(OrderDes[13].title).toBe('My Neighbors the Yamadas');
//     expect(OrderDes[14].title).toBe('My Neighbor Totoro');
//     expect(OrderDes[15].title).toBe('Kiki\'s Delivery Service');
//     expect(OrderDes[16].title).toBe('Howl\'s Moving Castle');
//     expect(OrderDes[17].title).toBe('Grave of the Fireflies');
//     expect(OrderDes[18].title).toBe('From Up on Poppy Hill');
//     expect(OrderDes[19].title).toBe('Castle in the sky');
//   });


 });

//--------------------Funcion ordenar por año de lanzamiento descendiente-----------------

// describe('Ordena los films por año de lanzamieneto del mas reciente al mas antiguo', () => {
//   it('is a function', () => {
//     expect(typeof sortByReleaseYear).toBe('function');

//     let OrderAscYear = sortByReleaseYear(films, false);

//     expect(OrderAscYear[0].title).toBe('When Marnie Was There');
//     expect(OrderAscYear[1].title).toBe('The wind Rises');
//     expect(OrderAscYear[2].title).toBe('The Tale of the Princess Kaguya');
//     expect(OrderAscYear[3].title).toBe('From Up on Poppy Hill');
//     expect(OrderAscYear[4].title).toBe('The Secret World of Arrietty');
//     expect(OrderAscYear[5].title).toBe('Ponyo on the Cliff by the Sea');
//     expect(OrderAscYear[6].title).toBe('Tales from Earthsea');
//     expect(OrderAscYear[7].title).toBe('Howl\'s Moving Castle');
//     expect(OrderAscYear[8].title).toBe('The Cat Returns');
//     expect(OrderAscYear[9].title).toBe('Spirited Away');
//     expect(OrderAscYear[10].title).toBe('My Neighbors the Yamadas');
//     expect(OrderAscYear[11].title).toBe('Princess Mononoke');
//     expect(OrderAscYear[12].title).toBe('Whisper of the Heart');
//     expect(OrderAscYear[13].title).toBe('Pom Poko');
//     expect(OrderAscYear[14].title).toBe('Porco Rosso');
//     expect(OrderAscYear[15].title).toBe('Only Yesterday');
//     expect(OrderAscYear[16].title).toBe('Kiki\'s Delivery Service');
//     expect(OrderAscYear[17].title).toBe('My Neighbor Totoro');
//     expect(OrderAscYear[18].title).toBe('Grave of the Fireflies');
//     expect(OrderAscYear[19].title).toBe('Castle in The Sky');




//   });

 

//   it('is a function', () => {
//     expect(typeof sortByReleaseYear).toBe('function');

//     let OrderDesYear = sortByReleaseYear(films, true);

//     expect(OrderDesYear[0].title).toBe('Castle in The Sky');
//     expect(OrderDesYear[1].title).toBe('Grave of the Fireflies');
//     expect(OrderDesYear[2].title).toBe('My Neighbor Totoro');
//     expect(OrderDesYear[3].title).toBe('Kiki\'s Delivery Service');
//     expect(OrderDesYear[4].title).toBe('Only Yesterday');
//     expect(OrderDesYear[5].title).toBe('Porco Rosso');
//     expect(OrderDesYear[6].title).toBe('Pom Poko');
//     expect(OrderDesYear[7].title).toBe('Whisper of the Heart');
//     expect(OrderDesYear[8].title).toBe('Princess Mononoke');
//     expect(OrderDesYear[9].title).toBe('My Neighbors the Yamadas');
//     expect(OrderDesYear[10].title).toBe('Spirited Away');
//     expect(OrderDesYear[11].title).toBe('The Cat Returns');
//     expect(OrderDesYear[12].title).toBe('Howl\'s Moving Castle');
//     expect(OrderDesYear[13].title).toBe('Tales from Earthsea');
//     expect(OrderDesYear[14].title).toBe('Ponyo on the Cliff by the Sea');
//     expect(OrderDesYear[15].title).toBe('The Secret World of Arrietty');
//     expect(OrderDesYear[16].title).toBe('From Up on Poppy Hill');
//     expect(OrderDesYear[17].title).toBe('The Tale of the Princess Kaguya');
//     expect(OrderDesYear[18].title).toBe('The wind Rises');
//     expect(OrderDesYear[19].title).toBe('When Marnie Was There');




  
// });
  
//  });

//-------------------------------

describe('filterByDirector', () => {
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('Debería retornar los films del director', () => {
    expect(filterByDirector(data, "Hayao Miyazaki")).toEqual([
      {
         "title": "Castle in the Sky",
         "director": "Hayao Miyazaki"
    },
    {
      "title": "Kiki's Delivery Service",
      "director": "Hayao Miyazaki"
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki"
  },
  ]);
  });


});describe('filterByDirector', () => {
  it('is a function', () => {
    expect(typeof filterByYear).toBe('function');
  });

  it('Debería retornar los films del director', () => {
    expect(filterByYear()).toBe('example');
  });
});