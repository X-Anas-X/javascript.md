
function createScore(){
    //input

    var mark = prompt("Enter your score");
    var score
    //processing
    if (mark>15 && mark <= 20){
        score='Excellent!';
    
    }
    else if (mark>10 && mark<=15){
        score='Good!';

    }
    else if (mark>0 && mark <= 8){
        score='Fail.';
    }
    //output
    return score;
}
var score = createScore();

document.write('<h3>'+score+'</h3>');



    