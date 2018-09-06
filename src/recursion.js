/* jshint esversion: 6 */ 

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	// base case
	if (n === 0) {
		return 1
	} else if (n < 0) {
		return null
	} else if (n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}

};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	//base case
	if(array.length === 0) {
		return 0;
	} 
	return array[0] + sum(array.slice(1));  // 1 + sum([2, 3, 4, 5, 6]) 
																					// 1 + 2 + sum([3, 4, 5, 6]);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	function flatten(arr) {
	  return arr.reduce(function (flat, toFlatten) {
	    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	  }, []);
	}
	var me = flatten(array);
	if (array.length === 0) {
		return 0;
	} 
	return me[0] + arraySum(me.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
	//base case
	if(n === 0) {
		return true;
	} else if (n === 1) {
		return false;
	} else if (n < 0) {
		return isEven(n + 2);
	} 
	return isEven(n - 2);

	// n=13, isEven(11)...isEven(1) return false.
	// n=14, isEven(12)...isEven(0) return true
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	// base case
	if (n === 0) {
		return 0;
	}
	// recursion 1	
	if (n < 0) {
		return (n + 1) + sumBelow(n + 1);
	}
	// recursion 2
	return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	//base case
	if(y === x) {
		return [];
	} else if((y - 1)  === x) {  //if( === 2) return [];
		return [];
	} else if((x - 1) === y) {  //if( === 2) return [];
		return [];
	}


	if(x > y) {
		return [x-1].concat(range((x-1), y));
	}


	if(x<0 && y<0) {
		return [x+1].concat(range(x+1, y));
	}

	return [x+1].concat(range(x+1, y));
	

	//recursive case                          
	// if (y > x) {
	// 	return [].concat(range(x, y-1));
	// } else if (x > y) {
	// 	return [].concat(range(x-1, y+1));
	// }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if (exp === 0) {
		return 1;
	} else if (exp < 0) {
		exp = -1 * exp;
		return 1/(base * exponent(base, exp - 1));
	} else {
		return base * exponent(base, exp - 1);
	}
	// if (exp < 0) {
	// 	return 1/(base * exponent(base, exp-1));
	// }
	
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (n === 1) {
		return true;
	} else if (n < 1){
		return false;
	}
	return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	if (string.length === 0) {
		return string; // ''
	}
	return string[string.length - 1] + reverse(string.slice(0, string.length-1));
};

// hello
// o + hell
// o + l + hel
// o + l + l + he
// o + l + l + e + h
// o + l + l + e + h + ''

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.toLowerCase();
	if (string.length === 0 || string.length === 1) {
		return true;
	} else if (string[0] === string[string.length-1]) {
		return palindrome(string.slice(1, string.length-1));
	}
	return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if (x === 0 && y === 0) {
		return NaN;
	} else if (x === 0) {
		return 0;
	} else if (y === 1) {
		return 0;
	} else if (y === 0) {
		return NaN;
	} 

	if (x < 0 && y < 0 && x < y) {
		return x - y;
	}	

	if (x < y) {
		return x;
	}



	if (x < 0 && y < 0) {
		return x;
	}

	if (x > 0 && y < 0){
		if (x > -y) { 
			return x; 
		}
	}


	if (x < 0 && y > 0) {
		return -0;
	}
	return modulo(x - y, y);
};

// 17 / 5
// 12 / 5
// 7 / 5
// 2 / 5
// return 2 === x 

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {


	if (y === 0) {
		return 0;
	} 

	if (x < 0 && y < 0){
		return x + multiply(-x, -(y-1));
	}

	if (x < 0) {
		return x + multiply(x, y-1);
	}

	if (y < 0) {
		return x + multiply(-x, -(y-1));
	}

	return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
	if (y === 1) {
		return x;
	} else if (y === 0) {
		return NaN;
	} else if (x === 0) {
		return 0;
	} else if (x < 0) {
		return 0;
	}

	if (x > y) {
		return 1 + divide(x - y, y);
	}

	return 0 + divide(x-y, y);
};

// 17, 5 === 3
// 17 - 5 === 12 , 5 => 1
// 12 - 5 === 7  , 5 => 1
// 7 - 5  === 2  , 5 => 1
// 2 - 5  x         





// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if (x < 0 || y < 0) {
		return null
	} else if ((x % y) == 0) {
		return y
	} else {
		return gcd(y, x % y);
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (str1 === '' && str2 === '') {
		return true;
	}
	if (str1[0] === str2[0]) {
		return compareStr(str1.slice(1), str2.slice(1));
	}
	return false
};

// ('house', 'houses')
// [h] === [h] return  compareStr('ouse, ouses');
// [o] === [o] reutnr compareStr('use', uses)
// [u] === [u] compareStr('se', ses)
// [s] === [s] compareStr('e', 'es')
// [e] === [e] compareStr('', 's')
// return false,


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	if (str.length === 1) {
		return [str[0]];
	}

	return [str[0]].concat(createArray(str.slice(1)));
};

// racecar
// [r] + .concat + acecar
// [r] + [a] + .concat + cecar
// [r] + [a] + [c] + .concat + ecar
// [r] + [a] + [c] + [e] + .concat + car
// [r] + [a] + [c] + [e] + [c] + .concat + ar
// [r] + [a] + [c] + [e] + [c] + [a] + .concat + r
// [r] + [a] + [c] + [e] + [c] + [a] + [r] + .concat + [''];


// 17. Reverse the order of an array
var reverseArr = function(array) {
	if (array.length === 1) {
		return array[0];
	} 

	return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length -1)));
	//[racecar]
	//[array.length - 1] + slice(0, array.length -1) //[r] + [raceca]
	//[r] + [array.length - 1] + slice(0, array.length -1)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	if (length === 0) {
		return [];
	} 
	return [value].concat(buildList(value,length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	var array = [];

	if (n === 0) {
		return array;
	}
	if (n % 3 === 0 && n % 5 === 0) {
		array.push('FizzBuzz')
	} else if (n % 3 === 0) {
		array.push('Fizz')
	} else if (n % 5 === 0) {
		array.push('Buzz')
	} 

	else {
		array.push(n.toString());
	}

	return fizzBuzz(n - 1).concat(array);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	if (array.length === 0) {
		return 0;
	}

	if (array[0] === value) {
		return 1 + countOccurrence(array.slice(1), value)
	}

	return 0 + countOccurrence(array.slice(1), value)
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	if (array.length === 1) {
		return callback(array);
	}

	return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},
//            't':{'r':
//                    {'e':'r'},
//            			'p':
//                				{'y':'r'}},
//            'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2

// obj = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};

var countKeysInObj = function(obj, key) {
	var count = 0;
	for (var prop in obj) {
		if (typeof obj[prop] === 'object') {
			count += countKeysInObj(obj[prop], key);
		} 
		if (prop === key) {
			count++;
		}
	}	
	return count;
};

  // var count = 0;
  // for (var prop in obj) {

  //   if (prop === key)  {
  //     count++;
  //   }

  //   if (typeof obj[prop] === 'object') {
  //     count += countKeysInObj(obj[prop], key);
  //   }
  // }
  // return count;
	


// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},
//            't':{'r':{'e':'r'},
//				  			 'p':{'y':'r'}
//								},
//					  'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var count = 0;
	for (var prop in obj) {
		if (typeof obj[prop] === 'object') {
			count += countValuesInObj(obj[prop], value);
		} 
		if (obj[prop] === value) {
			count++;
		}
	}	
	return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	// if (prop === oldKey) {
	// 	obj[prop] = newKey;
	// 	return replaceKeysInObj(obj, oldKey, newKey)
	// } else {
	// 	obj[prop] = newKey;
	// 	return replaceKeysInObj(obj, oldKey, newKey)
	// }	
	for (var prop in obj) {
		if (prop === oldKey) {
			obj[newKey] = obj[prop];
			delete obj[oldKey];
		}
		if (typeof obj[prop] === 'object') {
			replaceKeysInObj(obj[prop], oldKey, newKey);
		}  
	}	
	return obj;
};


// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	var array = [];


	if (n <= 0) {
		return null;
	} else if (n === 1) {
		return array;
	} else if (n < 0) {
		return null;
	}

	array.push(n);
	return array.concat(fibonacci(n - 1) + fibonacci(n - 2));
	// n = 5: [0, 1, 1, 2, 3, 5]
	// 
//  [0] [1] [2]
//   0 + 1 = 1

//  [1] [2] [3]
//   1 + 1 = 2

//  [2] [3] [4]
//   1 + 2 = 3

//  [3] [4] [5]
//   2 + 3 = 5

// n[5] = n[4] + n[3]

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n < 0) {
		return null;
	} else if (n === 1) {
		return 1;
	} 
	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	if (array.length === 0) {
		return [];
	}
	return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	if (array.length === 0) {
		return [];
	}
	return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

		//["Cat", "dog", "ball"];
		//["Cat", "Dog"]
// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var count = 0;

	//if(obj[key] === 'number' && number % 2 === 0) -->count += number
	//if(obj[key] === 'object') --> iterate thru the object --> see if obj[key] is an even number, then add to count

	for (var key in obj) {
		if (obj[key] % 2 === 0) {
			count += obj[key];
		} else if (typeof obj[key] === 'object') {
			count += nestedEvenSum(obj[key]);
		}
	}

	return count;
};

// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// count 0 + (2)
// obj1 // {a, b, c, d, e} // 578
// is value at A % 2? yes, add to count
// obj1 // {a, b, c, d, e}
// is value at B % 2? no
// is value at B a object? yes
// count += nestedEvenSum({b: 2, bb: {b: 3, bb: {b: 2}}})

// count 0 + 0 + (2)
// obj {b: 2, bb: {b: 3, bb: {b: 2}}}
// is value at b % 2? yes, add to count
// obj {bb: {b: 3, bb: {b: 2}}}
// is value at bb % 2? nope
// is value at bb === object? yes
// count += nestedEvenSum({b: 3, bb: {b: 2}})

// count 0 + 0 
// obj {b: 3, bb: {b: 2}}
// is value at b % 2? nope
// is value at bb % 2? nope
// is value at bb === object? yes
// count += nestedEvenSum {b: 2};


// count 0 + 0 + 2
// obj {b: 2}
// is value at b % 2 ? yes, add 2 to count




// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	if (array.length === 0) {
		return [];
	} else if (typeof array === 'number'){
		return [array]
	}
	return flatten(array[0]).concat(flatten(array.slice(1)));
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	//input: string
	//output: returns an object containing tallies of each letter

	//set up a count variable
	//set up variable obj, equal to {}
	//split the string --> ['p', 'o', 't', 'a', 't', 'o']
	//iterate thru string (for loop)
	//if(string[0] !== undefined) --> set the count to 1
	//else set string[i] -->count++
	var obj = obj || {};

	if (str.length === 0) {
		return obj;
	}
	
	if(obj.hasOwnProperty(str[0])) { //checks to see if first letter exists
		obj[str[0]]++;
		return letterTally(str.slice(1), obj);  //letterTally -> 
	} else {
		obj[str[0]] = 1;
		return letterTally(str.slice(1), obj);
	}		

	return obj;
};


// p: 1, {p: 1}

// o: 1, {p: 1, o: 1}

// t: 1  {p: 1, o: 1, t: 1}

// a: 1  {p: 1, o: 1, t: 1, a:1}

// t: 1  {p: 1, o: 1, t: 2, a:1}

// o: 1  {p: 1, o: 2, t: 2, a:1} 

//{ p: 1, o: 2, t: 2, a: 1 }

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {

	var array = [];
	//base case
	if(list.length === 1) {
		return list;
	} 

	if (list[0] !== list[1]) {
		array.push(list[0]);
	}
	return array.concat(compress(list.slice(1)))
};

/*
[1,2,2,3,4,4,5,5,5]

list[0] + [2, 2, 3, 4, 4, 5, 5, 6] -- use slice(1)
compare list[0] to list[0] if both values dont match up, push to new array.
*/

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {

	//input: array and a value
	//return an array of array, where each array contain the value given

	var ourArray = [];
	//base case:
	if(array.length === 0) {  //return [4]
		return [];
	}
	 // [] => [5], [3] => [3,5]
	ourArray.push(array[0].concat(aug));
	return ourArray.concat(augmentElements(array.slice(1), aug));
  // [] => [5]  => ourArray.concat(ourArray.concat.(ourArray.concat([])))

  // [3] => [3,5] => 

  // [5] => [5,5] => 

  // []
};

/*
	var array = [];
	[[], [3], [7]]  ---> val = 5
	array.concat('5')

*/

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {

	var newArr = [];

	//base case:
	if (array.length === 0) {
		return [];
	}
	if (array[0] === 0 && array[1] === 0) {           
		return newArr.concat(minimizeZeroes(array.slice(1)))
	} else { //2 1 4
		newArr.push(array[0]);
		return newArr.concat(minimizeZeroes(array.slice(1)))
	}
};


// [2,0,0,0,1,0,0,4]
// newArr = [2] --> [2] => [0,0,0,1,0,0,4]
// [2] => [0, 0, 1, 0, 0, 4]
// [2] => [0, 1, 0, 0, 4]
// [2] + [] + [] + [0] + [1] => [0, 0, 4]
// .concat[2] + .concat[] + .concat[] + .concat[0] + .concat[1] + ..... .concat[]







// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var newArr = [];
    //base case:
    if(array.length === 0) {
        return newArr;
    } 
    if(array.length % 2 === 0 && array[0] > 0) {
        array[1] = -array[1];
        newArr.push(array[0]);
    } 
    if(array.length % 2 !== 0 && array[0] < 0) {
        newArr.push(array[0]);
    }

    //from 2nd input
    if((array.length % 2 === 0) && array[0] < 0 ) {
    	array[0] = -1 * array[0];
    	newArr.push(array[0])
    }
    if((array.length % 2 !== 0) && array[0] > 0) {
    	array[0] = -1 * array[0];
    	newArr.push(array[0]);
    }

    return newArr.concat(alternateSign(array.slice(1)));
};




// [2,7,8,3,1,4] even
//  + - + - + -
//   [7,8,3,1,4] odd 
//    + - + - +
//     [8,3,1,4] even
//      + - + -
//       [3,1,4] odd 
//        + - + 
//         [1,4] even
//          + -
//           [4] odd 
//            + 





// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
