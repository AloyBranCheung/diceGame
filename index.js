function buttonClick(){
    function randomGen(){
        var randomNumber = Math.floor((Math.random() * 6) + 1)
        return randomNumber
    }
    
    randomNumber1 = randomGen()
    randomNumber2 = randomGen()
    
    // RandomImg Source
    img1 = "images/dice" + randomNumber1 + ".png"
    img2 = "images/dice" + randomNumber2 + ".png"
    
    // Player 1 Img
    document.querySelector(".img1").setAttribute("src", img1);
    
    // Player 2 Img
    document.querySelector(".img2").setAttribute("src", img2);
    
    // Win Conditions
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!"
    } else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Wins!"
    } else if (randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "It's a tie!"
    }    
}

