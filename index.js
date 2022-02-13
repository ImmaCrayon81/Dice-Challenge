function dice1() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number betewen 1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random number betewen 1-6
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png;
  var randomImageSource2 = "images/" + randomDiceImage2;
  var image1 = document.querySelectorAll("img")[0];
  var image2 = document.querySelectorAll("img")[1];
  image1.setAttribute("src", randomImageSource);
  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!"
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩"
  } else if (randomNumber2 == randomNumber1) {
    document.querySelector(".container h1").innerHTML = "Draw!"
  }
}
dice1();
