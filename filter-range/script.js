function filterRange(arr, a, b) {
    return arr
    .filter((num) => (num >= a && num <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);
console.log("\n\n");

console.log("In Place:");

function  filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);
