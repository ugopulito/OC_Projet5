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
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector('.dots');
let image = document.querySelector("#banner :nth-child(3)");
let index = 0;
let text = document.querySelector("#banner p")


//Create dots and define first dot as selected
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

//Change banner image and text
function updateBanner(){
	let newImage = "./assets/images/slideshow/" + slides[index].image
	let newText = slides[index].tagLine;
	image.setAttribute("src", newImage);
	text.innerHTML = newText;
}
function bannerToRight(){
	if (index >= 0 && index < slides.length-1){
		index++;
	}
	else{
		index = 0;
	}
	updateBanner();
};
function bannerToLeft(){
	if (index > 0){
		index-- ;
	}
	else{
		index = slides.length-1;
	}
	updateBanner();
};

//Script and functions call
createBulletPoints();
selectedDot();
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