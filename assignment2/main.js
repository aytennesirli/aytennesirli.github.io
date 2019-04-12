var score = 0;
var max = 120;
var min = 19;
var win = 0;
var lost = 0;

var text = document.getElementById("target-score").innerText = Math.ceil(Math.random() * (max - min + 1) + min);

$(document).ready(function (e) {
    function variables() {
        var blue = Math.ceil(Math.random() * (19 - 3 + 1) + 1);
        var green = Math.ceil(Math.random() * (19 - 3 + 1) + 1);
        var red = Math.ceil(Math.random() * (19 - 3 + 1) + 1);
        var yellow = Math.ceil(Math.random() * (19 - 3 + 1) + 1);
        $("#red").attr("alt", red);
        $("#blue").attr("alt", blue);
        $("#green").attr("alt", green);
        $("#yellow").attr("alt", yellow); 
    };
variables();
    $("img").click(function(e){
       score+= Number($(this).attr("alt"));
       $("#your-score").text(score);
       if(score==text){
           win++;
           score=0;
           $("#your-score").text(score);
           $("#win-count").text(win);
           variables();
       }
       else if(score>text){
           lost++;
           score=0;
           $("#your-score").text(score);
           $("#loss-count").text(lost);
           variables();
       }
       
        
    
    
    
    });







})


