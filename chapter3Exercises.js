function minimumNumber (a, b) {
    return (a > b ? b : a);
}

// console.log(minimumNumber(6, 5));


function isEven (n) {
    let abs = Math.abs(n);
    let val;
    switch (abs) {
        case 0:
            val = true;
            console.log(val);
            break;
        case 1:
            val = false;
            console.log(val);
            break;
        default:
            isEven(abs - 2);
    }
}

// isEven(-50);

function countBs (word, letter) {
    let charArray = word.split("");
    let letterCount = 0;
    charArray.forEach(function (element) {
        if (element == letter) {
            letterCount += 1;
        }
    });
    return letterCount;
}

// console.log(countBs ("heyheyehyz", "z"));