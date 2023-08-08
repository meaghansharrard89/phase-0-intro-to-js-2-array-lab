//pass
const cats = ["Milo", "Otis", "Garfield"];

//pass
function destructivelyAppendCat(name) {
    cats.push(name);
}

//pass
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

//pass
function destructivelyRemoveLastCat() {
    cats.pop();
}

//pass
function destructivelyRemoveFirstCat() {
    cats.shift();
}

//fail-expected undefined to be an array
function appendCat(name) {
    return [...cats, name];
}

//fail-expected undefined to be an array
function prependCat(name) {
    return [name, ...cats];
}

//fail-expected undefined to be an array
function removeLastCat() {
    return cats.slice(0, 2);
}

//fail-expected undefined to be an array
function removeFirstCat() {
    return cats.slice(1);
}