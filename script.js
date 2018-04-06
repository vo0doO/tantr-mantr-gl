var defaultText = document.getElementById("eight");
var answer = document.getElementById("answer");
var button = document.getElementById("button");
var input = document.getElementById("input");
var mant = "";
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

function getIndex(min, max){
  return Math.floor(Math.random() * (max - min) + min);
  };


function strForAdd () {
  mant = mant+options[getIndex(0, options.length)]
  return mant
  }

button.addEventListener("click", function() {
    if (input.value.length == 0) {
    alert("Пожалуйста введите Ваше имя !");
  } else {
    let name = input.value
    if (~mant.indexOf(".")) {
        alert("Поздравляем " + name + " ваша мантра готова: " + mant + " !")
    } else {
      let n = strForAdd();
      defaultText.innerText = n;
      answer.innerText = n;
    }
  };
});

