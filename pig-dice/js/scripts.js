
$(document).ready(function(){
//Generate random number

// var min = parseInt(1);
// var max = parseInt(7);
// var random = Math.floor(Math.random()*(max - min) + min);

var currentTotal1 = 0
var grandTotal1= 0
function sumOne(){
   return Math.floor(Math.random()*(7 - 1) + 1)
};

function totalScore1(){
    return grandTotal1 + currentTotal1;
};

$("form#formOne").submit(function(event){
    event.preventDefault();
    var roll1 = sumOne();
    console.log(roll1)
    $(".loss1").hide();

        if (roll1 == 1){
            currentTotal1= 0
            $(".loss1").show();
            $(".turn2").show();
            $(".Turn1").hide();
            $(".loss2").hide();
        } else {
            currentTotal1 += roll1
        }
        console.log(roll1+ " roll2")
        $("#resultOne").html('<br>' + " " + roll1);
});

$("#holdOne").click(function(event){
    event.preventDefault();
    $("#result1").text(totalScore1());
})




//player 2 side//////////////////////////////////
var currentTotal = 0;
var grandTotal = 0;
function sum(){
    return Math.floor(Math.random()*(7 - 1) + 1)
};

function totalScore() {
   return grandTotal + currentTotal;
};


    $("form#formTwo").submit(function(event) {
        // prevents from crashing app
        event.preventDefault();
            var roll = sum();
            console.log(roll)
            $(".loss2").hide();
        
            if (roll == 1) {
                console.log("Sorry end of turn")
                currentTotal = 0;
                $(".Turn1").show();
                $(".loss2").show();
                $(".turn2").hide();
                $(".loss1").hide();
            } else {
                currentTotal += roll
                console.log("currentTotal:" + currentTotal)
            }
        
        $("#resultTwo").html('<br>' + " " + roll);
    });
    $("#holdTwo").click(function(event) {
        event.preventDefault();
        // callback function: total score
        $("#result2").text(totalScore()); 
    })


})
////////////////////////////   AI    /////////////////////////////////////////
var currentTotalAI = 0;
var grandTotalAI = 0;
function sumAI(){
    return Math.floor(Math.random()*(14 - 2) + 2)
};

function totalScoreAI() {
   return grandTotalAI + currentTotalAI;
};


    $("form#formAI").submit(function(event) {
        event.preventDefault();
            var rollAI = sumAI();
            console.log(rollAI)
            $(".lossAI").hide();
        
            if (rollAI == 1) {
                console.log("Terminated")
                currentTotalAI = 0;
                // $(".Turn1").show();
                // $(".loss2").show();
                // $(".turn2").hide();
                // $(".loss1").hide();
            } else {
                currentTotalAI += rollAI
                console.log("currentTotal:" + currentTotalAI)
            }
        
        $("#resultAI").html('<br>' + " " + rollAI);
    });
    $("#holdAI").click(function(event) {
        event.preventDefault();
        // callback function: total score
        $("#resultAI").text(totalScore()); 
    })



