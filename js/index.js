var stars = [
  {
      name: "Abraham Lincoln",
      image: "Abraham_Lincoln.jpg",
      gender: "M",
      level:[1, 2, 3],
      lookalike: "C"
  },
  {
      name: "Albert Einstein",
      image: "Albert_Einstein.jpg",
      gender: "M",
      level: [2, 3],
      lookalike: ""
  },
  {
      name: "Al Pacino",
      image: "Al_Pacino.jpg",
      gender: "M",
      level: [2, 3],
      lookalike: "C"
  },
  {
    name: "Emmanuel Macron",
    image: "Emmanuel_Macron.jpg",
    gender: "M",
    level:[1, 2, 3],
    lookalike: "N"
  },
  {
      name: "Evan Spiegel",
      image: "Evan_Spiegel.jpg",
      gender: "M",
      level:[1, 2, 3],
      lookalike: "N"
  }
]

// Counter 10 seconds for Level 1

var counterL1 = 10;
var score = 0; 
var currentStar = 0

var rules = document.querySelector(".level-presentation")
var game = document.querySelector(".play-level-1")
var btnNext = document.querySelector(".btn-next")
var btnGo = document.querySelector(".btn-start-1")

var imageLeft = document.getElementById("left")
var imageRight = document.getElementById("right")

var answerName = document.querySelector(".answer-l1")

var scoreL1 = document.querySelector(".score-l1")

game.style.visibility = "hidden"

btnNext.onclick = function() {
  game.style.visibility = "visible"
  rules.style.visibility = "hidden"
}

function displayPair() {
  var pairsLevelOne = stars.filter(star => star.lookalike.length >= 1)
  if (pairsLevelOne.length > currentStar) {
    var myFirstStar = pairsLevelOne[currentStar];
    var filteredArray = pairsLevelOne.filter(star => star.lookalike === myFirstStar.lookalike)
    var randomNumber = Math.floor(Math.random() * 2)   
    var name = filteredArray[randomNumber].name
    answerName.innerText = name
    var firstImage = filteredArray[0].image 
    var secondImage = filteredArray[1].image
    imageLeft.style.backgroundImage = `url(./images/${firstImage})`
    imageLeft.name = filteredArray[0].name
    imageRight.name = filteredArray[1].name
    imageRight.style.backgroundImage = `url(./images/${secondImage})`
    debugger
  } else {
    window.location = "google.fr"
    debugger
  }
}

btnGo.onclick = displayPair

imageLeft.onclick = function(e) {
  checkAnswer(e)
  debugger
}

imageRight.onclick = function(e) {
  checkAnswer(e)
}

function checkAnswer(e) {
  if (e.target.name === answerName.innerText) {
    console.log("right")
    score += 2;
  } else {
    console.log("wrong")
    score -= 2 
  }
  nextQuestion();
}

// A function that change images and question
function nextQuestion() {
  if (score <= 20) {
    currentStar +=1
    debugger
    displayPair()
  } else console.log("go to the next level!")
}


function timerChrono() {
  counterL1 = setInterval(tenSeconds, 1000);
      function tenSeconds() {
      if 
  }
}







// document.querySelector(".btn-start-1").onclick = function() {
//   //counter starts
//   //both images appear
//   //"name"(==1/2 image) appears

// function renderPicturesL1() {
//   document.querySelectorAll(".img-container-level-1").forEach(function(picture) {
    
//   })
// }
