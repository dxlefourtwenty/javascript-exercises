function add7(number) {
    return number + 7;
}

function multiply(x, y) {
    return x * y;
}

function capitalize(string) {
    if (typeof string != 'string' || string.length === 0) {
        return string;
    }

    const firstChar = string.charAt(0).toUpperCase();
    const restOfString = string.slice(1).toLowerCase();

    return firstChar + restOfString;
}

function lastLetter(string) {
    if (typeof string != 'string' || string.length === 0) {
        return string;
    }

    return string.charAt(string.length - 1);
}

console.log(add7(6));
console.log(multiply(6, 7));
console.log(capitalize('faggots'));
console.log(capitalize('FAGGOTS'));
console.log(lastLetter('Hello Stupid idiot'));




