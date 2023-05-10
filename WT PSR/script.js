var theForm = document.getElementById('theForm');
var theQuiz = document.getElementById('theQuiz');
var submitBtn = document.getElementById('submit');
var err = document.getElementById('err');
var errH = document.getElementById('errH');
var i;
var totQ;

document.getElementById('select').style.display = 'none';

function startQuiz(temp) 
{
	theForm.style.display = 'none';
	theQuiz.style.display = 'block';
	if(temp == 'totQHtml' )
	{
		totQ = totQHtml;
	}
	else if(temp == 'totQJs' )
	{
		totQ = totQJs;
	}
	else if(temp == 'totQCss' )
	{
		totQ = totQCss;
	}
	steps(totQ.length);
	randomQ();
}

var queDone = 0;
var userAns = [];
var queDoneArr = [];

function steps(quizLength)
{
	var mainStepDiv = document.getElementById('steps');
	for (var i = 0; i < quizLength; i++) 
	{
		var span = document.createElement('span');
		span.className = 'step';
		mainStepDiv.appendChild(span);
	}
}

var p = document.getElementById('que');
var O1 = document.getElementById('opt1');
var O2 = document.getElementById('opt2');
var O3 = document.getElementById('opt3');
var O4 = document.getElementById('opt4');

function randomQ() 
{
	var thisAsked = false;
	var x = Math.floor(Math.random() * totQ.length);
	while ((totQ[x].asked === 0) == true) 
	{
		thisAsked = true;
		totQ[x].asked = 1;
		queDoneArr.unshift(x);
		queDone = ++queDone;
		p.innerHTML = totQ[x].question;
		O1.nextElementSibling.innerHTML = totQ[x].opt1;
		O2.nextElementSibling.innerHTML = totQ[x].opt2;
		O3.nextElementSibling.innerHTML = totQ[x].opt3;
		O4.nextElementSibling.innerHTML = totQ[x].opt4;
	}
	if (!thisAsked) 
	{
		if (queDone != totQ.length)
			randomQ();
	}
}

function next() 
{
	if (!validateForm()) return false;
	topping(queDone);
	if (queDone == totQ.length)
	{
		theQuiz.style.display = 'none';
		document.getElementById('theResult').style.display = 'block';
		calcResult();
		return false;
	}
	randomQ();
}

var chkBox = document.getElementsByClassName('custom-control-input');

function validateForm() 
{
	var valid = false;
	for (var i = 0; i < chkBox.length; i++) 
	{
		if (chkBox[i].checked) {
			valid = true;
			userAns.unshift(chkBox[i].value);
			chkBox[i].checked = false;
			nextBtn.setAttribute('disabled', 'disabled');
			break;
		}
	}
	if (!valid) 
	{
		alert('Please Select Any Option...');
		nextBtn.setAttribute('disabled', 'disabled');
	}
	if (valid)
		document.getElementsByClassName('step')[queDone - 1].className += ' finish';
	return valid;
}

var nextBtn = document.getElementById('next-button');
function enableBtn(i) 
{
	if (i.checked) nextBtn.removeAttribute('disabled');
	else nextBtn.setAttribute('disabled', 'disabled');
}

function topping(n) 
{
	if (n == totQ.length - 1)
		document.getElementById('next-button').innerHTML = 'Submit';
	else if (n == totQ.length) 
	{
		document.getElementById('next-button').innerHTML = 'No Questions';
		nextBtn.setAttribute('disabled', 'disabled');
	} 
	else 
		document.getElementById('next-button').innerHTML = 'Next';
	fixStepIndicator(n);
}

function fixStepIndicator(n) 
{
	var i,
		x = document.getElementsByClassName('step');
	for (i = 0; i < x.length; i++) 
	{
		x[i].className = x[i].className.replace(' active', '');
	}
	x[n - 1].className += ' active';
}

function calcResult() 
{
	var ca = 0;
	for (var i = 0; i < totQ.length; i++) 
	{
		var a = queDoneArr[i];
		if (userAns[i] == totQ[a].answer) 
		{
			ca = ca + 1;
		}
	}
	var percentage = (ca / totQ.length) * 100;
	showResult(percentage, ca);
}

var resultCircle = document.getElementById('resultCircle');
var resultFb = document.getElementById('resultFb');
var correctAns = document.getElementById('correctAns');
var quizCompleted = false;
var RColor;

function showResult(percentage, ca) 
{
	if (percentage == 100) 
	{
		RColor = 'green';
		resultFb.innerHTML = 'Great!!! You scored maximum!';
		correctAns.innerHTML = 'Correct Answers: ' + ca;
	} 
	else if (percentage >= 80) 
	{
		RColor = 'teal';
		resultFb.innerHTML = 'Good work! You passed';
		correctAns.innerHTML = 'Correct Answers: ' + ca;
	} 
	else if (percentage >= 60) 
	{
		RColor = 'blue';
		resultFb.innerHTML = 'Cool! You passsed';
		correctAns.innerHTML = 'Correct Answers: ' + ca;
	} 
	else if (percentage >= 50) 
	{
		RColor = 'orange';
		resultFb.innerHTML = 'You can do better!';
		correctAns.innerHTML = 'Correct Answers: ' + ca;
	} 
	else 
	{
		RColor = 'red';
		resultFb.innerHTML = 'Retake test and try to score maximum';
		correctAns.innerHTML = 'Correct Answers: ' + ca;
	}

	localStorage.setItem('percentage', percentage);
	localStorage.setItem('ca', ca);
	quizCompleted = true;

	var path =
		'<svg viewbox="0 0 36 36" class="circular-chart ' + RColor + '"> \
    <path class="circle-bg" \ d="M18 2.0845 \ a 15.9155 15.9155 0 0 1 0 31.831 \
    a 15.9155 15.9155 0 0 1 0 -31.831" \ /> \ <path class="circle" \ stroke-dasharray="' +
	percentage + ', 100" \ d="M18 2.0845 \ a 15.9155 15.9155 0 0 1 0 31.831 \ a 15.9155 15.9155 0 0 1 0 -31.831" \ /> \
    <text x="19" y="21" id="percentage">' + percentage + '%</text> \ </svg>';
	resultCircle.innerHTML = path;
}

function retakeQuiz() 
{
	localStorage.removeItem('percentage');
	localStorage.removeItem('ca');
	location.reload(true);
}