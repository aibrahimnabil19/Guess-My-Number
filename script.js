const enterGuess = document.getElementById("enterGuess")
const check = document.getElementById("check")
const playAgain = document.getElementById("playAgain")
const display = document.getElementById("display")
const counter = document.getElementById("count")
const game = document.getElementById("game")
const question = document.getElementById("question")
const questionMark = document.getElementById("questionMark")

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
        display.textContent = "🎉Correct Number!"
        question.textContent = random
        questionMark.style.backgroundColor = "#B5EBBE"
        count = 0
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