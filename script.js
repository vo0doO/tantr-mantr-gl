var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var button = document.getElementById("button");
var input = document.getElementById("input");

var options = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  ".",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  ".",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "."  
];


var mant = "";

var index = function (min, max) {
  return Math.random(min, max);
}

var strForAdd = function () {
      if (mant.length > 0) {
        let arr = mant.split("");
        for (i=0; i <= arr.length; i++) {
          let dubleInd = options.indexOf(arr[i])
        }
  }
  else {
    return index(0, options.length)
  }
button.addEventListener("click", function(){
  if (input.value.length < 1) {
    alert("Пожалуйста напишите как вы будите использовать созданную специально для Вас мантру !");
  } else {
    eight.innerText = "";
    answer.innerText = strForAdd
});

