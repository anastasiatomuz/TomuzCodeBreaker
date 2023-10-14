const button = document.getElementById("guess-button"); //button when user clicks to guess
const triesLeft = document.getElementById("tries"); //p element that diaplys number of turns left
const hint = document.getElementById("hint"); // paragraph element that displays  ahint if the user guessed too high/low
const last = document.getElementById("last");//p element that displays the last number guessed
const myform = document.getElementById("myform");


const result = document.getElementById("result");
const endMessage = document.getElementById("congrat-message");//addiotional information displayed when user won or ran out of turns


const ranNum = Math.floor(Math.random() * 999); //creates a random number (0-999) for the code
let tries = 7;//user has 7 tries


//initialize digits to be set later on
let dig1 = 0;
let dig2 = 0;
let dig3 = 0;
let userDigits = 0;

function runGame(){
    //gets the value for each digit user puts in
    dig1 = document.getElementById("digit1").value;
    dig2 = document.getElementById("digit2").value;
    dig3 = document.getElementById("digit3").value;

    //convert user digits to a 3-digit number
    userDigits = dig1*100 + dig2*10 + dig3*1;
    last.innerHTML = `Last number guessed: ${userDigits}`;



    //updates tries
    tries -= 1;
    triesLeft.innerHTML = `Tries left: ${tries}`;
   


    //updates hints and checks if user won 
    if (userDigits > ranNum){
        hint.innerHTML = "Hint: Your number is too high";
    } else if (userDigits < ranNum){
        hint.innerHTML = "Hint: Your number is too low";
    } else if (userDigits == ranNum){
        userWon();
    }

    //game over if ran out of tries
    if (tries == 0){
        userLost();
    }
}


function userWon(){
    
    hint.innerHTML = "No hint available; your guess was correct";
    result.innerHTML = "You have cracked the code!";
    endMessage.innerHTML = `You guessed the code in ${tries} tries. Continue your successful life as a cat burglar!`;
    myform.style.visibility = "hidden";
    document.body.style.backgroundImage = "url('openVault.jpg')";
}


function userLost(){
    myform.style.visibility = "hidden";
    result.innerHTML ="You lost!";
    endMessage.innerHTML = `You ran out of time.The correct code was ${ranNum}.It's time to retire from being a cat burglar :(`;
}



