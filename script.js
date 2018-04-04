var defaultText = document.getElementById("eight");
var answer = document.getElementById("answer");
var button = document.getElementById("button");
var input = document.getElementById("input");
var mant = " ";
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

button.addEventListener("click", function() {
  // если не ввел цель использования мантры
  if (input.value.length === 0) {
    alert("Пожалуйста напишите как вы будите использовать созданную специально для Вас мантру !");
  } else {
    defaultText.innerText = strForAdd();
    answer.innerText = strForAdd();
  }
}

function getIndex(min, max) {
  return Math.random() * (max - min) + min;
  };


function strForAdd () {
      // если мантра уже не пустая
      if (mant.length > 0) {
        // преобразуем её из строки в массив строк
        let arr = mant.split("");
        // индексируем буквы в мантре
        for (i=0; i <= arr.length; i++) {
          // ищем дубликаты и получаем индексы этих букв в оптионс
          let dubleInd = options.indexOf(arr[i]);
          // удаляем дубликаты из оптионс по индексам
          options.splice(dubleInd, dubleInd);
          // возвращаем рандомную букву из очищеного оптионс
          let index = getIndex(
          return options[]
        }
    // если мантра пустая
  } else {
    // возвращаем рандомную букву из стартового оптионс
    return index(0, options.length)
  }
}