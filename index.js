var body = document.firstElementChild;
var setImage1 = document.querySelector(".diceCSS");
var setImage2 = document.querySelector(".dice2CSS");
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
   if (one2six === 1){ 
    document.querySelector("#five").classList.add("on");}
    else if (one2six === 2){
        document.querySelector("#two").classList.add("on");
        document.querySelector("#eight").classList.add("on");
    }else if (one2six === 3){
        document.querySelector("#two").classList.add("on");
        document.querySelector("#five").classList.add("on");
        document.querySelector("#eight").classList.add("on");
    }else if (one2six === 4){
        document.querySelector("#one").classList.add("on");
        document.querySelector("#three").classList.add("on");
        document.querySelector("#seven").classList.add("on");
        document.querySelector("#nine").classList.add("on");
    }
    else if (one2six === 5){
        document.querySelector("#one").classList.add("on");
        document.querySelector("#three").classList.add("on");
        document.querySelector("#five").classList.add("on");
        document.querySelector("#seven").classList.add("on");
        document.querySelector("#nine").classList.add("on");
    }
    else{
        document.querySelector("#one").classList.add("on");
        document.querySelector("#three").classList.add("on");
        document.querySelector("#four").classList.add("on");
        document.querySelector("#six").classList.add("on");
        document.querySelector("#seven").classList.add("on");
        document.querySelector("#nine").classList.add("on");
    }
}

function image2Select (one2six){
    if (one2six === 1){ 
        document.querySelector("#five2").classList.add("on");}
        else if (one2six === 2){
            document.querySelector("#two2").classList.add("on");
            document.querySelector("#eight2").classList.add("on");
        }else if (one2six === 3){
            document.querySelector("#two2").classList.add("on");
            document.querySelector("#five2").classList.add("on");
            document.querySelector("#eight2").classList.add("on");
        }else if (one2six === 4){
            document.querySelector("#one2").classList.add("on");
            document.querySelector("#three2").classList.add("on");
            document.querySelector("#seven2").classList.add("on");
            document.querySelector("#nine2").classList.add("on");
        }
        else if (one2six === 5){
            document.querySelector("#one2").classList.add("on");
            document.querySelector("#three2").classList.add("on");
            document.querySelector("#five2").classList.add("on");
            document.querySelector("#seven2").classList.add("on");
            document.querySelector("#nine2").classList.add("on");
        }
        else{
            document.querySelector("#one2").classList.add("on");
            document.querySelector("#three2").classList.add("on");
            document.querySelector("#four2").classList.add("on");
            document.querySelector("#six2").classList.add("on");
            document.querySelector("#seven2").classList.add("on");
            document.querySelector("#nine2").classList.add("on");
        }
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