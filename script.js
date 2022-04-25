/*alert('testing if linked')*/

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
/*^ the "_span" is a good format to label variables for identifying things later on;
 - those with the underscore are DOM variabes kept in the HTML*/
/*Need to understand "getElementBy" in more detail */
/** */
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/*^ Above is a case of storing variable referene points to they can be reused 32min;
 - makes things more efficient*/

function game(userChoice) {
    console.log(" something   " + userChoice)

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