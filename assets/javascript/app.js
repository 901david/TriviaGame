// Definition of variables
var timeAllowed = 20;
var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredAnswers = 0;
var totalTime = 0;
var currentQuestion;
var currentAnswer;
var currentQuestionIndex = 0;


// Definitions of objects which will be the basis of the game

var qOne = {
	question: 'Who is Michael Scott, "the worlds greatest boss," in real life?',
	choice1: "Antonio Banderas",
	choice2: 'Steve Carell',
	choice3: 'Keanu Reeves',
	choice4: 'Oprah Winfrey',
	answer: 'Steve Carell',
	sound: new Audio('assets/audio/best-boss.mp3'),
	starterImage: '<img src="assets/images/crazymichael.gif">',
	image: '<img src="assets/images/best-boss.jpg">'
};
var qTwo = {
	question: 'The Office is filled with romances.  Which female in the office does Dwight have an ongoing relationship with thoughout the seasons?',
	choice1: 'Pam',
	choice2: 'Jan',
	choice3: 'Phyllis',
	choice4: 'Angela',
	answer: 'Angela',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/holly.jpg">',
	image: '<img src="assets/images/dwight-ang.gif">'
}
var qThree = {
	question: 'How many seasons did the office air?',
	choice1: '2',
	choice2: '9',
	choice3: '8',
	choice4: '6',
	answer: '9',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/office-banner.jpeg">',
	image: '<img src="assets/images/full-crew.jpg">'
}
var qFour = {
	question: 'Which employee had a great rise to success very quickly in the company, only to be jailed for fraud?',
	choice1: 'Ryan',
	choice2: 'Oscar',
	choice3: 'Meredith',
	choice4: 'Packer',
	answer: 'Ryan',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src= "assets/images/wiseworms.jpg">',
	image: '<img src="assets/images/ryan.gif">'
}
var qFive = {
	question: 'When Andy lets Dwight install a doomsday device measuring the amount of mistakes everyone makes, how many mistakes does he allow before sending out damning emails to the CEO and everyone losing their job?',
	choice1: '3',
	choice2: '1',
	choice3: '5',
	choice4: '10',
	answer: '5',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/killer-dwight.gif">',
	image: '<img src="assets/images/dwight.png">'
}
var qSix = {
	question: 'The entire warehouse crew quits, sending Darryl into a spiral of despair after this happens:',
	choice1: 'An Suv crashes into the warehouse and they get a settlement.',
	choice2: 'One of the employees robs a bank.',
	choice3: 'They win the lottery.',
	choice4: 'All of the above.',
	answer: 'They win the lottery.',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/dance.gif">',
	image: '<img src="assets/images/lotto.gif">'
}
var qSeven = {
	question: 'Michael makes the mistake of beginning a sexual relationship with his immediate superior in what destination vacation location?',
	choice1: 'Bahamas',
	choice2: 'Pensacola',
	choice3: 'Cayman Islands',
	choice4: 'Jamaica',
	answer: 'Jamaica',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/jamaica-jan.jpg">',
	image: '<img src="assets/images/jamaica.gif">'
}
var qEight = {
	question: 'Michael gets fed up with being treated poorly by Dunder Mifflin and decides to break off and start his own paper company. What did he name his company?',
	choice1: 'Big Red Paper Company',
	choice2: 'Mama Juju Paper Company',
	choice3: 'Michael Scott Paper Company',
	choice4: 'Collective Vision Exclusive Paper',
	answer: 'Michael Scott Paper Company',
	sound: new Audio('../audio/#.mp3'),
	starterImage: '<img src="assets/images/car-hit.jpg">',
	image: '<img src="assets/images/britney.jpg">'
}
var qNine = {
	question: "What is the famed Michael Scott's most well-known catchphrase?",
	choice1: "I will take care of that, and please don't call me Shirley.",
	choice2: 'Waaaaaaaaaassssssssssuuuuuuuuuppppppp',
	choice3: "That's what she said!",
	choice4: "Can't we all get along?",
	answer: "That's what she said!",
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/swag.jpg">',
	image: '<img src="assets/images/she-said.jpg">'
}
var qTen = {
	question: 'Michael Scott wrote a film that was eventually put together and shown on the show. It starred everyone from the office.  What was this film called?',
	choice1: 'Somehow I Manage',
	choice2: 'Tales From the Crypt Office Style',
	choice3: 'Shoe La La',
	choice4: 'Threat Level Midnight',
	answer: 'Threat Level Midnight',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/estimate-me.jpg">',
	image: '<img src="assets/images/midnight.png">'
}
var qEleven = {
	question: 'Fill in the blank:  To raise spirits amongst the employees Michael arranges for everyone to go on a ________ cruise.',
	choice1: 'nice',
	choice2: 'booze',
	choice3: 'land',
	choice4: 'cheap',
	answer: 'booze',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/michael-dance.gif">',
	image: '<img src="assets/images/booze-cruise.jpg">'
}
var qTwelve = {
	question: 'While attending the annual "Paper Convention" Michael and Dwight trying to impress Jim do what in their hotel room?',
	choice1: 'Set up a dart board',
	choice2: 'Buy a ton of booze and mixers',
	choice3: 'Set up a black light',
	choice4: 'All of the above',
	answer: 'All of the above',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/burntfoot.jpg">',
	image: '<img src="assets/images/urine.jpg">'
}
var qThirteen = {
	question: 'Once Michael leaves the show there are several bosses that replace him.  What famous film star replaced him first?',
	choice1: 'Jim Carey',
	choice2: 'Will Ferrell',
	choice3: 'Will Smith',
	choice4: 'Machete',
	answer: 'Will Ferrell',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/stanley.jpg">',
	image: '<img src="assets/images/will.jpg">'
}
var qFourteen = {
	question: 'Which character cannot stop obsessing over his Ivy League college singing group at Cornell?',
	choice1: 'Oscar',
	choice2: 'Dwight',
	choice3: 'Andy',
	choice4: 'Pete',
	answer: 'Andy',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/cornelld.gif">',
	image: '<img src="assets/images/cornell.jpg">'
}
var qFifteen = {
	question: 'After making the mistake of signing a contract with Angela to have a child, then realizing he had feelings for another woman Dwight and Angela enter mediation to determine the damages if the contract is broken.  Once Dwight realizes he could owe Angela $30,000 plus he comes up with what idea to settle?',
	choice1: 'Free Beet Wine',
	choice2: 'Gives her his idea for a Hay Heaven',
	choice3: 'Sexual Punch Card',
	choice4: "Gives her some of his grandmother's farm",
	answer: 'Sexual punch card',
	sound: new Audio('assets/audio/#.mp3'),
	starterImage: '<img src="assets/images/that-face.jpg">',
	image: '<img src="assets/images/dwight-imitator.jpg">'
}
// Question array to iterate over
var listOfQuestions = [qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen, qEleven, qTwelve, qThirteen, qFourteen, qFifteen];
// Array of images to randomly display on the intro
var randomImages = [qOne.starterImage, qTwo.starterImage, qThree.starterImage, qFour.starterImage, qFive.starterImage, qSix.starterImage, qSeven.starterImage, qEight.starterImage, qNine.starterImage, qTen.starterImage, qEleven.starterImage, qTwelve.starterImage, qThirteen.starterImage, qFourteen.starterImage, qFifteen.starterImage, qOne.image, qTwo.image, qThree.image, qFour.image, qFive.image, qSix.image, qSeven.image, qEight.image, qNine.image, qTen.image, qEleven.image, qTwelve.image, qThirteen.image, qFourteen.image, qFifteen.image];
// I will have a function that displays each Question in the same format.
function showQuestion (x) {
	$("#timerRow").removeClass("fontChangeOne");
	currentQuestion = x;
	timeAllowed = 20;
	counter = setInterval(timer, 1000);
	$("#imageRow").html(currentQuestion.starterImage);
	$("#questionRow").html(currentQuestion.question);
	$("#timerRow").html(timer());
	$("#choicesRow").append("<p>" + currentQuestion.choice1 + "</p>");
	$("#choicesRow").append('<p>' + currentQuestion.choice2 + '</p>');
	$("#choicesRow").append('<p>' + currentQuestion.choice3 + '</p>');
	$("#choicesRow").append('<p>' + currentQuestion.choice4 + '</p>');
	$("#choicesRow p").on("click", function(){
		currentAnswer = $(this).html();
		console.log(currentAnswer);
		checkAnswer(currentAnswer);
	});
}
// Function that checks answer for accuracy
function checkAnswer(choice) {
	// debugger;
	if (choice === currentQuestion.answer) {
		currentQuestionIndex++;
		correctAnswers++;
		$("#choicesRow").empty();
		$("#timerRow").empty();
		clearInterval(counter);
		console.log(currentQuestion.image);
		$("#imageRow").html(currentQuestion.image);
		currentQuestion.sound.play();
		$("#questionRow").html("<p>You got it!</p> " + "<p>" + currentQuestion.answer + " was the accurate answer. </p><p> Let's move on.</p>");
		areWeDoneYet ();
	
	}
	else {
		currentQuestionIndex++;
		wrongAnswers++;
		$("#choicesRow").empty();
		$("#timerRow").empty();
		clearInterval(counter);
		$("#imageRow").html(currentQuestion.image);
		currentQuestion.sound.play();
		$("#questionRow").html("<p>You missed it!</p> " + "<p>" + currentQuestion.answer + " was the accurate answer. </p><p> Let's move on.</p>");
		areWeDoneYet ();
		
	}
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
	}
	}
// Timeout Funtion
function timeOut() {
	currentQuestionIndex++;
	$("#imageRow").html("<img src = 'assets/images/you-didnt-answer.gif'>");
	$("#questionRow").html("<p>Sorry-You didn't answer at ALL! You should have at least guessed...</p><p>That's ok we will keep moving on.</p>");
	$("#timerRow").empty();
	$("#choicesRow").empty();
	time = 20;
	areWeDoneYet ();
	

};
// Determines if we should keep going or end the game
function areWeDoneYet () {
	if (currentQuestionIndex === (listOfQuestions.length)) {
		setTimeout (function() {allDone()}, 5000);	
	}
	else {
		setTimeout(function () { 
			showQuestion(listOfQuestions[currentQuestionIndex])}, 5000);
	}
}
// What happens when game is over
function allDone () {
	console.log("Wrong " + wrongAnswers);
	console.log("Correct " + correctAnswers);
	console.log("Unanswered " + unansweredAnswers);
	
}

$(document).ready(function(){
	var topTitle = $("<h1 class='introTitle'>The Office Triva Game</h1>");
	$("#firstRow").prepend(topTitle);
	//This will control autoplay of Theme once you get to site.
	$("#backG").append("<audio class='startUpAudio' src='assets/audio/startupoffice.mp3' autoplay></audio>")
	var starterButton = $("#firstRow").append("<div class='button'><button class='btn-warning btn-lg'>START GAME</button></div>");
	$(starterButton).one("click", function () {
		$(".startUpAudio").attr("src", "");
		$("button").remove();
		$(".introTitle").empty();

		showQuestion(listOfQuestions[currentQuestionIndex]);
	});
	
	
	});
