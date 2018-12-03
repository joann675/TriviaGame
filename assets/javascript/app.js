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
    var unanswered = 0;
    var timeInBetween;
    var currentQuestion = 1;



    // Start button is clicked - show first question
    $("#startButton").on("click", function () {
        console.log("In onClick for start button")
        $("#startButton").remove();
        
        
        $("#timeLeft").text("Time Remaining: 30 seconds")
        $("#question").text(quizlist[0].question);
        $("#choicea").text(quizlist[0].choicea);
        $("#choiceb").text(quizlist[0].choiceb);
        $("#choicec").text(quizlist[0].choicec);
        $("#choiced").text(quizlist[0].choiced);
        currentAnswer = quizlist[0].answerTag;
        movieName = quizlist[0].answerValue;
        currentImg = quizlist[0].img;

        intervalId = setInterval(count, 1000);




    });

    // Start Over button is clicked - show first question
    $("#startOver").on("click", function () {
        console.log("In onClick for start Over")
        // Reset variables
        timeRemaining = 30;  
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        currentQuestion = 1;
        // Clear screen 
        $("#rightOrWrong").text("");
        $("#correctAnswers").text("");
        $("#incorrectAnswers").text("");
        $("#unAnswered").text("");
        $("#startOver").text("");

        $("#timeLeft").text("Time Remaining: 30 seconds")
        $("#question").text(quizlist[0].question);
        $("#choicea").text(quizlist[0].choicea);
        $("#choiceb").text(quizlist[0].choiceb);
        $("#choicec").text(quizlist[0].choicec);
        $("#choiced").text(quizlist[0].choiced);
        currentAnswer = quizlist[0].answerTag;
        movieName = quizlist[0].answerValue;
        currentImg = quizlist[0].img;

        intervalId = setInterval(count, 1000);




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
        $("#movieImage").attr("style", "width:320px;height:200px");
        timeInBetween = 5;
        intervalId = setInterval(delay, 1000);



    });


    function count() {


        timeRemaining--;
        $("#timeLeft").text("Time Remaining: " + timeRemaining + " seconds");
        if (timeRemaining === 0) {
            clearInterval(intervalId);
            unanswered++;
            $("#question").text("");
            $("#choicea").text("");
            $("#choiceb").text("");
            $("#choicec").text("");
            $("#choiced").text("");
            $("#rightOrWrong").text("Out of Time!");
            $("#showAnswer").text("The Correct Answer was: " + movieName);
            $("#movieImage").attr("src", currentImg);
            $("#movieImage").attr("alt", movieName);
            $("#movieImage").attr("style", "width:320px;height:200px");

            timeInBetween = 5;
            intervalId = setInterval(delay, 1000);

        }
    }

    function delay() {


        timeInBetween--;
        if (timeInBetween === 0) {
            clearInterval(intervalId);
            if (currentQuestion < 8)
                loadNextQuestion();
            else
                showScore();
        }

    }

    function loadNextQuestion() {

        // Clear screen
        $("#rightOrWrong").text("");
        $("#showAnswer").text("");
        $("#movieImage").attr("src", "");
        $("#movieImage").attr("alt", "");
        $("#movieImage").attr("style", "");
        // Reset timer
        timeRemaining = 30;
        // Show next question
        currentQuestion++;
        $("#timeLeft").text("Time Remaining: 30 seconds")
        $("#question").text(quizlist[currentQuestion - 1].question);
        $("#choicea").text(quizlist[currentQuestion - 1].choicea);
        $("#choiceb").text(quizlist[currentQuestion - 1].choiceb);
        $("#choicec").text(quizlist[currentQuestion - 1].choicec);
        $("#choiced").text(quizlist[currentQuestion - 1].choiced);
        currentAnswer = quizlist[currentQuestion - 1].answerTag;
        movieName = quizlist[currentQuestion - 1].answerValue;
        currentImg = quizlist[currentQuestion - 1].img;

        intervalId = setInterval(count, 1000);

    }

    function showScore() {
        // Clear screen

        $("#showAnswer").text("");
        $("#movieImage").attr("src", "");
        $("#movieImage").attr("alt", "");
        $("#movieImage").attr("style", "");
        $("#rightOrWrong").text("All done, here's how you did!");
        $("#correctAnswers").text("Correct Answers: " + correct);
        $("#incorrectAnswers").text("Incorrect Answers: " + incorrect);
        $("#unAnswered").text("Unanswered: " + unanswered);
        $("#startOver").text("Start Over?");

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
        var question2 = {
            question: "What was the name of Indiana Jones long lost son who appeared in the movie 'Indiana Jones and the Crystal Skull'?",
            choicea: "Ben Solo",
            choiceb: "Mutt Williams",
            choicec: "Short Round",
            choiced: "Henry Jones",
            answerTag: "choiceb",
            answerValue: "Mutt Williams",
            img: "assets/images/indiana-jones-and-the-kingdom-of-the-crystal-skull-harrison-ford-1108x0-c-default.jpg"

        };
        var question3 = {
            question: "What musical group is character 'Marty McFly' a member of in the Film 'Back to the Future'?",
            choicea: "The Pinheads",
            choiceb: "Figrin D’an and the Modal Nodes",
            choicec: "Steel Dragon",
            choiced: "Wyld Stallyns",
            answerTag: "choicea",
            answerValue: "The Pinheads",
            img: "assets/images/bttf_header.jpg"

        };
        var question4 = {
            question: "What is the character name of the main little boy who finds one of the five 'Golden Tickets' in the 1971 movie 'Willy Wonka & The Chocolate Factory'?",
            choicea: "Charlie Harper",
            choiceb: "Charlie Allnut",
            choicec: "Charlie McGee",
            choiced: "Charlie Bucket",
            answerTag: "choiced",
            answerValue: "Charlie Bucket",
            img: "assets/images/willie-wonka-and-the-chocolate-factory-gene-wilder-appreciation.jpg"

        }; var question5 = {
            question: "What planet was Star War's 'Han Solo' born on?",
            choicea: "Bespin",
            choiceb: "Yavin",
            choicec: "Naboo",
            choiced: "Corellia",
            answerTag: "choiced",
            answerValue: "Corellia",
            img: "assets/images/HanSolo.jpg"

        };
        var question6 = {
            question: "What is the name of Captain Jack Sparrow's ship?",
            choicea: "The Maurader",
            choiceb: "The Wyndlass",
            choicec: "The Black Pearl",
            choiced: "The Jolly Roger",
            answerTag: "choicec",
            answerValue: "The Black Pearl",
            img: "assets/images/Captain_Jack_Sparrow_on_the_Black_Pearl_1.jpg"

        };
        var question7 = {
            question: "Which fictional character enjoyed eating some liver, with fava beans and a nice chianti?",
            choicea: "Dr Victor Frankenstein",
            choiceb: "Dr Richard Kimble",
            choicec: "Dr Hannibal Lecter",
            choiced: "Dr Frasier Crane",
            answerTag: "choicec",
            answerValue: "Dr Hannibal Lecter",
            img: "assets/images/Hanniballecter.jpg"

        };
        var question8 = {
            question: "Who is the very 1st boxer that 'Rocky Balboa' beats in the film series 'Rocky'?",
            choicea: "Spider Rico",
            choiceb: "Apollo Creed",
            choicec: "Irish Danny Davis",
            choiced: "Terrible Terry Bollea",
            answerTag: "choicea",
            answerValue: "Spider Rico",
            img: "assets/images/Rocky.jpg"

        };
        quizlist.push(question1);
        quizlist.push(question2);
        quizlist.push(question3);
        quizlist.push(question4);
        quizlist.push(question5);
        quizlist.push(question6);
        quizlist.push(question7);
        quizlist.push(question8);

    }

});

