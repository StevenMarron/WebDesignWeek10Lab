// Week 10 JS

arrayFive=[];

function Array(){
	for(i=0;i<5; i++){
		arrayFive.push(Math.floor(Math.random()*10)+1);
	}	
}

function viewArray(){
	alert("I'm not mad, I'm just disappointed. Check the console for the answer");
	console.log(arrayFive);
}

function makeGuess(){
	var userGuess=prompt("Enter your guess between 1-10");
	var count=0;
	for (i=0; i<arrayFive.length; i++){
		if(arrayFive[i]==userGuess){
				count=count+1;
		}
	}
	alert("the number "+userGuess+" appeared "+count+" times in the array")
}

function startOver(){
	for(i=0;i=arrayFive.length; i++){
		arrayFive.pop();
	}
}