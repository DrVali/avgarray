  "use strict";
  var MineArray =["5","5","5","5","5","6"];
  
  function averageNumber(Array) {
	 let  average; 
     var i,sum = 0;
	 for( var i = 0; i<Array.length;i++)
	 {
		 sum += parseInt(Array[i]); 
	 }
	 average = sum / i; 
	 console.log(average); 
	 document.write ("array content is :  " + MineArray +" the average number of array is : " + average + " and the reounded number is " + Math.round(average)); 
  }
	 averageNumber(MineArray);
