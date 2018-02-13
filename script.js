console.log('hi');

var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var button = document.getElementById("shake");

var options = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes – definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most Likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don’t count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again"
];

button.addEventListener("click", function(){
  eight.innerText = "";
  
  var random = Math.floor(Math.random() * options.length);
  
  answer.innerText = options[random];
});

