let scoreValue = 0;
let highScoreValue = 0;

const modes = [
    {
        title: "GUESS MY NUMBER!",
        titleDesc: "Guess a number between 1 and 20",
        questionM: "?",
        displayMessage: "Start guessing...",
        scoreCount: `Score: ${scoreValue}`,
        highScoreCount: `Highscore: ${highScoreValue}`
    }
]

const game = document.getElementById("game")

const gameCard = modes.map((mode) => {
    return `
        <!-- Top part -->
        <div id="topPart">
            <h3>${mode.title}</h3>
            <p>${mode.titleDesc}</p>
        </div>

        <!-- Middle Part -->

        <div id="middle">
            <div id="questionMark">
                <p id="question">${mode.questionM}</p>
            </div>

            <div id="checkerDiv">
                <input id="enterGuess" type="text" placeholder="Enter your guess">
                 <button id="check">Check</button>
            </div>
        </div>

        <!-- Bottom Part -->

        <div id="bottom">
            <div id="guess">
                <p id="display">${mode.displayMessage}</p>
                <!-- <p id="count"></p> -->
                <div id="scores">
                    <p id="score">${mode.scoreCount}</p>
                    <p id="highScore">${mode.highScoreCount}</p>
                </div>
            </div>
            <button id="playAgain">Play Again</button>
        </div>
    `
}).join('')

game.innerHTML = gameCard

const enterGuess = document.getElementById("enterGuess")
const check = document.getElementById("check")
const playAgain = document.getElementById("playAgain")
const display = document.getElementById("display")
const counter = document.getElementById("count")
// const game = document.getElementById("game")
const question = document.getElementById("question")
const questionMark = document.getElementById("questionMark")
const score = document.getElementById("score")
const highScore = document.getElementById("highScore")

let random = Math.floor(Math.random()* 20) + 1;
let count = 0;

const guessChecker = (number) => {
    // random 
    // const userValue = Number(enterGuess.value)

    if (isNaN(number) || number == undefined || number <= 0 || number > 20){
        count++
        if (count >= 10){
            display.textContent = "❌ You lost the game! (You had more than 10 tries)"
            game.style.backgroundColor = "#E8C8C8"
            playAgain.style.backgroundColor = "#CF3232"
            display.style.color = "#CF3232"
            check.style.background = "#8991A1"
            question.textContent = random
            questionMark.style.backgroundColor = "#E8C8C8"
        }else{
            display.textContent = "Your Number has to be a number between 1 and 20"
        }
        return
    }else if(number === random){
        game.style.backgroundColor = "#B5EBBE"
        playAgain.style.backgroundColor = "#0D631B"
        check.style.background = "#8991A1"
        check.style.cursor = "default"
        check.style.transform = "scale(1)"
        display.textContent = "🎉Correct Number!"
        display.style.color = "#0D631B"
        question.textContent = random
        questionMark.style.backgroundColor = "#B5EBBE"
        // check.ariaDisabled(true)
        count = 0
        scoreValue++
        if (highScoreValue < scoreValue){
            highScoreValue = scoreValue
            highScore.textContent = `Highscore: ${highScoreValue}`
        }
        score.textContent = `Score: ${scoreValue}`
        random = Math.floor(Math.random()* 20) + 1;
        return
    }else if(number > random){
        if (count >= 10){
            display.textContent = "❌ You lost the game! (You had more than 10 tries)"
            game.style.backgroundColor = "#E8C8C8"
            playAgain.style.backgroundColor = "#CF3232"
            display.style.color = "#CF3232"
            check.style.background = "#8991A1"
            question.textContent = random
            questionMark.style.backgroundColor = "#E8C8C8"
        }else{
            display.textContent= "📈 Too high!"
            count++
        }
        return
    }else if(number < random){
        if (count >= 10){
            display.textContent = "❌ You lost the game! (You had more than 10 tries)"
            game.style.backgroundColor = "#E8C8C8"
            playAgain.style.backgroundColor = "#CF3232"
            display.style.color = "#CF3232"
            check.style.background = "#8991A1"
            question.textContent = random
            questionMark.style.backgroundColor = "#E8C8C8"
        }else{
            display.textContent= "📈 Too Low!"
            count++
        }
        return
    }

}
check.addEventListener("click", () => {
    const userNumber = Number(enterGuess.value) 
    guessChecker(userNumber)
    // counter.textContent = count
})

playAgain.addEventListener("click", () => {
  random = Math.floor(Math.random() * 20) + 1
  count = 0
  scoreValue = 0

  display.textContent = "Start guessing..."
  question.textContent = "?"
  enterGuess.value = ""

  game.style.backgroundColor = ""
  display.style.color = ""
  playAgain.style.backgroundColor = ""
  questionMark.style.backgroundColor = ""

  check.style.background = ""
  check.style.cursor = ""
  check.style.transform = ""
  check.disabled = false
  score.textContent = `Score: ${scoreValue}`
})
