//Исходные данные по слайдеру(const)
const sliderConent = document.querySelectorAll('.slider_content'),
	  sliderLine = document.querySelector('.slider_line'),
	  slider_dots = document.querySelector('.slider_dots'),
	  sliderNextBtn = document.querySelector('.slider_btn-next'),
	  sliderPrevBtn = document.querySelector('.slider_btn-prev');


let sliderCount = 0,
	sliderWidth;

//Адаптивность слайдера 
window.addEventListener('resize', showSlide)

//Кнопки листание слайдера 
sliderNextBtn.addEventListener('click', nextSlide)
sliderPrevBtn.addEventListener('click', prevSlide)

//Задает нужную ширину картинки и sliderLine
function showSlide () {
	sliderWidth = document.querySelector('.slider').offsetWidth;
	sliderLine.style.width = sliderWidth * sliderConent.length + 'px';
	
	sliderConent.forEach(item => item.style.width = sliderWidth + 'px')
	rollSlide
}
showSlide()


//Перелеситывает слайдер вперед
function nextSlide () {
	sliderCount ++;
	if(sliderCount >= sliderConent.length) sliderCount = 0;
	rollSlide()
}


// Перелистывает слайд назада 

function prevSlide () {
	sliderCount--;
	if(sliderCount < 0) sliderCount = sliderConent.length - 1;
	rollSlide()
}


// Задает шаг перемещение

function rollSlide () {
	sliderLine.style.transform =  `translateX(${-sliderCount * sliderWidth}px)`;
}