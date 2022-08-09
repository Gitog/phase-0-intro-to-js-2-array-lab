// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    var newCatsArray = cats.slice()
    newCatsArray.push("Broom")
    return newCatsArray;
}

function prependCat(name) {
    var newCatsArray = [...cats]
    newCatsArray.unshift('Arnold')
    return newCatsArray;

}

function removeLastCat() {
    var newCatsArray = [...cats]
    newCatsArray.pop()
    return newCatsArray;
}

function removeFirstCat() {
    var newCatsArray = [...cats]
    newCatsArray.shift()
    return newCatsArray;
}