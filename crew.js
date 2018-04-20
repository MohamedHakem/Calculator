/*
javascript for Calculator
*/
//alert("Hi");
function sbm_form() {
  //num = $("#number").val();
  nn = document.getElementById('number').value;
  alert(nn);
  var resultdiv = document.getElementById("result");
  resultdiv.innerText = nn;
}


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
