const convertToFahrenheit = function(temp) {
  let fraction = 9 / 5;
  let num = (temp * fraction) + 32;
  let roundedTemp = num.toFixed(1);
  let convertedTemp = parseFloat(roundedTemp);

  return convertedTemp;
};

const convertToCelsius = function(temp) {
  let fraction = 5 / 9;
  let num = (temp - 32) * fraction;
  let roundedTemp = num.toFixed(1);
  let convertedTemp = parseFloat(roundedTemp);

  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
