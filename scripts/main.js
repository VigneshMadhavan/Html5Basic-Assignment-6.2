//function to initialize objects
function initialize(){
	
	var myArray=new Array(3,4,5,6,7,8)
	console.log("Initial:"+myArray);
	myArray.push(11);
	myArray.push(12);
	myArray.push(13);
	myArray.push(14);
	console.log("After Push:"+myArray);
	for(var i=1;i<=4;i++){
		myArray.pop();
	}
	console.log("After Pop:"+myArray);
	myArray.splice(1,4)
	console.log("After Extracted the elements from first index to fourth index and:"+myArray);
	for(var i=0;i<myArray.length;i++){
		
		console.log("myArray["+i+"]:"+myArray[i]);
	}
	
}



initialize();

