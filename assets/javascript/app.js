$(document).ready(function () {

    var quizlist = [];
    loadTriviaQuestions();

    //  Variable that will hold our setInterval that runs the stopwatch
    var intervalId;
    var timeRemaining = 30;
    var currentAnswer;
    var movieName;
    var currentImg;
    var correct = 0;
    var incorrect = 0;
    var timeInBetween = 5;



    // Start button is clicked - show first question
    $("#startButton").on("click", function () {
        console.log("In onClick for start button")
        $("#startButton").remove();
        for (var i = 0; i < quizlist.length; i++) {
            $("#timeLeft").text("Time Remaining: 30 seconds")
            $("#question").text(quizlist[i].question);
            $("#choicea").text(quizlist[i].choicea);
            $("#choiceb").text(quizlist[i].choiceb);
            $("#choicec").text(quizlist[i].choicec);
            $("#choiced").text(quizlist[i].choiced);
            currentAnswer = quizlist[i].answerTag;
            movieName = quizlist[i].answerValue;
            currentImg = quizlist[i].img;

            intervalId = setInterval(count, 1000);
        }



    });

    $(".choice").on("click", function () {
        clearInterval(intervalId);
        var chosen = $(this).attr("id");
        console.log("You picked " + chosen);
        $("#question").text("");
        $("#choicea").text("");
        $("#choiceb").text("");
        $("#choicec").text("");
        $("#choiced").text("");
        if (chosen === currentAnswer) {
            console.log("Correct answer");
            correct++;
            $("#rightOrWrong").text("Correct!");

        }
        else {
            console.log("Wrong answer");
            incorrect++;
            $("#rightOrWrong").text("Nope!");
            $("#showAnswer").text("The Correct Answer was: " + movieName);
        }
        $("#movieImage").attr("src", currentImg);
        $("#movieImage").attr("alt", movieName);
        $("#movieImage").attr("style","width:320px;height:200px");
        intervalId = setInterval(delay, 1000);


        
    });


    function count() {


        timeRemaining--;
        $("#timeLeft").text("Time Remaining: " + timeRemaining + " seconds");
    }

    function delay() {


        timeInBetween--;
        
    }

    function loadTriviaQuestions() {
        // Create objects for questions and push them onto the quizlist
        var question1 = {
            question: "In what 2012 film do we see Maj. William Cage (Tom Cruise) thrown into a time loop, killing the same Aliens over and over again?",
            choicea: "Edge of Tomorrow",
            choiceb: "Oblivion",
            choicec: "Mission Impossible - Ghost Protocol",
            choiced: "Jack Reacher",
            answerTag: "choicea",
            answerValue: "Edge of Tomorrow",
            img: "assets/images/hero_EdgeofTomorrow-2014-1.jpg"
            
        };
        quizlist.push(question1);

    }

});

