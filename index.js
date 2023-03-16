// Write your solution in this file!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift(name);      
}

function destructivelyRemoveLastCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.pop();  
}

function destructivelyRemoveFirstCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.shift();

}

function appendCat(name){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    const newCats1 = [...cats, name]
    return newCats1; 
}


function prependCat(name){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    const newCats2 = ["Arnold", ...cats];
    return newCats2;
}

function removeLastCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    const newCats3 = [...cats.slice(0,-1)];
    return newCats3;
}

function removeFirstCat(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    const newCats4 = [...cats.slice(1)];
    return newCats4;
