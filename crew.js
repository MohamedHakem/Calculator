/*
javascript for Calculator
*/
function sbm_form() {
	input_number = document.getElementById('number').value;
	if (input_number == "") {
        	alert("Please Insert Number");
        	return false;
    	}
  	//Sabri Code
	alert(input_number);
  	var resultdiv = document.getElementById("result");
  	resultdiv.innerText = input_number;
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
