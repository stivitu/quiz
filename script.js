//slider

let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);}
 
//slider  
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
	
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; }

//question engine variables
var randomNumber1 = Math.floor(Math.random() * 3) + 1;
var randomNumber2 = Math.floor(Math.random() * 3) + 1;
var randomNumber3 = Math.floor(Math.random() * 3) + 1;
var randomNumber4 = Math.floor(Math.random() * 3) + 1;

document.getElementById("sp1").innerText= randomNumber1;
document.getElementById("sp2").innerText= randomNumber2;
document.getElementById("sp3").innerText= randomNumber3;
document.getElementById("sp4").innerText= randomNumber4;

//answer engine variables
var rightAnswer1=["cloud", "green", "sky"];
var rightAnswer2= ["spring", "rock","water"];
var rightAnswer3= ["daisy", "grass", "flower"];
var rightAnswer4= ["trees", "yellow", "sky"];


var userAnswerGlobal=["true","true","true","true"];
var userAnswer=[];

var audio = new Audio("sound/jedna.mp3");
var audio1 = new Audio("sound/woosh.ogg");

//spremanje odabranih odgovora 1, 2, 3, 4
function check11(){
let answer= event.srcElement.value;
let buttonId= event.srcElement.id;

addEventListener("on click", audio.play());
console.log(buttonId);
//userAnswer.push(answer);
if (!userAnswer.includes(answer)) {
  //only runs if value not in array
  userAnswer.push(answer);
};
console.log(userAnswer);
document.getElementById("pick1").textContent= userAnswer;
const element = document.getElementById(buttonId);

//event.srcElement.disabled= true;
};

function check12(){
let answer= event.srcElement.value;
let buttonId= event.srcElement.id;

addEventListener("on click", audio.play());
console.log(buttonId);
if (!userAnswer.includes(answer)) {
 //only runs if value not in array
  userAnswer.push(answer);
};
console.log(userAnswer);

document.getElementById("pick2").textContent= userAnswer;
//event.srcElement.disabled= true;
};
function check13(){
let answer= event.srcElement.value;
let buttonId= event.srcElement.id;

addEventListener("on click", audio.play());
console.log(buttonId);
if (!userAnswer.includes(answer)) {
  //only runs if value not in array
  userAnswer.push(answer);
};
console.log(userAnswer);

document.getElementById("pick3").textContent= userAnswer;
//event.srcElement.disabled= true;
};
function check14(){
let answer= event.srcElement.value;
let buttonId= event.srcElement.id;

addEventListener("on click", audio.play());
console.log(buttonId);
if (!userAnswer.includes(answer)) {
  //only runs if value not in array
  userAnswer.push(answer);
};
console.log(userAnswer);

document.getElementById("pick4").textContent= userAnswer;
//event.srcElement.disabled= true;
};
//odgovor nije odabran, previše odgovora
function check21(){

if(userAnswer.length == 0)
{alert("Odaberite odgovor!")
	plusSlides(-1);}
else if(userAnswer.length > randomNumber1){
	alert("Odabrali ste previše odgovora, pokušajte ponovo!");
	plusSlides(-1);
	userAnswer.length=0;
	document.getElementById("pick1").textContent= null;
	
	}
else if(userAnswer.length < randomNumber1){
	alert("Odaberite, potreban broj odgovora, pokušajte ponovo!");
	plusSlides(-1);
	userAnswer.length=0;
    document.getElementById("pick1").textContent= null;	
    
	};};

function check22(){
	
if(userAnswer.length == 0)
{alert("Odaberite odgovor!")
		plusSlides(-1);}	
else if(userAnswer.length > randomNumber2){
	alert("Odabrali ste previše odgovora, pokušajte ponovo!");
	plusSlides(-1);
	userAnswer.length=0;
	document.getElementById("pick2").textContent= null;
	
	}
else if(userAnswer.length < randomNumber2){
	alert("Odaberite, potreban broj odgovora, pokušajte ponovo!");
	plusSlides(-1);
	userAnswer.length=0;
	document.getElementById("pick2").textContent= null;
	
	};
	};

function check23(){	
if(userAnswer.length == 0)
{alert("Odaberite odgovor!")
	plusSlides(-1);}
else if(userAnswer.length > randomNumber3){	
alert("Odabrali ste previše odgovora, pokušajte ponovo!");
	plusSlides(-1);
	userAnswer.length=0;
	document.getElementById("pick3").textContent= null;
	}	
else if(userAnswer.length < randomNumber3){
	alert("Odaberite, potreban broj odgovora, pokušajte ponovo!");
	plusSlides(-1);
	userAnswer.length=0;
	document.getElementById("pick3").textContent= null;
	};};

function check24(){
if(userAnswer.length== 0)
{alert("Odaberite odgovor!")
	plusSlides(0);}
else if(userAnswer.length > randomNumber4){	
  alert("Odabrali ste previše odgovora, pokušajte ponovo!");
	plusSlides(0);
	userAnswer.length=0;
	document.getElementById("pick4").textContent= null;
	}	
else if(userAnswer.length < randomNumber4){	
alert("Odaberite, potreban broj odgovora, pokušajte ponovo!");
	plusSlides(0);
	userAnswer.length=0;
	document.getElementById("pick4").textContent= null;
	}	
else if(userAnswer.length==randomNumber4){
	document.getElementById("d4").style.backgroundColor = "green";
	//last slide button change placeholder
    document.getElementById("ne4").innerText="score";
	document.getElementById("pr4").innerText="quiz";
	//last slide buttons change functionality
    document.getElementById("ne4").setAttribute( "onClick", "javascript: score();" );
    document.getElementById("pr4").setAttribute( "onClick", "javascript: history.go();" );
  } };
//comparing arrays	
function check31(){
//rightAnswer1.sort();
//userAnswer.sort();
let checkSubset = (parentArray, subsetArray) => {
    return subsetArray.every((el) => {
        return parentArray.includes(el)
    })}
checkSubset(rightAnswer1, userAnswer); 
console.log(checkSubset(rightAnswer1, userAnswer));
if (checkSubset(rightAnswer1, userAnswer)===true){
userAnswer.length= 0;}
else{
userAnswerGlobal.pop();
userAnswer.length= 0;	
};};

function check32(){
//rightAnswer2.sort();
//userAnswer.sort();

let checkSubset = (parentArray, subsetArray) => {
    return subsetArray.every((el) => {
        return parentArray.includes(el)
    })} 
checkSubset(rightAnswer2, userAnswer); 
console.log(checkSubset(rightAnswer2, userAnswer));
	if (checkSubset(rightAnswer2, userAnswer)===true){  
userAnswer.length= 0;}	
else{
userAnswerGlobal.pop();
userAnswer.length= 0;	
};};

function check33(){
//rightAnswer3.sort();
//userAnswer.sort();	
let checkSubset = (parentArray, subsetArray) => {
    return subsetArray.every((el) => {
        return parentArray.includes(el)
    })}
checkSubset(rightAnswer3, userAnswer); 
console.log(checkSubset(rightAnswer3, userAnswer));
 if (checkSubset(rightAnswer3, userAnswer)===true){ 
userAnswer.length= 0;}
else{
userAnswerGlobal.pop();
userAnswer.length= 0;	
};};

function check34(){
//rightAnswer4.sort();
//userAnswer.sort();
let checkSubset = (parentArray, subsetArray) => {
    return subsetArray.every((el) => {
        return parentArray.includes(el)
    })}
checkSubset(rightAnswer4, userAnswer); 
if (checkSubset(rightAnswer4, userAnswer)===true){
userAnswer.length= 0;}
else{
userAnswerGlobal.pop();
userAnswer.length= 0;	
};};
// score function
function score(){
	addEventListener("on click", audio1.play());
	document.getElementById("d4").style.backgroundColor = "green";
	if(userAnswerGlobal.length==0){alert("Niste pogodili nijedan odgovor, pokušajte ponovo!");
	                               }
	else if(userAnswerGlobal.length==1){alert("Vaš učinak je 25%, pokušajte ponovo!");
	                                    }
	else if(userAnswerGlobal.length==2){alert("Vaš učinak je 50%, pokušajte ponovo!");
      }
	else if(userAnswerGlobal.length==3){alert("Vaš učinak je 75%, pokušajte ponovo!");
	   }
    else if(userAnswerGlobal.length==4){alert("Svi odgovori su točni, čestitamo!");};
};	

//on click okidanje provjere 
 function nextQuestion1(){
    //document.getElementsByClassName("butt a").disabled=false;
    check21();	
    check31();
    plusSlides(1);
    console.log(userAnswerGlobal);
    console.log(userAnswer);
	document.getElementById("d1").style.backgroundColor = "green";};
	
    function nextQuestion2(){
	
	//document.getElementsByClassName("butt b").disabled=false;
	check22();
    check32();
	plusSlides(1);
    console.log(userAnswerGlobal);
	console.log(userAnswer);
	document.getElementById("d2").style.backgroundColor = "green";};	
    
	function nextQuestion3(){
	
	//document.getElementsByClassName("butt c").disabled=false;
	check23();
    check33();
	plusSlides(1);
	console.log(userAnswerGlobal);
	console.log(userAnswer);
    document.getElementById("d3").style.backgroundColor = "green";};
	
    function nextQuestion4(){
	
	//document.getElementsByClassName("butt d").disabled=false;
	check24();
    check34();
	console.log(userAnswerGlobal);
	console.log(userAnswer);
	document.getElementById("d4").style.backgroundColor = "green";};
	  
	
	










	 
	
	


 
  




	
	

	
	
	
	
	


	

	
	
	



	

	
	

	
	
	
    
	


	
	
	
	
	
	




	

	
	
	
	
	


	
	
	





	

	

	
	
	
	



	
	
	
	


	  






	
	





	
    

	
	
	
    

	
	
	


    
	
    
    
	
    
