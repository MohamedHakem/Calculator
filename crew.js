/*
javascript for Calculator
*/
function sbm_form() {
	input_number = document.getElementById('number').value;
	if (input_number == "") {
        	alert("Please Insert Number");
        	return false;
    	}
	//eman function
	isdigit(input_number);
	iseven(input_number);
	
//end of sabri code
	alert(input_number);
  	var resultdiv = document.getElementById("result");
  	resultdiv.innerText = input_number;
}
function iseven(input_number){
	var noOfDigits = input_number.toString().length;

  	//Sabri Code 
	for(var i=1; i<= noOfDigits;  i++ ){
		digit=Math.round(input_number/Math.pow(10, noOfDigits-i));
		if( digit % 2!= 0){
			console.log(digit + " is not Even , going to work on it !");
			alert(digit + " is not Even , going to work on it !");
	  	}else if(i==noOfDigits-1){

	  	}
	}
}
function isdigit(input_number){
	if (!input_number.Integer) {
        	alert("Please Insert Number");
        	return false;
    	}
}
/*
var number = document.getElementById("number").value;


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
