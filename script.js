/*alert('testing if linked')*/

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
/*^ the "_span" is a good format to label variables for identifying things later on;
 - those with the underscore are DOM variabes kept in the HTML*/
/*Need to understand "getElementBy" in more detail */
/** */
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



/*^ Above is a case of storing variable referene points to they can be reused 32min;
 - makes things more efficient*/


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
/*^^This is used to prove the GETCOMPUTERCHOICE function works to produce a random letter
console.log(getComputerChoice());
*/

/*Below 
Win function parameters can be anything BUT need to reference the switch statement below*/
function win(userChoice, computerChoice) {
    userScore++;

    userScore_span.innerHTML = userScore;
    /* Above;
     - "userscore_span" because its the JS variable that stores the HTML user score number
     - ".innerHTML" because its a property that allows JS to read or alter  a HTML tag (Document.O.M) */
    computerScore_span.innerHTML = computerScore;
    /* Below - Check to show that;
     - The win function works as expected from the game switch statement
     - The winner score increments from ++
    console.log("winner")
    console.log(userScore)
    console.log(computerScore)*/
    var smallUser = "(User)".fontsize(3); /*******WHY DOES FONTSIZ HAVE A LINE THROUGH IT*******/
    var smallComp = "(Comp)".fontsize(3);
    result_div.innerHTML = `${letter2Word(userChoice)}${smallUser} beats ${letter2Word(computerChoice)}${smallComp}. You Win!`;
    /*refer to 1hr in  for result reference*/
    console.log("winner")

}


function letter2Word(character) {
    if (character === "r")
        return "Rock";
    if (character === "p")
        return "Paper";
    return "scissors"
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    console.log("loser")
    var smallUser = "(User)".fontsize(3); /*******WHY DOES FONTSIZ HAVE A LINE THROUGH IT*******/
    var smallComp = "(Comp)".fontsize(3);
    result_div.innerHTML = wordUpgrade(computerChoice) + smallComp + " beats " + wordUpgrade(userChoice) + smallUser + ". You lose!"
        /*console.log(userScore)
          console.log(computerScore)*/
}

function wordUpgrade(word) {
    if (word === "r") return "ROCK";
    if (word === "p") return "PAPER";
    return "SCISSORS"
}

function tie() {
    console.log("draww")

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            break;

    }

};


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    });

    paper_div.addEventListener('click', function() {
        game("p");
    })


    scissors_div.addEventListener('click', function() {
        game("s");
    })

}

main()