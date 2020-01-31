const heroes = [
{id: 1, name: 'Spider Man', company: 'Marvel'},    
{id: 1, name: 'Spider Man', company: 'Marvel'},    
{id: 1, name: 'Spider Man', company: 'Marvel'},    
{id: 1, name: 'Spider Man', company: 'Marvel'},    
{id: 1, name: 'Spider Man', company: 'Marvel'},    
{id: 1, name: 'Spider Man', company: 'Marvel'},
];

function getHeroByName(hero){
    return hero.name;
}

function getSpiderman(hero){
    return hero.name = 'Spider Man';
}

const heroNames = heroes
    .map((hero), getHeroByName(hero));


const hero = {
    id: 1,
    name: 'Spider man',
    company: 'Marvel'
}

const hero2 = {
    //copia todas a propriedades de hero e sobrescreve o nome...
    ...hero,
    name: 'Homem aranha',
}

//exemplo react
// <Component {...hero} ></Component>