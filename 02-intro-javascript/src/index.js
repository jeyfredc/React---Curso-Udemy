import heroes, {owners }  from './data/heroes';

console.log(owners);

const getHeroeById = (id) => {
    return heroes.find(element => element.id === id );
}

console.log( getHeroeById(2));

const getHeroesByOwner = ( owner) => heroes.filter( (heroe) => heroe.owner === owner ); 

console.log( getHeroesByOwner('DC'));