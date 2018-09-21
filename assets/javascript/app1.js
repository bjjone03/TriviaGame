function submitAnswers () {
    var total = 3;
    var score = 0;

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;

    for(i = 1; i <= total;i++){
        if(eval('q'+1) == null || eval('q'+i) == ""){
            alert("wrong answer");
            return false;
        }
    }

     var answers = ["a","b","c"];

     if(q1 == answers[0]) {
         score++; 
     }
     if(q2 == answers[1]) {
        score++; 
    }
    if(q3 == answers[2]) {
        score++; 
    }

    alert('You scored '+score' out of ' +total);
}

