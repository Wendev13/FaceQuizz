var stars = JSON.parse(base);
console.log(stars)


// Counter 10 seconds for Level 1

var counterL1 = 10;
var score = 0; 
var currentStar = 0;
var counterId;
var lives = 3;

//var scoreL1 = document.querySelector(".stars-container")
var rulesL1 = document.querySelector(".level-presentation")
var gameL1 = document.querySelector(".playingL1-container")
var btnNext = document.querySelector(".btn-next")
var btnGo = document.querySelector(".btn-start-1")
var counterText = document.getElementById("sec")

var imageLeft = document.getElementById("left")
var imageRight = document.getElementById("right")

var answerName = document.querySelector(".answer-l1")

var scoreL1 = document.querySelector(".score-l1 .number")

btnNext.onclick = function() {
  gameL1.style.display = "flex"
  rulesL1.style.display = "none"
}

function displayPair() {
  // we take all the stars with a lookalike
  var pairsLevelOne = stars.filter(star => star.lookalike.length > 1)
  
  if (pairsLevelOne.length > currentStar) {
    timerChrono()
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
    
  } else {
    window.location = "index.html"
  }
}

btnGo.onclick = displayPair

imageLeft.onclick = function(e) {
  checkAnswer(e)
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
    looseStar()
  }
  scoreL1.innerText = score
  nextQuestion();
}

// A function that change images and question
function nextQuestion() {
  
  if (score <= 20) {
    currentStar +=1
    clearInterval(counterId)
    displayPair()
  } else window.location = "level2.html"
  
}


function timerChrono() {
  clearInterval(counterId)
  counterL1 = 10
  counterText.innerHTML = counterL1
  btnGo.style.display = "none"

  counterId = setInterval(function() {
    counterL1 --
    counterText.innerHTML = counterL1
    if (counterL1 === 0) {
      looseStar()
      nextQuestion()
    }
  }, 1000)
}

function looseStar() {
  lives --
  var removedStar = document.querySelector(".gold")
  removedStar.classList.remove("gold")
  removedStar.classList.add("grey")
  gameOver()
}

function gameOver() {
  if (lives === 0) {
    window.location = "index.html"
  }
}
   

