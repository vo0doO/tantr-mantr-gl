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

button.addEventListener("click", function(){
  if (input.value.length < 1) {
    alert("Пожалуйста введите вашу самую любимую букву!");
  } else {
    eight.innerText = "";
    var mant = new Array(input.value);
    
    answer.innerText = options[num];
  }
});

