const palindromes = function(input) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = input
    .toLowerCase().split('')
    .filter((char) => alphanumerical.includes(char))
    .join('');

    const reversedString = cleanedString.split('').reverse('').join('');

    return reversedString === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
