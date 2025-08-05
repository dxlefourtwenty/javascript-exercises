const arr = [1, 2, 3, 4, 5];

// let finalArr = arr.filter((num) => {
//     return num % 2 === 0;
// });

// finalArr = finalArr.map((num) => num * 3);

// let finalTotal = finalArr.reduce((total, currentItem) => {
//     return total + currentItem;
// }, 1);

// console.log(arr);
// console.log(finalArr);
// console.log(finalTotal);

// -----------

// reduced solution:

function sumOfTripledEvens(array) {
    return array
        .filter((num) => {
            return num % 2 === 0;
        })
        .map((num) => num * 3)
        .reduce((total, currentItem) => {
            return total + currentItem;
        }, 1);
}

console.log(sumOfTripledEvens(arr));


