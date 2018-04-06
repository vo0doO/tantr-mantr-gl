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
      // если мантра уже не пустая
      if (mant.length > 0) {
        // преобразуем её из строки в массив строк
        let arr = mant.split("");
        // индексируем буквы в мантре
        for (let i=0; i <= arr.length; i++) {
          // ищем дубликаты и получаем индексы этих букв в оптионс
          let dubleInd = options.indexOf(arr[i]);
          // удаляем дубликаты из оптионс по индексам
          options.splice(dubleInd, dubleInd);
          // возвращаем рандомную букву из очищеного оптионс
          return options[Math.floor(0, options.length)]
        }
    // если мантра пустая
  } else {
    // возвращаем рандомную букву из стартового оптионс
    return options[getIndex(0, options.length)]
  }
}

button.addEventListener("click", function() {
    if (input.value.length == 0) {
    alert("Пожалуйста напишите как вы будите использовать созданную специально для Вас мантру !");
  } else {
    let n = strForAdd();
    defaultText.innerText = n;
    answer.innerText = n;
    mant.splice()
  };
});

