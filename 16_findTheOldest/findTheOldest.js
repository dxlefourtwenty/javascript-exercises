// const findTheOldest = function(array) {
//     const now = new Date().getFullYear();
//     let ages = [];
//     let i = 0;
//     let max = 0;
//     let oldest = '';
//     array.map(person => {
//         if (person.yearOfDeath === undefined) {
//             person.yearOfDeath = now;
//         }
//         let birthYear = person.yearOfBirth;
//         let deathYear = person.yearOfDeath;
//         ages[i] = deathYear - birthYear;
//         if (max < ages[i]) {
//             max = ages[i];
//             oldest = person.name;
//         }
//         i++;
//     });

//     return oldest;
// };

const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (oldestAge < currentAge) {
            return currentPerson;
        } else {
            return oldest;
        }
    });
}

const getAge = function(birth, death) {
    const now = new Date().getFullYear();
    if (!death) {
        death = now;
    }

    return death - birth;
}

//console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
