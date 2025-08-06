// Sort in decreasing orderr
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => (b, a));

console.log(arr);

// Copy and sort array
function copySorted(arr) {
    return arr 
        .slice().sort();
}

let arrTwo = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrTwo);

console.log(sorted);
console.log(arrTwo);

// Shuffle an array

function shuffle(arr) {
    for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

let arrThree = [1, 2, 3];

shuffle(arrThree);
console.log(arrThree);
shuffle(arrThree);
console.log(arrThree);
shuffle(arrThree);
console.log(arrThree);

// Filter unique array members

function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", 
    "Krishna", "Krishna", "Hare", "Hare", ":-0"
];

console.log(unique(strings)); // Hare, Krisna, :-0
