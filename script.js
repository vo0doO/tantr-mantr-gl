
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


$("#user-in-mail").click(function () {
    $("#splash").css({"display": "none",});
    $("#def").css({"display": "flex",});
  })
/*
$("#sign-in-mail").click(function () {
    mailru.events.listen(mailru.connect.events.login, function(session) {
    // эта функция будет вызвана при логине
    alert(session.ext_perm); // показывает привилегии залогиненного пользователя
    });
    mailru.connect.login(['widget', 'photos', 'guestbook', 'email']);
})
$("#user-in-mail").click(function () {
    mailru.common.users.getInfo(function(user_list) {
      alert(user_list[0].first_name); // выведет имя пользователя с uid 123
});

})
*/   
function getIndex(min, max){
  let index = Math.floor(Math.random() * (max - min) + min);
  return index
  };

function strForAdd () {
  let index = getIndex(0, options.length)
  var char = options[index]
  options.splice(index, 1)
  console.log(options)
  return char
  }

// добавляем слушатель кнопки создать
button.addEventListener("click", function() {
  // если в поле ввода ничено не введено
    if (input.value.length == 0) {
      // выводиим сообщение
    alert("Пожалуйста введите Ваше имя !");
  } else {
    // если введено записываем ввод в переменную
    let name = input.value
    }
    //  если длина мантры больше 3 символов
    if (mant.lenght < 35) {
          let n = strForAdd();
          // показываем выбранну букву в интерфейсе
          defaultText.innerText = n;
          //  добавляем выбранную букву в мантр
          mant = mant + n
      // и если в мантре появилась точка
      } else if (~mant.indexOf(".")) {
        // скрываем интерфейс ввода
          $("#def").toggle();
        // составляем финальный текст
          var finalText= "<p>Ваша мантра: "+ "\"" + mant+"\""+"</p>" + "<p>Запишите её перед тем как продолжите...</p>"
          // добовляем финальный текст в html
          $("#pay").append(finalText);
          // показываем интерфейс оплаты
          $("#complet").css({"display": "flex"});
            // иначе 
        } else {
          // при нажатии кнопки создать используем функцию выбора буквы из оптионс
          let n = strForAdd();
          // показываем выбранну букву в интерфейсе
          defaultText.innerText = n;
          //  добавляем выбранную букву в мантр
          mant = mant + n
        }
  
});

