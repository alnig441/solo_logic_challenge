// Solo challenge 1:
var primes = [2, 3, 5, 7, 11, 13, 17, 19];
var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];

function addArrayReverse (a, b) {
var addArrays = [];
for(var i = a.length-1; i >=0; i --){
	addArrays.push(a[i]);
	}	
for(var i = 0; i <a.length; i++){
	addArrays.push(addArrays[i]+b[i]);
	addArrays.shift();
	}
return addArrays;
}

console.log(addArrayReverse(primes, nonPrimes));


// Solo challenge 2:
var numbers1 = [4, 1, 6, 5, 8];
var numbers2 = [7, 3, 2, 9, 10];
// 

function merge(a, b){
	for(var i = 0; i<=b.length-1; i++){
	a.push(b[i]);
	// console.log(typeof a[i]);
	}
	return a;
}

console.log((merge(numbers1, numbers2)).sort(function(a, b) { return a-b }));


//Solo challenge 3
function RightTriangle(a,b){
	this.a = a;
	this.b = b;
	this.c = this.hypotenuse(this.a, this.b);
}

RightTriangle.prototype.hypotenuse = function(a, b){
	var x = a*a + b*b;
	return Math.sqrt(x);
};

console.log(new RightTriangle(4,3).c);

//Solo challenge 4
function Recursion(number){
	if(number == 0){
		return 0;
	}
	else if(number != 0){
		// console.log('blah');
		return number+(Recursion(number-1));
	}
}

console.log(Recursion(5));

