const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const dots = document.querySelector('.dots');

arrowLeft.addEventListener('click',function(){
	console.log('flèche gauche')
});
arrowRight.addEventListener('click',function(){
	console.log('flèche droite')
});

function createBulletPoints(){
	for (var i=0; i<slides.length; i++){
		const dot = document.createElement('div');
		dots.appendChild(dot);
		dot.classList.add("dot");
	}
};

function selectedDot(){
	const selected = dots.firstElementChild;
	selected.classList.add("dot_selected");
};


createBulletPoints();
selectedDot();

function dotToRight(){
	const activeDot = document.querySelector(".dot_selected");
	let newDot = activeDot.nextElementSibling;
	if (activeDot != dots.lastElementChild){
		newDot = activeDot.nextElementSibling;
	}
	else {
		newDot = dots.firstElementChild;
	}
	newDot.classList.add("dot_selected");
	activeDot.classList.remove("dot_selected");
};
function dotToLeft(){
	const activeDot = document.querySelector(".dot_selected");
	const newDot = activeDot.previousElementSibling;
	activeDot.classList.remove("dot_selected");
	newDot.classList.add("dot_selected");
};

arrowRight.addEventListener('click', dotToRight);
arrowLeft.addEventListener('click', dotToLeft);
