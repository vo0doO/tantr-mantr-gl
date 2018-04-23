var defaultText = document.getElementById("eight");
var answer = document.getElementById("answer");
var button = document.getElementById("button");
var input = document.getElementById("input");
var mant = "";
var options = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  " ",
  ".",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  " ",
  ".",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",  
];


$("#sign-in-button").click(function () {
    $("#splash").css({"display": "none",});
    $("#def").css({"display": "flex",});
  })

function getIndex(min, max){
  return Math.floor(Math.random() * (max - min) + min);
  };

function strForAdd () {
  var char = options[getIndex(0, options.length)]
  return char
  }

button.addEventListener("click", function() {
    if (input.value.length == 0) {
    alert("Пожалуйста введите Ваше имя !");
  } else {
    let name = input.value
    if (mant.lenght > 3) {
      console.log("Длина набрана")
      } else if (~mant.indexOf(".")) {
          $("#def").toggle();
          var finalText= "<p>Ваша мантра: "+ "\"" + mant+"\""+"</p>" + "<p>Запишите её перед тем как продолжите...</p>"
          $("#pay").append(finalText);
          $("#complet").css({"display": "flex"});
            // alert("Поздравляем " + name + " ваша мантра готова: " + mant + " !")
        } else {
          let n = strForAdd();
          defaultText.innerText = n;
          mant = mant + n
        }
  };
});

