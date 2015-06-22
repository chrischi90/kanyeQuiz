document.write('<h1>The Ultimate Kanye West Quiz<h2>');
alert('Are you ready for this quiz bruh bruh?');
var numberCorrect = 0;
//var showScore = document.write('Score: ');
//document.write('Score: ' + numberCorrect);

//Question 1
var questionOneGuess = prompt("Which Kanye West album has the song 'Jesus Walks'?");
if (questionOneGuess.toUpperCase() === 'THE COLLEGE DROPOUT') {
  alert('You right, you right. On to the next one.');
  numberCorrect = numberCorrect + 1;
} else {
  alert('Naw bro, smh. Try the next one.');
}

//Question 2
var questionTwoGuess = prompt("What is Kanye's mother's first name?");
if (questionTwoGuess.toUpperCase() === 'DONDA') {
  alert('You got it my dude. On to the next one.');
  numberCorrect = numberCorrect + 1;
} else {
  alert('Naw. Try the next one.');
}

//Question 3
var questionThreeGuess = prompt("What year did 'Yeezus' drop?");
if (parseInt(questionThreeGuess) === 2013) {
  alert('Baller. On to the next one.');
  numberCorrect = numberCorrect + 1;
} else {
  alert('INCORRECT. Try the next one.');
}

//Question 4
var questionFourGuess = prompt("Which song begins, 'On lonely nights I start to fade...' ");
if (questionFourGuess.toUpperCase() === 'COLDEST WINTER') {
  alert('Sweet. On to the next one.');
  numberCorrect = numberCorrect + 1;
} else {
  alert('Maybe next time. Try the next one.');
}

//Question 5 
var questionFiveGuess = prompt("What is Kanye's middle name?");
if (questionFiveGuess.toUpperCase() === 'OMARI') {
  alert("You got it man. Let's see how you did.");
  numberCorrect = numberCorrect + 1;
} else {
  alert("Wrong. Let's see how you did.");
}

//Quiz Results
if (numberCorrect === 5) {
  document.write('GOD LEVEL. You got all five questions right!');
} else if (numberCorrect >= 3 && numberCorrect <= 4) {
  document.write('Yeezy must have taught you. But you can still learn more.');
} else if (numberCorrect >=1 && numberCorrect <= 2) {
  document.write('If you respect artistry, you would listen to all his music and try this quiz again.');
} else {
  document.write("YOU AIN'T GOT THE ANSWERS!!!");
}
