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
	'what does HTML stand for?',
    'Hyper Text Makeup Language',
	'Hyper Text Markup Language',
	'Hyperlinks and Text Makeup Language',
	'Home Tool Markup Language',
	2,0
);
var q2 = new CQuiz
(
	'Choose the correct HTML element for the largest heading',
	'<pre>&lt;head&gt;</pre>',
	'<pre>&lt;heading&gt;</pre>',
	'<pre>&lt;h6&gt;</pre>',
	'<pre>&lt;h1&gt;</pre>',
	4,0
);
var q3 = new CQuiz
(
	'What is the correct HTML element for inserting a line break?',
	'<pre>&lt;lb&gt;</pre>',
	'<pre>&lt;break&gt;</pre>',
	'<pre>&lt;br&gt;</pre>',
	'<pre>&lt;hr&gt;</pre>',
	3,0
);
var q4 = new CQuiz
(
	'What is the correct HTML for adding a background color?',
	'<pre>&lt;background&gt;yellow&lt;/background&gt;</pre>',
	'<pre>&lt;body style="background-color: yellow;"&gt;</pre>',
	'<pre>&lt;body bg="yellow"&gt;</pre>',
	'<pre>&lt;bggt;yellow&lt;/bg&gt;</pre>',
	2,0
);
var q5 = new CQuiz
(
	'Choose the correct HTML element to define important text',
	'<pre>&lt;important&gt;</pre>',
	'<pre>&lt;strong&gt;</pre>',
	'<pre>&lt;b&gt;</pre>',
	'<pre>&lt;i&gt;</pre>',
	2,0
);
var q6 = new CQuiz
(
    'Choose the correct HTML element to define emphasized text',
    '<pre>&lt;i&gt;</pre>',
	'<pre>&lt;p&gt;</pre>',
	'<pre>&lt;em&gt;</pre>',
	'<pre>&lt;b&gt;</pre>',
	3,0
);
var q7 = new CQuiz
(
	'What is the correct HTML for creating a hyperlink?',
	'<pre>&lt;a&gt;https://www.youtube.com&lt;/a&gt;</pre>',
	'<pre>&lt;a url="https://www.youtube.com"&gt;youtube&lt;/a&gt;</pre>',
	'<pre>&lt;a href="https://www.youtube.com"&gt;youtube&lt;/a&gt;</pre>',
	'None of the above',
	3,0
);
var q8 = new CQuiz
(
	'Which of these elements are all <table> elements?',
	'<pre>&lt;table&gt;&lt;tr&gt;&lt;td&gt;',
	'<pre>&lt;table&gt;&lt;head&gt;&lt;body&gt;</pre>',
	'<pre>&lt;table&gt;&lt;thead&gt;&lt;foot&gt;</pre>',
	'<pre>&lt;table&gt;&lt;data&gt;</pre>',
	1,0
);
var q9 = new CQuiz
(
	'How can you make a numbered list?',
	'<pre>&lt;dl&gt;</pre>',
	'<pre>&lt;ul&gt;</pre>',
	'<pre>&lt;ol&gt;</pre>',
	'<pre>&lt;list&gt;</pre>',
	3,0
);
var q10 = new CQuiz
(
	'What is the correct HTML for making a checkbox?',
	'<pre>&lt;check&gt;</pre>',
	'<pre>&lt;input type="check"&gt;</pre>',
	'<pre>&lt;input type="checkbox"&gt;</pre>',
	'<pre>&lt;checkbox&gt;</pre>',
	3,0
);
var totQHtml = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];