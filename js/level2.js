var stars = JSON.parse(base);
console.log(stars)

var counterL2 = 10;
var score = 0; 
var currentStar = 0;
var counterId;
var lives = 3;

//var scoreL2 = document.querySelector(".stars-container")
var scoreL2 = document.querySelector(".score-l2 .number")
var rulesL2 = document.querySelector(".level-presentation")
var gameL2 = document.querySelector(".playingL2-container")
var btnNext = document.querySelector(".btn-next")
var btnGo = document.querySelector(".btn-start-2")
var counterText = document.getElementById("sec")

var targetImage = document.querySelector(".img-container-level-2")

const name1 = document.querySelector('.btn-answer1-l2')
const name2 = document.querySelector('.btn-answer2-l2')
const name3 = document.querySelector('.btn-answer3-l2')
const name4 = document.querySelector('.btn-answer4-l2')

gameL2.style.display = "none"

btnNext.onclick = function() {
  gameL2.style.display = "flex"
  rulesL2.style.display = "none"
};

function displayOneImage() {
    //We take only one of star with similar gender
    var targetIndex = Math.floor(Math.random() * stars.length)

    const targetName = stars[targetIndex].name
    const targetFace = stars[targetIndex].image

    targetImage.style.backgroundImage = `url(./images/${targetFace})`
    targetImage.title = targetName

    stars.splice(targetIndex, 1)

    var alternativeIndex1 = Math.floor(Math.random() * stars.length)
    var alternativeIndex2 = Math.floor(Math.random() * stars.length)
    var alternativeIndex3 = Math.floor(Math.random() * stars.length)
    
    const alternatives = [
        stars[alternativeIndex1].name,
        stars[alternativeIndex2].name,
        stars[alternativeIndex3].name
    ];

    const targetFaceIndex = Math.floor(Math.random() * 4)
    alternatives.splice(targetFaceIndex, 0, targetName)

    name1.innerHTML = alternatives[0];
    name2.innerHTML = alternatives[1];
    name3.innerHTML = alternatives[2];
    name4.innerHTML = alternatives[3];

    timerChrono()

}

btnGo.onclick = displayOneImage

function checkAnswer (e) {
  const clickedName = e.target.innerHTML;
  const rightName = targetImage.title

  if (clickedName === rightName) {
    score += 2
  } else {
    looseStar()
  }

  if (score <= 50) {
      displayOneImage();
  } else {
      alert('Now level 3!')
  }

  scoreL2.innerText = score
}

name1.onclick = checkAnswer;
name2.onclick = checkAnswer;
name3.onclick = checkAnswer;
name4.onclick = checkAnswer;

function nextQuestion() {
  
    if (score <= 30) {
      //currentStar +=1
      clearInterval(counterId)
      displayOneImage()
    } else window.location = "index.html"
    
  }

function timerChrono() {
    clearInterval(counterId)
    counterL2 = 10
    counterText.innerHTML = counterL2
    btnGo.style.display = "none"

    counterId = setInterval(function() {
      counterL2 --
      counterText.innerHTML = counterL2
      if (counterL2 === 0) {
        looseStar()
        //nextQuestion()
      }
    }, 1000)
  }

  function looseStar() {
    lives --
    var removedStar = document.querySelector(".gold")
    removedStar.classList.remove("gold")
    removedStar.classList.add("grey")
    if (lives === 0) {
        window.location = "level1.html"
    }
    //gameOver()
  }



//displayOneImage()