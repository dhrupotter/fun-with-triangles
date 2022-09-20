var side1 = document.querySelector(".side-1");
var side2 = document.querySelector(".side-2");
var computeBtn = document.querySelector("#compute-hypotenuse");
var output = document.querySelector("#output-hypotenuse");

computeBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var result = hypotenuse(side1.value, side2.value);
  console.log(result);
  output.innerHTML = `The hypotenuse for required sides is ${result}`;
}

function hypotenuse(a, b) {
  var temp = a ** 2 + b ** 2;
  var result = Math.sqrt(temp);
  return result;
}
