// Definition of variables
var timeAllowed = 30;
var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredAnswers = 0;
var totalTime = 0;
var currentQuestion;
var currentAnswer;
var currentQuestionIndex = 0;
var displayConvertedTime;

 


// Definitions of objects which will be the basis of the game
var someSounds = {
	randomTimeOutAudio: new Audio('assets/audio/stanley.mp3'),
	basicEnder: new Audio('assets/audio/basic-ender.mp3'),
	amEnder: new Audio('assets/audio/am-ender.mp3'),
	expertEnder: new Audio('assets/audio/expert-ender.mp3')
}

var qOne = {
	question: '1.  Who is Michael Scott, "the worlds greatest boss," in real life?',
	choice1: "Antonio Banderas",
	choice2: 'Steve Carell',
	choice3: 'Keanu Reeves',
	choice4: 'Oprah Winfrey',
	answer: 'Steve Carell',
	sound: new Audio('assets/audio/best-boss.mp3'),
	starterImage: '<img src="assets/images/crazymichael.gif">',
	image: '<img src="assets/images/best-boss.jpg">', 
};
var qTwo = {
	question: '2.  The Office is filled with romances.  Which female in the office does Dwight have an ongoing relationship with thoughout the seasons?',
	choice1: 'Pam',
	choice2: 'Jan',
	choice3: 'Phyllis',
	choice4: 'Angela',
	answer: 'Angela',
	sound: new Audio('assets/audio/mose.mp3'),
	starterImage: '<img style="width:250px" src="assets/images/holly.jpg">',
	image: '<img src="assets/images/dwight-ang.gif">'
}
var qThree = {
	question: '3. How many seasons did the office air?',
	choice1: '2',
	choice2: '9',
	choice3: '8',
	choice4: '6',
	answer: '9',
	sound: new Audio('assets/audio/toby2.mp3'),
	starterImage: '<img  style="width:400px" src="assets/images/office-banner.jpeg">',
	image: '<img  style="width:400px" src="assets/images/full-crew.jpg">'
}
var qFour = {
	question: '4.  Which employee had a great rise to success very quickly in the company, only to be jailed for fraud?',
	choice1: 'Ryan',
	choice2: 'Oscar',
	choice3: 'Meredith',
	choice4: 'Packer',
	answer: 'Ryan',
	sound: new Audio('assets/audio/ryan.mp3'),
	starterImage: '<img style="width:250px" src= "assets/images/wiseworms.jpg">',
	image: '<img src="assets/images/ryan.gif">'
}
var qFive = {
	question: '5.  When Andy lets Dwight install a doomsday device measuring the amount of mistakes everyone makes, how many mistakes does he allow before sending out damning emails to the CEO and everyone losing their job?',
	choice1: '3',
	choice2: '1',
	choice3: '5',
	choice4: '10',
	answer: '5',
	sound: new Audio('assets/audio/weapons2.mp3'),
	starterImage: '<img style="width:200px" src="assets/images/dwight.png">',
	image: '<img src="assets/images/killer-dwight.gif">'
}
var qSix = {
	question: '6.  The entire warehouse crew quits, sending Darryl into a spiral of despair after this happens:',
	choice1: 'Settlement from a lawsuit.',
	choice2: 'One of the employees robs a bank.',
	choice3: 'They win the lottery.',
	choice4: 'All of the above.',
	answer: 'They win the lottery.',
	sound: new Audio('assets/audio/going.mp3'),
	starterImage: '<img src="assets/images/dance.gif">',
	image: '<img src="assets/images/lotto.gif">'
}
var qSeven = {
	question: '7.  Michael makes the mistake of beginning a sexual relationship with his immediate superior in what destination vacation location?',
	choice1: 'Bahamas',
	choice2: 'Pensacola',
	choice3: 'Cayman Islands',
	choice4: 'Jamaica',
	answer: 'Jamaica',
	sound: new Audio('assets/audio/punish.mp3'),
	starterImage: '<img style="width:200px" src="assets/images/jamaica.gif">',
	image: '<img src="assets/images/jamaica-jan.jpg">'
}
var qEight = {
	question: '8.  Michael gets fed up with being treated poorly by Dunder Mifflin and decides to break off and start his own paper company. What did he name his company?',
	choice1: 'Big Red Paper Company',
	choice2: 'Mama Juju Paper Company',
	choice3: 'Michael Scott Paper Company',
	choice4: 'Collective Vision Exclusive Paper',
	answer: 'Michael Scott Paper Company',
	sound: new Audio('assets/audio/merhit.mp3'),
	starterImage: '<img  style="width:250px" src="assets/images/car-hit.jpg">',
	image: '<img  style="width:450px" src="assets/images/merhit.jpg">'
}
var qNine = {
	question: "9.  What is the famed Michael Scott's most well-known catchphrase?",
	choice1: "Please don't call me Shirley.",
	choice2: 'Waaaaaaaaaassssssuuuuppppppp',
	choice3: "That's what she said!",
	choice4: "Can't we all get along?",
	answer: "That's what she said!",
	sound: new Audio('assets/audio/she-said.mp3'),
	starterImage: '<img  style="width:200px" src="assets/images/swag.jpg">',
	image: '<img src="assets/images/she-said.jpg">'
}
var qTen = {
	question: '10.  Michael Scott wrote a film that was eventually put together and shown on the show. It starred everyone from the office.  What was this film called?',
	choice1: 'Somehow I Manage',
	choice2: 'Tales From the Crypt Office Style',
	choice3: 'Shoe La La',
	choice4: 'Threat Level Midnight',
	answer: 'Threat Level Midnight',
	sound: new Audio('assets/audio/scarn.mp3'),
	starterImage: '<img  style="width:200px" src="assets/images/estimate-me.jpg">',
	image: '<img style="width:450px" src="assets/images/midnight.png">'
}
var qEleven = {
	question: '11.  Fill in the blank:  To raise spirits amongst the employees Michael arranges for everyone to go on a ________ cruise.',
	choice1: 'nice',
	choice2: 'booze',
	choice3: 'land',
	choice4: 'cheap',
	answer: 'booze',
	sound: new Audio('assets/audio/boss.mp3'),
	starterImage: '<img src="assets/images/michael-dance.gif">',
	image: '<img src="assets/images/booze-cruise.jpg">'
}
var qTwelve = {
	question: '12.  While attending the annual "Paper Convention" Michael and Dwight trying to impress Jim do what in their hotel room?',
	choice1: 'Set up a dart board',
	choice2: 'Buy a ton of booze and mixers',
	choice3: 'Set up a black light',
	choice4: 'All of the above',
	answer: 'All of the above',
	sound: new Audio('assets/audio/urine.mp3'),
	starterImage: '<img style="width:175px" src="assets/images/date-mike.jpg">',
	image: '<img src="assets/images/urine.jpg">'
}
var qThirteen = {
	question: '13.  Once Michael leaves the show there are several bosses that replace him.  What famous film star replaced him first?',
	choice1: 'Jim Carey',
	choice2: 'Will Ferrell',
	choice3: 'Will Smith',
	choice4: 'Machete',
	answer: 'Will Ferrell',
	sound: new Audio('assets/audio/hoe.mp3'),
	starterImage: '<img src="assets/images/you-didnt-answer.gif">',
	image: '<img  style="width:450px" src="assets/images/will.jpg">'
}
var qFourteen = {
	question: '14.  Which character cannot stop obsessing over his Ivy League college singing group at Cornell?',
	choice1: 'Oscar',
	choice2: 'Dwight',
	choice3: 'Andy',
	choice4: 'Pete',
	answer: 'Andy',
	sound: new Audio('assets/audio/cornell.mp3'),
	starterImage: '<img  style="width:450px" src="assets/images/cornelld.gif">',
	image: '<img  style="width:450px" src="assets/images/cornell.jpg">'
}
var qFifteen = {
	question: '15.  After making the mistake of signing a contract with Angela to have a child, Dwight realizes he could owe Angela $30,000 plus he comes up with what idea to settle?',
	choice1: 'Free Beet Wine',
	choice2: 'His Weapon Collection',
	choice3: 'Sexual Punch Card',
	choice4: "Gives land on his farm",
	answer: 'Sexual Punch Card',
	sound: new Audio('assets/audio/specimen.mp3'),
	starterImage: '<img  style="width:200px" src="assets/images/dwight-imitator.jpg">',
	image: '<img src="assets/images/that-face.jpg">'
}
// Question array to iterate over
var listOfQuestions = [qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen, qEleven, qTwelve, qThirteen, qFourteen, qFifteen];
// I will have a function that displays each Question in the same format.
function showQuestion (x) {
	$("#timerRow").removeClass("fontChangeOne");
	currentQuestion = x;
	timeAllowed = 30;
	counter = setInterval(timer, 1000);
	$("#imageRow").html(currentQuestion.starterImage);
	$("#questionRow").html(currentQuestion.question);
	$("#timerRow").html(timer());
	$("#choicesRow").append("<p class='choice'>" + currentQuestion.choice1 + "</p>");
	$("#choicesRow").append('<p class="choice">' + currentQuestion.choice2 + '</p>');
	$("#choicesRow").append('<p class="choice">' + currentQuestion.choice3 + '</p>');
	$("#choicesRow").append('<p class="choice">' + currentQuestion.choice4 + '</p>');
	// $(".choice").mouseover(function() {
	// 	$(this).addclass("activeAnswer");
	// 	console.log(this);
	// }), function() {
	// 	$(this).removeClass("activeAnswer");
	// };
	$("#choicesRow p").on("click", function(){
		currentAnswer = $(this).html();
		console.log(currentAnswer);
		checkAnswer(currentAnswer);
	});
};
// Function that checks answer for accuracy
function checkAnswer(choice) {
	// debugger;
	if (choice === currentQuestion.answer) {
		totalTime = totalTime + (30 - timeAllowed);
		console.log(totalTime);
		currentQuestionIndex++;
		correctAnswers++;
		$("#choicesRow").empty();
		$("#timerRow").empty();
		clearInterval(counter);
		console.log(currentQuestion.image);
		$("#imageRow").html(currentQuestion.image);
		currentQuestion.sound.play();
		$("#questionRow").html("<p class='textBigger'>You got it!</p> " + "<p>" + currentQuestion.answer + " was the accurate answer. </p><p> Let's move on.</p>");
		areWeDoneYet ();
	
	}
	else {
		totalTime = totalTime + (30 - timeAllowed);
		console.log(totalTime);
		currentQuestionIndex++;
		wrongAnswers++;
		$("#choicesRow").empty();
		$("#timerRow").empty();
		clearInterval(counter);
		$("#imageRow").html(currentQuestion.image);
		currentQuestion.sound.play();
		$("#questionRow").html("<p class='textBigger'>You missed it!</p> " + "<p>" + currentQuestion.answer + " was the accurate answer. </p><p> Let's move on.</p>");
		areWeDoneYet ();
		
	};
};
// Controls the timer
function timer () {
	timeAllowed--;
	$("#timerRow").html("<p>Time Remaining: " + timeAllowed + "</p>");
	if (timeAllowed === 0) {
		clearInterval(counter);
		unansweredAnswers++;
		timeOut ();
	}
	else if (timeAllowed <= 10) {
		$("#timerRow").addClass("fontChangeOne");
	};
	};
// Timeout Funtion
function timeOut() {
	totalTime = totalTime + (30 - timeAllowed);
		console.log(totalTime);
	currentQuestionIndex++;
	$("#imageRow").html("<img src = 'assets/images/stanley.jpg'>");
	someSounds.randomTimeOutAudio.play();
	$("#questionRow").html("<p class='textBigger'>Sorry-You didn't answer at ALL! You should have at least guessed...</p><p>That's ok we will keep moving on.</p>");
	$("#timerRow").empty();
	$("#choicesRow").empty();
	time = 30;
	areWeDoneYet ();
	

};
// Determines if we should keep going or end the game
function areWeDoneYet () {
	if (currentQuestionIndex === (listOfQuestions.length)) {
		setTimeout (function() {allDone()}, 6500);	
	}
	else {
		setTimeout(function () { 
			showQuestion(listOfQuestions[currentQuestionIndex])}, 6500);
	};
};;
// What happens when game is over
function allDone () {
	displayConvertedTime = timeConverter(totalTime);
	$("#backG").append("<audio class='startUpAudio' src='assets/audio/startupoffice.mp3' autoplay></audio>");
	$("#imageRow").empty();
	$("#questionRow").html('<p class="enderText">Wrong ' + wrongAnswers + '</p><p class="enderText">Correct ' + correctAnswers + '</p><p class="enderText">Unanswered ' + unansweredAnswers + '</p>' + '<p>You spent ' +  displayConvertedTime + ' total on this quiz answering the questions</p>');
	whatIsYourGrade();
	var resetButton = $("#choicesRow").append("<div class='button'><button class='btn-danger btn-xxl'>RESTART GAME</button></div>");
	$(resetButton).one("click", function () {
		$(".startUpAudio").attr("src", "");
		$("#choicesRow").empty();
		correctAnswers = 0;
		wrongAnswers = 0;
		unansweredAnswers = 0;
		currentQuestionIndex = 0;
		showQuestion(listOfQuestions[currentQuestionIndex]);
	});
};
  function timeConverter (t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
// This will add a little fun
function whatIsYourGrade () {
	if ((wrongAnswers < 4) && (correctAnswers > 9) && (totalTime < 121)) { 
		$("#choicesRow").append("<h1 style='text-align:center'>You have EXPERT Office Knowledge<br>CONGRATS!</h1>");
		someSounds.expertEnder.play();
	}
	else if ((wrongAnswers < 6) && (correctAnswers > 6) && (totalTime < 181)) {
		$("#choicesRow").append("<h1 style='text-align:center'>You have AMATEUR Office Knowledge<br>Keep Playing.</h1>");
		someSounds.amEnder.play();
	}
	else {
		$("#choicesRow").append("<h1 style='text-align:center'>You have BASIC Office Knowledge<br>Keep playing to increase your level.</h1>");
		someSounds.basicEnder.play();
	}
};

$(document).ready(function(){
	var topTitle = $("<h1 class='introTitle'>the Office Trivia Game</h1>");
	$("#firstRow").prepend(topTitle);
	//This will control autoplay of Theme once you get to site.
	$("#backG").append("<audio class='startUpAudio' src='assets/audio/startupoffice.mp3' autoplay></audio>");
	$("#questionRow").append("<p>Press the start game button to begin.  Trivia questions will be displayed.  Click the answer you believe to be correct.  You will be alerted if your answer was correct or incorrect and then the game will move you on to the next question. At the end the game will let you know how many questions you got right and wrong and how much time you spent overall answering questions on the quiz.  Based on a combination of accuracy and time you will be awarded an Office Trivia Skill Level.  Enjoy!</p>");
	var starterButton = $("#firstRow").append("<div class='button'><button class='btn-warning btn-lg'>START GAME</button></div>");
	$(starterButton).one("click", function () {
		$(".startUpAudio").attr("src", "");
		$("button").remove();
		$(".introTitle").empty();
		showQuestion(listOfQuestions[currentQuestionIndex]);
	});
	});
