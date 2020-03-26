var bodyMassIndex = function(weight, height) {
  return weight / height;
};

var height = parseInt(prompt("Enter your weight in kilograms:"));
var weight = parseInt(prompt("Enter your height in meters squared:"));
var result = bodyMassIndex(weight, height);
alert(result);
