// var body = document.firstElementChild;
// var setImage1 = document.querySelector(".diceCSS");
// var setImage2 = document.querySelector(".dice2CSS");
// var one2six1 = randomNumber1();
// var one2six2 = randomNumber2();
var p1name = "Player 1";
var p2name = "Player 2";

for(var i=0;i<2;i++){
    document.querySelectorAll(".diceCSS")[i].setAttribute("draggable","true");
    document.querySelectorAll(".diceCSS")[i].addEventListener("dragend", rollDice);
}



//document.querySelector(".diceCSS").addEventListener("dragend", rollDice);

document.querySelector("button").addEventListener("click", rollDice);
    

function rollDice (){    
    for(var i = 0; i<18; i++){
        document.querySelectorAll(".diceCSS div")[i].classList.remove("on");
    };
    
    
        var x = Math.random();
        x = x*6;
        x = Math.floor(x);
        x++;
        
    
        var y = Math.random();
        y = y*6;
        y = Math.floor(y);
        y++;
       
        
          


    if (x-y > 0)
    { document.querySelector("h1").textContent = "🏆"+p1name.slice(0,10)+" Wins!";
    }else if(x-y < 0)
    { document.querySelector("h1").textContent = p2name.slice(0,10)+" Wins!🏆";
    }else{
        document.querySelector("h1").textContent = "It's a 🚫    draw!";
    }


    image1Select(x);
    image2Select(y);

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


};



document.querySelector(".p1").addEventListener("click", function(){
    p1name = prompt("Enter name");
    document.querySelector(".p1").innerHTML=p1name.slice(0,25).toLowerCase();
});

document.querySelector(".p2").addEventListener("click", function(){
    p2name = prompt("Enter name");
    document.querySelector(".p2").innerHTML=p2name.slice(0,25).toLowerCase();
});

    
