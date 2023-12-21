var body = document.firstElementChild;
var setImage1 = document.querySelector(".img1");
var setImage2 = document.querySelector(".img2");
var one2six1 = randomNumber1();
var one2six2 = randomNumber2();


body.onload=


image1Select(one2six1);
image2Select(one2six2);

if (one2six1-one2six2 > 0)
{ document.querySelector("h1").textContent = "🏆Player 1 Wins!";
}else if(one2six1-one2six2 < 0)
{ document.querySelector("h1").textContent = "Player 2 Wins!🏆";
}else{
    document.querySelector("h1").textContent = "It's a 🚫    draw!";
}

function refreshPage(){
    window.location.reload();
}
function randomNumber1 (){
    var x = Math.random();
    x = x*6;
    x = Math.floor(x);
    x++;
    return x;
}
function randomNumber2 (){
    var x = Math.random();
    x = x*6;
    x = Math.floor(x);
    x++;
    return x;
}


function image1Select (one2six){
   if (one2six === 1){ setImage1.setAttribute("src","./images/dice1.png");}
    else if (one2six === 2){    setImage1.setAttribute("src","./images/dice2.png");}
    else if (one2six === 3){    setImage1.setAttribute("src","./images/dice3.png");}
    else if (one2six === 4){    setImage1.setAttribute("src","./images/dice4.png");}
    else if (one2six === 5){    setImage1.setAttribute("src","./images/dice5.png");}
    else {    setImage1.setAttribute("src","./images/dice6.png");}
}

function image2Select (one2six){
    if (one2six === 1){ setImage2.setAttribute("src","./images/dice1.png");}
     else if (one2six === 2){    setImage2.setAttribute("src","./images/dice2.png");}
     else if (one2six === 3){    setImage2.setAttribute("src","./images/dice3.png");}
     else if (one2six === 4){    setImage2.setAttribute("src","./images/dice4.png");}
     else if (one2six === 5){    setImage2.setAttribute("src","./images/dice5.png");}
     else {    setImage2.setAttribute("src","./images/dice6.png");}
}

// function outcomeMessage (one2six1,one2six2){

//     if (one2six1 > one2six2){
//         document.querySelector("h1").textContent = "Player 1 Wins!";
//         else if (one2six1 < one2six2){
//             document.querySelector("h1").textContent = "Player 2 Wins!";
//         }else{
//             document.querySelector("h1").textContent = "It's a draw!";
//         }
//     }
// }