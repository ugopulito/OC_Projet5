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

//Create dots and define first as selected
const dots = document.querySelector('.dots');
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

//Change selected dot
function moveDotToRight(){
	const activeDot = document.querySelector(".dot_selected");
	let newDot = activeDot.nextElementSibling;
	if (activeDot == dots.lastElementChild){
		newDot = dots.firstElementChild;
	}
	newDot.classList.add("dot_selected");
	activeDot.classList.remove("dot_selected");
};
function moveDotToLeft(){
	const activeDot = document.querySelector(".dot_selected");
	let newDot = activeDot.previousElementSibling;
	if (activeDot == dots.firstElementChild){
		newDot = dots.lastElementChild;
	}
	newDot.classList.add("dot_selected");
	activeDot.classList.remove("dot_selected");
};

//Change banner image
let image = document.querySelector("#banner :nth-child(3)");
let text = document.querySelector("#banner p")
let index = 0;
function bannerToRight(){
	if (index >= 0 && index < slides.length-1){
		index++;
	}
	else{
		index = 0;
	}
	let nextImage = "./assets/images/slideshow/" + slides[index].image
	let nextText = slides[index].tagLine;
	image.setAttribute("src", nextImage);
	text.innerHTML = nextText;
};
function bannerToLeft(){
	if (index > 0){
		index-- ;
	}
	else{
		index = slides.length-1;
	}
	let prevImage = "./assets/images/slideshow/" + slides[index].image
	let prevText = slides[index].tagLine;
	image.setAttribute("src", prevImage);
	text.innerHTML = prevText;
};

//Call functions on click
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener('click', function() {
	console.log('Clic sur la flèche droite');
	moveDotToRight();
	bannerToRight();
});
arrowLeft.addEventListener('click', function() {
	console.log('Clic sur la flèche gauche');
	moveDotToLeft();
	bannerToLeft();
});