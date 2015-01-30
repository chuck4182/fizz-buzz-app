$(document).ready(function(){
 var i;
var x = "";
var enterNumber = prompt("Please enter a number from 1-100");
var number = +enterNumber;

var funcFizzBuzz = function(){
for(i = 1; i <= number; i++){
	
	
	if(i%3===0 & i%5===0){
		x += "fizz buzz ";
	}
	else if(i%5===0){
		x += "buzz ";
	}
	else if(i%3===0){
		x += "fizz ";
	}
	else{
		x += i + " ";
}
	
}
};

var wholeNumber = function(){
if(isNaN(number)) {
	prompt("Please enter a number only!");
}
else if(number % 1 !== 0)
{
	prompt("Please enter a whole number only!");
}

else{
	funcFizzBuzz();
}
	
};
wholeNumber(number);

$('body').append(x);

});