var bodyMassIndex = function(weight, height) {
  return weight / height;
};

var height = parseInt(prompt("Enter your weight:"));
var weight = parseInt(prompt("Enter your height:"));
var result = bodyMassIndex(weight, height);
alert(result);
