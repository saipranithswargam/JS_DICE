
var randomNumber1=Math.floor(Math.random() * 6)+1;
var randomDiceImg="dice" + randomNumber1 + ".png";
var randomImageSoruce="images/" + randomDiceImg;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSoruce);
var randomNumber2=Math.floor(Math.random() * 6)+1;
var randomDiceImg2="dice" + randomNumber2 + ".png";
var randomImageSoruce2="images/" + randomDiceImg2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSoruce2);
if(randomNumber1>randomNumber2){
    document.querySelector("h2").textContent="🚩Player1 wins"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h2").textContent="Player2 wins🚩"
    
}
else{
    document.querySelector("h2").textContent="Draw!!"

}




