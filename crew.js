/*
javascript for Calculator
*/
function sbm_form() {
	input_number = document.getElementById('number').value;
	//eman function
	if(!isNotDigit(input_number)){
		alert(iseven(input_number)+"presses");
		alert(input_number);
  		var resultdiv = document.getElementById("result");
  		resultdiv.innerText = input_number;
	}
	
//end of sabri code
	
}
function iseven(input_number){
	var noOfDigits = input_number.toString().length;

  	//Sabri Code 
	for(var i=1; i<= noOfDigits;  i++ ){
		var digit=Math.floor(input_number/Math.pow(10, noOfDigits-i));
		if( digit % 2!= 0){
			console.log(digit + " is not Even , going to work on it !");
			alert(digit + " is not Even , going to work on it !");
			largerEven=digit + 1 * Math.pow(10, noOfDigits-i);
			smallerEven=digit - 1 * Math.pow(10, noOfDigits-i)+parseInt('8'*noOfDigits-i);
			if(digit%10!=9){
				return Math.min(largerEven, smallerEven);
			}
			return smallerEven;
	  	}
		else if(i==noOfDigits-1){
			if (input_number%2==0){
				console.log(digit + " is Even");
				return 0;
			}
			return 1;
	  	}
	}
}
function isNotDigit(input_number){
	if (isNaN(input_number)|| input_number == "") {
        	alert("Please Insert Number");
        	return false;
    	}
}
/*
var number = document.getElementById("number").value;
if( digit % 2!= 0){
			console.log(digit + " is not Even , going to work on it !");
			alert(digit + " is not Even , going to work on it !");
			
	  	}
		else if(i==noOfDigits-1){
			if (input_number%2==0){
				console.log(digit + " is Even");
			}
	  	}

var noOfDigits = number.toString().length;


for( i=0; i< noOfDigits;  i++ ){
	
	function isEven(){
	    digit=number/Math.pow(10, noOfDigits-1);
	  if( digit % 2!= 0){
		console.log(digit + " is not Even , going to work on it !");
	  }
	  elseif(i==nOfDigits-1){

	  }
}
isEven();
};
*/
