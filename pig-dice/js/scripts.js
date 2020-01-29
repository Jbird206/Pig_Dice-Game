

// Generate random number

var min = parseInt(1);
var max = parseInt(7);
var random = Math.floor(Math.random()*(max - min) + min);












$(document).ready(function(){
    // $("#roll").click(function(){
    //     $("#currentRoll").text(`1`);
    // });
    // $("form#formOne").submit(function(event){
    //     event.preventDefault();
    //    //  Prints result
    //    var number = $("input#formOne").valueOf();
        
    //     var min = parseInt(1);
    //     var max = parseInt(7);
    //     var random = Math.floor(Math.random()*(max - min) + min);
    //     // prints total result(sum)
    //      $("#result").text(" " + sum + random);
    //     var sum = parseInt(0);
    //     for (var i= 0; i<=random; i++){
    //         if  (i>1 && i <7){
    //             sum+=i;
    //             console.log(i);
    //             console.log(sum);
    //         } else if (random === 1) {
    //             console.log(random);
    //             $(".alert").text("Player 2 turn");
    //             $(".alert").show();
    //             sum+=0;
               
    //             break;
                
    //          } 
    //     }
            
    //     $("#result").text(" " + sum);
    // });
//player 2 side
var currentTotal = 0;
var grandTotal = 0;
function sum(){
    return Math.floor(Math.random()*(7 - 1) + 1)
};

function totalScore() {
   return grandTotal + currentTotal;
}

    $("form#formTwo").submit(function(event) {
        // prevents from crashing app
        event.preventDefault();
            var roll = sum();
            console.log(roll)
        
            if (roll == 1) {
                console.log("Sorry end of turn")
                currentTotal = 0;
            } else {
                currentTotal += roll
                console.log("currentTotal:" + currentTotal)
            }
        
        $("#resultTwo").html('<br>' + " " + roll);
    });
    $("#holdTwo").click(function(event) {
        event.preventDefault();
        //console.log("grandTotal" + totalScore())
        $("#result2").text(totalScore()); 
    })
});

    