let btnYes = document.querySelector('.yes');
let btnNo = document.querySelector('.no');
let picture = document.querySelector('.picture');
let msg = document.querySelector('.message');
btnYes.addEventListener('click', function () {
	btnYes.classList.add('hide');
	btnNo.classList.add('hide');
	msg.textContent = 'Yey! I LOVE YOU!';
	picture.classList.replace('picture', 'pictureYes');
	picture.classList.replace('pictureNo', 'pictureYes');
});

let width = 100;
let height = 40;
btnNo.addEventListener('click', function () {
	btnYes.style.width = `${width}px`;
	btnYes.style.height = `${height}px`;
	width += 25;
	width += 25;
	picture.classList.replace('picture', 'pictureNo');
});
