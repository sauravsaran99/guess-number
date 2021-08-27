'use strict';

// document.querySelector('.message').textContent = 'saurav kumar';

// Question- You have calculate the price of the ticket from patna airpot to 5 diffrent airport

// 1. create a function who will take array as a argument and calculate the price

// function ticketPrice(arr) {
//   if (arr === 'delhi') {
//     console.log(
//       `Price of the ticket from patna ↔️ delhi is $84 but after adding 15% taxes the total price is $${
//         84 + 84 * 0.15
//       }`
//     );
//   } else if (arr === 'banglore') {
//     console.log(
//       `Price of the ticket from patna ↔️ banglore is $125 but after adding 20% taxes the total price is $${
//         125 + 125 * 0.2
//       }`
//     );
//   } else if (arr === 'tamilnadu') {
//     console.log(
//       `Price of the ticket from patna ↔️ tamilnadu is $180 but after adding 30% taxes the total price is $${
//         180 + 180 * 0.3
//       }`
//     );
//   } else if (arr === 'mumbai') {
//     console.log(
//       `Price of the ticket from patna ↔️ mumbai is $97 but after adding 20% taxes the total price is $${
//         97 + 97 * 0.2
//       }`
//     );
//   } else if (arr === 'sikkim') {
//     console.log(
//       `Price of the ticket from patna ↔️ sikkim is $40 but after adding 20% taxes the total price is $${
//         40 + 40 * 0.2
//       }`
//     );
//   } else {
//     console.log(
//       `Sorry for the your inconvenience, right now we are not providing our ride to this city. But we will soon, good luck!`
//     );
//   }
// }

// const cityName = prompt('where you want to go?');
// ticketPrice(cityName);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;

let highScore = 0;

let printMessage = function ('message') {
  
}
document.querySelector('.check').addEventListener('click', function () {
  score -= 1;
  document.querySelector('.score').textContent = score;
  let guessNumber = Number(document.querySelector('.guess').value);
  if (score >= 1) {
    if (!guessNumber) {
      document.querySelector('.message').textContent = 'No Number⚠️';

      //When guessNumber is not equal to secretNumber
    } else if (guessNumber != secretNumber) {
      document.querySelector('.message').textContent = guessNumber > secretNumber ? '📈 To High!' : '📉 To Low!';
    // } else if (guessNumber > secretNumber) {
    //   document.querySelector('.message').textContent = '📈 To High!';
    // } else if (guessNumber < secretNumber) {
    //   document.querySelector('.message').textContent = '📉 To Low!';
    } else if (guessNumber === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Right Guess!';

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  } else {
    document.querySelector('.message').textContent = '💥 You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
});


//Reset process...
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';
});
