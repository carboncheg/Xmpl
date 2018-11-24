'use strict';

// Слайдер

var images = [
	"https://ic.pics.livejournal.com/postav/49386233/1191363/1191363_900.jpg",
	"https://ic.pics.livejournal.com/postav/49386233/1191550/1191550_900.jpg",
	"http://www.nat-geo.ru/upload/iblock/dd4/dd42589154351babd0d158244b4341cd.jpg"
	];
var num = 0;

function next() {
	var slider = document.getElementById('slider');
	num++;
	if(num >= images.length) {
		num = 0;
	}
	slider.src = images[num];
}

function prev() {
	var slider = document.getElementById('slider');
	num--;
	if(num < 0) {
		num = images.length-1;
	}
	slider.src = images[num];
}


// Нажатие кнопки Registration

function showModalReg() {

	var modalBg = document.createElement('div'); // Создание div'а под bg и его появление
	modalBg.id = 'modal_bg';
	document.body.appendChild(modalBg);

	var modalReg = document.getElementById('modal'); // Появление модалки
	modalReg.style.transform = 'scale(1)';
	modalReg.style.transitionDuration = '2000ms';
	modalReg.style.display = 'block';

	modalBg.onclick = function() {
		modalBg.parentNode.removeChild(modalBg); // Скрываем bg кликом по нему
		modalReg.style.display = 'none';
		return false;
	};

	document.onkeydown = function(e) { // Скрываем bg нажатием на escape
    if (e.keyCode == 27) { // escape
		modalReg.style.display = 'none';
		modalBg.style.display = 'none';
		return false;
    }
  };
}

      
// Добавить плавности в модалку. 


/* var Sergei = {
	profession: 'web-developer',
	age: 29,
	goodman: true};
confirm('Sergei is ' + Sergei['profession'] + '!');
confirm('Sergei is ' + Sergei.age + ' years old.');
confirm("Sergei is goodman & this yesis " + Sergei.goodman + '.');


var Sergei = [29,'web-developer',true];
confirm('Sergei is ' + Sergei[1] + '!');
confirm('Sergei is ' + Sergei[0] + ' years old.');
confirm("Sergei is goodman & this is " + Sergei[2] + '.'); */

/* let access = prompt('Вам есть 18 лет?', 'Да');
	{
		console.log(typeof(undefined));
	} */


let incr = 0,
	decr = 0;

console.log(incr++);
console.log(decr--);

console.log(2017%13);
console.log(true == 'true');
console.log(2 === '2');


let isChecked = false,
	isClose = false;

console.log(isChecked || !isClose);

let a = 8;
console.log(a);