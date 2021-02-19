// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
};

function destructivelyPrependCat(name) {
    cats.unshift(name)
};

function destructivelyRemoveLastCat(name){
    cats.pop(name)
};

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
};

function appendCat(name){
  var cat = [...cats,name]
    return cat 
};

function prependCat(name){
 var cat = [name, ...cats]
    return cat
};

function removeLastCat() {
    var cat = cats.slice(0, cats.length - 1)
    return cat 
}

function removeFirstCat() {
    var cat = cats.slice(1)
    return cat 
}

