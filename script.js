// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1
let msg = document.getElementById('q1-text');
console.log(msg.textContent);

// Q 2
let q2 = document.getElementById('q2-text');
q2.textContent = 'ムーニーマン';

// Q 3
let q3 = document.getElementById('q3-text');
q3.style.color = 'red';

// Q 4 (難)
// 「for of」を使います。

let q4 = document.querySelectorAll('.q4-text');
for (text of q4) {
	text.style.color = 'pink';
}

// Q 5
let q5 = document.querySelectorAll('.q5-text');
for (text of q5) {
	text.style.background = 'yellow';
}

// Q 6
// function changeColor(){
// 	document.querySelector('#q6-text').style.color = 'red';
// }

// let q6 = document.querySelector('#q6-text');
// 	q6.addEventListener('click',function(){
// 	this.style.color = 'red';
// });

document.querySelector('#q6-text').addEventListener('click',function(){
	this.style.color = 'red';
});

// Q 7
let q7 = document.querySelector('#q7-text');
	q7.addEventListener('mouseover',function(){
	this.style.background = 'lightgray';
	this.style.color = 'blue';
});

// Q 8
let q8 = document.querySelector('#q8-text');
	q8.addEventListener('mouseover',function(){
	this.style.background = 'lightgray';
});
	q8.addEventListener('mouseleave',function(){
	this.style.background = '';
});


// Q 9
let q9 = document.querySelector('#q9-btn');
	q9.addEventListener('click',function(){
		// 入力した文字を取得したいので用意した変数
	let input =document.querySelector('#q9-input');
	// 文字を表示したいので用意した変数
	let result =document.querySelector('#q9-result');

	result.textContent = input.value;
});


// Q 10
let q10 = document.querySelector('.q10-btn');
	q10.addEventListener('click',function(){
	var input = document.querySelector('#q10-input');
	var result = document.querySelector('#q10-result');

	if(input.value < 20) {
		result.textContent = '20歳未満の方の利用は禁止です。';
	}else if(input.value > 60) {
		result.textContent = '60歳以降の人は半額です';
	}else {
		result.textContent = input.value;
	}
});
