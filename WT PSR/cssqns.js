function CQuiz(que, o1, o2, o3, o4, ans, d) 
{
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
}
var q1 = new CQuiz
(
	'What does CSS stand for?',
    'Colorful Stylesheets',
	'Cascading Style Sheets',
	'Creative Style Sheets',
	'Computer Style Sheets',
	2,0
);
var q2 = new CQuiz
(
	'What is the correct HTML for referring to an external style sheet?',
	'<pre>&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;</pre>',
	'<pre>&lt;style src="style.css"&gt;</pre>',
	'<pre>&lt;stylesheet&gt;style.css&lt;stylesheet/&gt;</pre>',
	'None',
	1,0
);
var q3 = new CQuiz
(
	'Which HTML attribute is used to define inline styles?',
	'font',
	'styles',
	'style',
	'css',
	3,0
);
var q4 = new CQuiz
(
	'Which is the correct CSS syntax?',
    'body {color = black;}',
	'{body : color = black;}',
	'body : color = black;',
	'body {color: black;}',
	4,0
);
var q5 = new CQuiz
(
	'How do you insert a comment in a CSS file?',
	'// this is a comment //',
	'// this is comment',
	'<pre>&lt;!-- this is a comment --&gt;</pre>',
	'/* this is a comment */',
	4,0
);
var q6 = new CQuiz
(
    'Which property is used to change the background color?',
    'color',
	'bg-color',
	'background-color',
	'bg',
	3,0
);
var q7 = new CQuiz
(
	'How do you display a border like this: <br> The top border = 10 pixels <br> The bottom border = 5 pixels <br> The left border = 20 pixels <br> The right border = 1pixel?',
	'border-width : 5px 20px 10px 1px;',
	'border-width : 10px 5px 20px 1px;',
	'border-width : 10px 20px 5px 1px;',
	'border-width : 10px 1px 5px 20px;',
	4,0
);
var q8 = new CQuiz
(
    'How do you select an element with id "demo"?',
    'demo',
    '#demo',
    '.demo',
    '*demo',
    2,0
);
var q9 = new CQuiz
(
	'How do you select elements with class name "test"?',
	'.test',
	'#test',
	'*test',
	'test',
	1,0
);
var q10 = new CQuiz
(
	'What is the default value of the position property?',
	'absolute',
	'relative',
	'static',
	'fixed',
	3,0
);
var totQCss = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];