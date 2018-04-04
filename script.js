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


button.addEventListener("click", function(){
  // если не ввел цель использования мантры
  if (input.value.length < 1) {
    alert("Пожалуйста напишите как вы будите использовать созданную специально для Вас мантру !");
  } else {
    defaultText.innerText = "";
    answer.innerText = strForAdd();
  }
}


function index (min, max) {
  return Math.random(min, max);
}

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
          return options[Math.random(0, options.length)]
        }
    // если мантра пустая
  } else {
    // возвращаем рандомную букву из стартового оптионс
    return index(0, options.length)
  }
}