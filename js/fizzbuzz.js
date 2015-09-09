$(document).ready(function(){

	$( "#number" ).keyup(function() {
	  $('#output').text(generateFizzBuzz($( "#number" ).val()));
	});

});

function generateFizzBuzz(number){
    
    if (isNaN(number)) return "enter a valid number";
    
    var output ="";

    for(i=0; i<=number; i++){
        
        if(i!=0 && i%15==0){
            output +="FizzBuzz";
            continue;
        }
        
        if(i!=0 && i%5==0){
            output +="Buzz";
            continue;
        }
        
        if(i!=0 && i%3==0){
            output +="Fizz";
            continue;
        }
            
        output += i;
    }
    
	return output;
}