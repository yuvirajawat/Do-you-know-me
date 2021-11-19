var readlineSync = require('readline-sync');
const chalk=require('chalk');
var score=0;
function welcome(){
var userName= readlineSync.question("What's your name ? ");
console.log(chalk.blue("welcome "+ userName+" to Do You Know Yuvraj !"));
console.log("--------");
}
var questions=[
{
  question:"What is nick name of Yuvraj ? ",
  answer:"ankit",
},
{
  question: "Which is Yuvraj's birthday month ? ",
  answer:"march",
},
{
  question:"Do Yuvraj love coding ? ",
  answer:"yes",
},
{
  question:"Who is Yuvraj's best friend ? ",
  answer:"his mom",
},
{
  question:"From which city Yuvraj graduated ? ",
  answer:"Bangalore",
},
{
  question:"What gives Yuvraj most joy ? ",
  answer:"helping others",
},
{
  question:"Do Yuvraj like momos ? ",
  answer:"yes",
},
{
  question:"Yuvraj loves sea or mountains ? ",
  answer:"mountains",
},
{
  question:"Which is his favourite color ? ",
  answer:"blue",
},
{
  question:"Favourite corner in his house ? ",
  answer:"desk",
}];
// play function
function play(question,answer){
  var userAnswer= readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    score++;
    console.log(chalk.green("you were right !"));
  }
  else{
    console.log(chalk.red("you were wrong !"));
  }
  console.log(chalk.yellow("your score is "+score));
  console.log("--------");
}
function game(){
  for( var i=0;i< questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
}
function showScores(){
  console.log("your final score is "+score);
  if(score === 10){
    console.log(chalk.green("Yay you seems to be yuvraj's best friend !"));
  }
  else{
    console.log(chalk.yellow("Well done! try to know yuvraj better."));
  }
}
welcome();
game();
showScores();