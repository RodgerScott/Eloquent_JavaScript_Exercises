require ('./scripts');

// Flattening

const arrOfArr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
let flattened = arrOfArr.reduce((a, b) => a.concat(b));
// console.log(flattened);


// Your Own Loop

function myOwnLoop(value, testFunction, updateFunction, bodyFunction) {
 for (let v = value; testFunction(v); v = updateFunction(v)) {
     bodyFunction(v);
 }
}

// myOwnLoop(5, a => a > 0,  a => a - 1, console.log);


// Everything

const everythingFunctionLoop = (array, predicateFunction) => {
    for (let a of array) {
        if(!predicateFunction(a)) {
            return false;
        }
    }
    return true;
};

const everythingFunctionSome = (array, predicateFunction) => {
    return !array.some(a =>
        !predicateFunction(a));
};

// console.log(everythingFunctionLoop([5,5,5], n => n === 5));
// console.log(everythingFunctionSome([2,4,16], n => n < 10));

// Dominant Writing Direction

// This is straight from the example at the Eloquent JavaScript site.
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

const dominantDirection = text => {
    let counted = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (counted.length == 0) return "ltr";

    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
};

console.log(dominantDirection("Hello!"));
