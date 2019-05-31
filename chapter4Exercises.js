// Eloquent Javascript Chapter 4 Solutions

// Sum of a Range
function range (start, end, step) {
    let outP = [];
    for (let i = start; i <= end; i += step) {
        outP.push(i);
    }
    return outP;
}

function sum (arrayOfNumbers) {
    let count = 0;
    for (let z of arrayOfNumbers) {
        count += z;
    }
    return count;
}

// console.log(sum(range(1,10, 2)));

// Reversing an Array
function reverseArray (anArray) {
    let newArray = [];
    for (let n of anArray) {
        newArray.unshift(n)
    }
    return newArray;
}

// console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace (anArray) {
    let le = anArray.length;
    for (let i = 0; i < le; i++) {
        let z = anArray.pop(anArray[le - 1]);
        anArray.splice(i, 0, z);
        console.log(anArray);
    }
    return anArray;
}

//console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

// A List

function arrayToList (anArray) {
    let list = null;
    for (let i = anArray.length - 1; i >= 0; i--) {
        list = {value: anArray[i], rest: list};
    }
    return list;
}

console.log(listToArray([1, 2, 3]));

function listToArray (aList) {
    let array = [];
    for (let node = aList; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

// console.log (listToArray(arrayToList([1,2,3])));


function prepend(val, list) {
    return {val, rest: list};
}

// console.log(prepend (30, prepend(20, {value: 10, rest: null})));
function nth (aList, number) {
    if (!aList) return undefined;
    else if (number === 0) {
        return aList.value;
    } else {
        return nth(aList.rest, number - 1);
    }
}

// console.log(nth(arrayToList([10,20,30]), 3));



// Deep Comparison

function deepEqual (valA, valB) {
    if (valA === valB) return true;

    if (valA == null || typeof valA != "object" ||
        valB == null || typeof valB != "object") return false;

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(valA[key], valB[key])) return false;
    }
    return true;

}

let obj = {something: "yes", others: {a: "hey"}};

console.log(deepEqual(1 , "a"));
