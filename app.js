let btnYes = document.querySelector('.yes');
let btnNo = document.querySelector('.no');
let picture = document.querySelector('.picture');
let msg = document.querySelector('.message');

// When click the btnYes and btnNo button will remove and the picture and text will change
btnYes.addEventListener('click', function () {
	btnYes.classList.add('hide');
	btnNo.classList.add('hide');
	msg.textContent = 'Yey! I LOVE YOU!';
	picture.classList.replace('picture', 'pictureYes');
	picture.classList.replace('pictureNo', 'pictureYes');
});

let width = 100;
let height = 100;
//When click the btnYES will increase the width and height each click and the picture will change
btnNo.addEventListener('click', function () {
	btnYes.style.width = `${width}px`;
	btnYes.style.height = `${height}px`;
	width += 25;
	width += 25;
	picture.classList.replace('picture', 'pictureNo');
});
