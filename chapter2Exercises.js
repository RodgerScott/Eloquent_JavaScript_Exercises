// Eloquent Javascript Chapter 2 Solutions

function loopingATriangle (number) {
    let accum = '';
    for (let i = 0; i < number; i++) {
        accum += '#';
        console.log(accum);
    }
}
// loopingATriangle(7);

function fizzBuzz (number) {
    for (let i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        }
        else if(i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}
// fizzBuzz(100);

function chessboard (number) {
    let redRow = '';
    let blackRow = '';
    for (let i = 0; i < number; i++) {
        for (let j = i; j === i; j++) {
            if (i % 2 === 0) {
                redRow += ' ';
                blackRow += '#';
            }
            else {
                redRow += '#';
                blackRow += ' ';
            }
        }
    }
    for (let i = 0; i < number; i++) {
        if (i % 2 === 0) {
            console.log(redRow );
        }
        else {
            console.log(blackRow);
        }
    }
}

chessboard(14);