//Исходные данные по слайдеру(const)
const sliderConent = document.querySelectorAll('.slider_content'),
	  sliderLine = document.querySelector('.slider_line'),
	  sliderDots = document.querySelectorAll('.slider_dots'),
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
	console.log(sliderCount)
	if(sliderCount >= sliderConent.length) sliderCount = 0;
	chekSlider()
	rollSlide()
	thisSlide(sliderCount)
}


// Перелистывает слайд назада 

function prevSlide () {

	sliderCount--;

	if(sliderCount < 0 && sliderConent !== 0) sliderCount = sliderConent.length - 1;
	chekSlider()
	rollSlide()
	thisSlide(sliderCount)
}


// Задает шаг перемещение

function rollSlide () {
	sliderLine.style.transform =  `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывет какой слайд по счету активный 
function thisSlide (index) {
	sliderDots.forEach(item => item.classList.remove('active_dots'));
	sliderDots[index].classList.add('active_dots')
}

sliderDots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		sliderCount = index;
		rollSlide();
		thisSlide(sliderCount);
		chekSlider()
	})
}) 

function chekSlider () {
	if (sliderCount > 0 || sliderCount == 5) {
		sliderPrevBtn.removeAttribute('disabled')
	} else {
		sliderPrevBtn.setAttribute('disabled', 'disabled')
	}
}

chekSlider();
