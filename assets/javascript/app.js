// javascript for trivia game

// Assigning variables 
var count = 0;
var number = 30;
var numberEnd = 5;
var countDown;
var value;
var holder1;
var holder2;
var holder3;
var questions = {
    qaList: [{
        question: "Question #1: Commonly used data types DO NOT include:",
        answer1: "strings",
        answer2: "alerts",
        answer3: "boolean"
    }, {
        question: "Question #2: The CSS syntax to style all elements to appear bold is:",
        answer1: "p {font-weight: bold;}",
        answer2: "p {font: bold;}",
        answer3: "p (font weight = bold);"
    }, {
        question: "Question #3: A primary reason for using CSS Frameworks like Bootstrap is to:",
        answer1: "to cheat in UCB Bootcamp",
        answer2: "make websites perform faster",
        answer3: "save significant time building a website"
    }, {
        question: "Question #4: ___refers to the display being used to view a website.",
        answer1: "Viewport",
        answer2: "Browser",
        answer3: "Google Chrome"
    }]
};
var answers = [
    questions.qaList[0].answer2,
    questions.qaList[1].answer1,
    questions.qaList[2].answer3,
    questions.qaList[3].answer1
];
var correct = "You're correct!";



// Click to start Trivia timer or trivia
$("#start").click(startGame);

// Click listener for answer1
$("#answer-holder1").on("click", function () {
    holder1 = $(this).val();
    console.log($(this).val());
});

// Click listener for answer2
$("#answer-holder2").on("click", function () {
    holder2 = $(this).val(); 
    console.log($(this).val());
});

// Click listener for answer3
$("#answer-holder3").on("click", function () {
    holder3 = $(this).val();
    console.log($(this).val());
});




// Function for starting the game
function startGame() {
    showQuestion(0);
    numCountDown030();
};

function numCountDown030() {
    countDown = setInterval(decrement030, 1000);
};

function decrement030() {
    number--;
    $("#show-number").html("<h2>" + number + "<h2>");

    if (holder2 === "2") {
        number = 30;
        correctAnswer(0);
        numCountDown05();
    } else if (number === 0) {
        outOfTime();
        number = 30;
        showAnswer(0);
        numCountDown05();
    } else if (holder1 === "1") {
        outOfTime();
        number = 30;
        showAnswer(0);
        numCountDown05();
    } else if (holder3 === "3") {
        outOfTime();
        number = 30;
        showAnswer(0);
        numCountDown05();
    }
};

function numCountDown05() {
    countDown = setInterval(decrement05, 1000);
};

function decrement05() {
    numberEnd--;
    $("#show-number").html("<h2>" + numberEnd + "<h2>");
    if (numberEnd === 0) {
        outOfTime();
        numberEnd = 5;
        secondQuetion();
    }
};

function secondQuetion() {
    showQuestion(1);
    numCountDown130();
};

function numCountDown130() {
    countDown = setInterval(decrement130, 1000);
};

function decrement130() {
    number--;
    $("#show-number").html("<h2>" + number + "<h2>");

    if (holder1 === "1") {
        number = 30;
        correctAnswer(1);
        numCountDown15();
    } else if (number === 0) {
        outOfTime();
        number = 30;
        showAnswer(1);
        numCountDown15();
    } else if (holder2 === "2") {
        outOfTime();
        number = 30;
        showAnswer(1);
        numCountDown15();
    } else if (holder3 === "3") {
        outOfTime();
        number = 30;
        showAnswer(1);
        numCountDown15();
    }
};

function numCountDown15() {
    countDown = setInterval(decrement15, 1000);
};

function decrement15() {
    numberEnd--;
    $("#show-number").html("<h2>" + numberEnd + "<h2>");
    if (numberEnd === 0) {
        outOfTime();
        numberEnd = 5;
        thirdQuetion();
    }
};

function thirdQuetion() {
    showQuestion(2);
    numCountDown230();
}

function numCountDown230() {
    countDown = setInterval(decrement230, 1000);
};

function decrement230() {
    number--;
    $("#show-number").html("<h2>" + number + "<h2>");
    
    if (holder3 === "3") {
        number = 30;
        correctAnswer(2);
        numCountDown25();
    } else if (number === 0) {
        outOfTime();
        number = 30;
        showAnswer(2);
        numCountDown25();
    } else if (holder2 === "2") {
        outOfTime();
        number = 30;
        showAnswer(2);
        numCountDown25();
    } else if (holder1 === "1") {
        outOfTime();
        number = 30;
        showAnswer(2);
        numCountDown25();
    }
};

function numCountDown25() {
    countDown = setInterval(decrement25, 1000);
};

function decrement25() {
    numberEnd--;
    $("#show-number").html("<h2>" + numberEnd + "<h2>");
    if (numberEnd === 0) {
        outOfTime();
        numberEnd = 5;
        fourthQuetion();
    }
};

function fourthQuetion() {
    showQuestion(3);
    numCountDown330();
}

function numCountDown330() {
    countDown = setInterval(decrement330, 1000);
};

function decrement330() {
    number--;
    $("#show-number").html("<h2>" + number + "<h2>");
    
    if (holder1 === "1") {
        number = 30;
        correctAnswer(3);
        numCountDown05();
    } else if (number === 0) {
        outOfTime();
        number = 30;
        showAnswer(3);
        numCountDown05();
    } else if (holder2 === "2") {
        outOfTime();
        number = 30;
        showAnswer(3);
        numCountDown05();
    } else if (holder3 === "3") {
        outOfTime();
        number = 30;
        showAnswer(3);
        numCountDown05();
    }
};

function totalScore() {
    $("#question-holder").text("Your score is bad");
    $("#answer-holder1").hide("Question #2");
    $("#answer-holder2").hide("Question #3");
    $("#answer-holder3").hide("Question #4");
}




// Functions that are being called back:
function outOfTime() {
    clearInterval(countDown);
};

function showQuestion(index) {
    $("#answer-holder1").show();
    $("#answer-holder2").show();
    $("#answer-holder3").show();
    $("#question-holder").text(questions.qaList[index].question);
    $("#answer-holder1").text(questions.qaList[index].answer1);
    $("#answer-holder2").text(questions.qaList[index].answer2);
    $("#answer-holder3").text(questions.qaList[index].answer3);
};

function showAnswer(index) {
    $("#answer-holder1").text("The answer is: " + answers[index]);
    $("#answer-holder2").hide("_");
    $("#answer-holder3").hide("_");
};

function correctAnswer(index) {
    $("#answer-holder1").text("You are correct! " + answers[index]);
    $("#answer-holder2").hide("_");
    $("#answer-holder3").hide("_");
}




// Debugging purposes
console.log(showQuestion);
console.log(count);
