function getIndex(min, max){
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
          return options[Math.random(0, options.length)]
        }
    // если мантра пустая
  } else {
    // возвращаем рандомную букву из стартового оптионс
    return index(0, options.length)
  }
}