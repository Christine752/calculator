var bodyMassIndex = function(weight, height) {
  return weight / height;
};

var height = parseInt(prompt("Enter your weight:"));
var weight = parseInt(prompt("Enter your height:"));
var result = divide(weight, height);
alert(result);
