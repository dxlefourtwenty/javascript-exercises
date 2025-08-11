const fibonacci = function(index) {
    if (typeof 'string') {
        index = parseInt(index);
    }

    if (index === 0) {
        return 0;
    } else if (index == 1) {
        return 1;
    } else if (index < 0) {
        return 'OOPS';
    }

    let prev = 0;
    let curr = 1;

    for (let i = 2; i < index + 1; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
};


// n + prev
// Do not edit below this line
module.exports = fibonacci;
