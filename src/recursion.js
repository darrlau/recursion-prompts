/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  } else {
    return (n * factorial(n - 1));
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) {
    return 0
  } else {
    return array[0] + sum(array.slice(1)) 
  }
};

// [1,2,3,4,5,6]

// 1 + sum([2,3,4,5,6])
// 2 + sum([3,4,5,6])
// 3 + sum([4,5,6]) = 
// ...
// 6 + sum([]) == 0

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  if (Array.isArray(array[0])) {
    return arraySum(array[0]) + arraySum(array.slice(1))
  }
  return array[0] + arraySum(array.slice(1)) 
};
// [1,[2,3],[[4]],5]

//     1 + arraySum([[2,3],[[4]],5])
//     2 + arraySum([3, [[4]],5])
//     3 + arraySum([[[4]],5])
//    [] + arraySum([4],[5]);
//     4 + arraySum(5);
//     5 + arraySum([])

//     12,3[4]5

// 4. Check if a number is even.
var isEven = function(n) {
  if (Math.abs(n) === 0) {
    return true;
  } else if (Math.abs(n) === 1) {
    return false;
  }
  return isEven(Math.abs(n) - 2);
};

//4
// does 4 === 0
// then 2 === 0
// then 0 === 0 --> true
// does 5 === 0
// then 3 === 0
// 

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0
  }
  if (n > 0) {
    return (n - 1) + sumBelow(n - 1)
  } else {
    return (n + 1) + sumBelow(n + 1)
  }
};

//6
// 6 === 0 --> no
// 6 + sumBelow(5) 6 + 15 = 21
// 5 === 0 --> no
// 5 + sumBelow(4) 5 + 10 = 15
// 4 === 0 --> no
// 4 + sumBelow(3) 4 + 6 = 10
// 3 === 0 --> no
// 3 + sumBelow(2) 3 + 3 = 6
// 2 === 0 --> no
// 2 + sumBelow(1) 2 + 1 = 3
// 1 === 0 --> no      
// 1 + sumBelow(0) 1 + 0 = 1
// 0 === 0 --> yes return 0

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x , y) {
  if (x > y) {
    var array = [];
    if (x === y + 1 || x === y) {
      return array
    }
    array.push(x - 1);
    return array.concat(range(x - 1, y));
  } else {
    var array = [];
      if (x + 1 === y || x === y) {
        return array
      }
      array.push(x + 1);
      return array.concat(range(x + 1, y));
    }
};

/*
(2, 9)

array = []
2 = 9 --> no
array = [3]
[3] + range(3, 9)

3 = 9 -->
array [3, 4]
[3, 4] + range(4,9)

*/

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp < 0) {
    exp = exp * -1;
    return 1 / (base * exponent(base, exp - 1));
  }

  if (exp % 2 === 1) {
    return base * exponent(base, exp - 1);
  }

  if (exp % 2 === 0 && exp === 2) {
    return (base * exponent(base, 0)) * (base * exponent(base, 0)); 
  } else if (exp % 2 === 0) {
    return (base * base * exponent(base, 0)) * (base * base * exponent(base, 0));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false
  }
  return powerOfTwo(n/2)
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return string;
  }
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};

/*
hello

return string[string.length - 1] + reverse(string.slice(0, string.length - 2)) 
o + hell
l + ohel
l + lohee + lloh

olleh
*/

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  if (string.length === 0){
    return true;
  }

  if (string.length % 2 === 1) {
    if (string.length === 1) {
      return true;
    }
    if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
      return palindrome(string.substring(1,string.length-1));
    }
  }

  if (string.length % 2 === 0) {
    if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
      return palindrome(string.substring(1,string.length-1));
    }
  }
  return false; 
}

/*
racecar
aceca
cec
e

racmncar
acmnca
cmnc
mn == false    

raccar
acca
cc
string.length == true
*/

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x === 0) {
    return 0;
  }

  if (x < 0) {
    return -modulo(-x, y);
  }

  if (y < 0) {
    return modulo(x, -y);
  }

  if (y > x) {
    return x;
  }

  if (x - y < y) {
    return x - y;
  }

  return modulo(x - y, y); 
};

/*
modulo(0, 32) -- > 0

modulo(17,5) // 2
17 - 5 (12) < 5  -- > false
12 - 5 (7)  < 5
 7 - 5 (2)  < 5 --> 7

17 / 5 = 3.4
12 / 5 = 2.4
 7 / 5 = 1.4
 2 / 5 = 0.4

17 - 5 = 12
12 - 5 = 7
 7 - 5 = 2
 2 - 5 = -3


if 2 < 5 
return 2


22/6
16/6
10/6
4/6
4
*/

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) { 
  if (y === 0) {
    return 0;  
  }

  if (x < 0 && y <0) {
    return x + multiply(-x, -(y-1));
  }

  if (x < 0) {
    return x + multiply(x, y-1);
  } 

  if (y < 0) {
    return x + multiply(-x, -(y - 1));
  } 

  return x + multiply(x, y-1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (x === 0 && y === 0) {
    return NaN;
  }

  if (x < 0 && y < 0) {
    return 0
  }

  if (y === 1) {
    return x;
  }

  if (y === x) {
    return 0
  }

  if (y > x) {
    return 0
  }

  if (x < 0) {
    return 1
  }

  return 1 + divide(x - y, y);
};


/*

17 / 5

78 / 453

24/5


1 + divide(24, 10)
1 + divide(24, 20)
1 + 1

 17    5 
[1] <----[5]
[2] <--- [10]
 4       15

1+2 = 3 r2

  _4_
2|8

2+2+2+2

  __3__. 2
5| 17
   15
    2

5+5+5

 X  Y
17, 5 

5 + 5 > 17?

5 + 5 + 5 > 17?

5+ 5 + 5 +5 > 17 --> true

1+1 = 2
2+2 = 5???

divide(17, 5) // 3
divide(7/3)  //  2

divide(num, y) - num
divide(12 - 5) -12 - 12
divide(7 -5) -5 - 8
divide(2 - 5)(0) -3 - 2
0 - -3

17 - divide(17, 4) 15
17 - divide(17, 3) 1
17 - divide(17, 2) 16
17 - divide(17, 1)   = 1
17 - divide(17, 0) (0) 17
0

17 - 5
12 - divide(12, 5) = 10
12 - 5
7 - divide(7, 5) = 2
7 - 5 
2 - divide(2, 5) = 5 
2 - 5
-3 

17-5(12) < 0

12-5(7)  < 0

7-5 (2)  < 0

2-5 (-3) < 0

12 <= 0 

2 - 1 = 1
1 - 1 = 0
0 - 1 = -1
-1 - 1 = -2

7 - 3 = 4
4 - 3 = 1
1 - 3 = -2

// return x - divide(x - 1, y);
17, 5

17 - divide(16, 5) 17 - 20 = -3
16 - divide(15, 5) 
15 - divide(14, 5)
14 - divide(13, 5)
13 - divide(12, 5)
12 - divide(11, 5)
11 - divide(10, 5)
10 - divide(9, 5)
9 - divide(8, 5)
8 - divide(7, 5)
7 - divide(6, 5)
6 - divide(5, 5)
5 - divide(4, 5)
4 - divide(3, 5) (1) --> 3
3 - divide(2, 5) (2) --> 1
2

17 - 5 = 12
12 - 5 = 7
 7 - 5 = 2

17 / 5 = 3.4
12 / 5 = 2.4
7  / 5 = 1.4
2  / 5 = 0.4


17 - divide(17, 4)
17 - divide(17, 3)

2 - 1

*/

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }

  if (x < y && y % x === 0) {
    return x;
  }

  if (y < x && x % y === 0) {
    return y;
  }

  if (x % y === 0) {
    return y;
  }

  return gcd(y, x % y);
};

// To compute gcd(48,18), divide 48 by 18 to get a quotient of 2 and a remainder of 12. 
//Then divide 18 by 12 to get a quotient of 1 and a remainder of 6. Then divide 12 by 6 
//to get a remainder of 0, which means that 6 is the gcd. Note that we ignored the 
//quotient in each step except to notice when the remainder reached 0, signalling that 
//we had arrived at the answer. Formally the algorithm can be described as:

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomate') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  if (str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1));
  }
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var array = [];
  if (str.length === 0) {
    return array;
  }
  array.push(str[0])
  return array.concat(createArray(str.slice(1)))
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return array;
  }
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
};

/*
var reverse = function(string) {
  if (string.length === 0) {
    return string;
  }
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};
*/

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var array = [];
  if (length === 0) {
    return array;
  }
  array.push(value)
  return array.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) { 
  var array = [];
  if (n === 0) {
    return array
  }

  if (n % 3 === 0 && n % 5 === 0) {
    array.push('FizzBuzz');
  } else if (n % 3 === 0) {
    array.push('Fizz');
  } else if (n % 5 === 0) {
    array.push('Buzz');
  } else {
    array.push(n.toString());
  }

  return fizzBuzz(n-1).concat(array);
};

// Using recursion, go through a string and remove characters that occur more than once. 
//E.g. passing in "Troll" should return "trol". Passing in "abracadabra" should return 
//"abrcd".
// var charCheck = function(string) {
//   var str = string.slice(0, string.length - 1)
//   var char = string[string.length-1]
//   //console.log(string, str, char, string.length)

//   if (str.length === 0) {
//     return char;
//   }

//   if (str.includes(char)) {
//     return charCheck(str)
//   }

//   return charCheck(str) + char;
// }

// var test = charCheck('treiger')
// //console.log(test);

// //
// // // Using recursion, go through a string and remove characters that occur more than once. E.g. passing in "Troll" should return "trol". Passing in "abracadabra" should return "abrcd".

// //v1
// let onlyOnce = function(str, obj){ 
// if(obj === undefined){
//   obj = {};
// }
// if(str.length === 0){
//   return '';
// }
// if(!obj.hasOwnProperty(str[0])){ {a: 1, b: 1}
//   obj[str[0]] = 1;
//   onlyOnce(str.substr(1), obj);
// } else {
//   onlyOnce(str.substr(1), obj);
// }

// var keys = Object.keys(obj).join('');
// return keys;
// }

// onlyOnce('abca')




// //v2

// const firstOnly = function(str) {
//   if (str.length < 1) {
//     return '';
//   }

//   if (str.substring(0, str.length - 1).includes(str.substring(str.length - 1))) {
//     return firstOnly(str.substring(0, str.length - 1));
//   } else {
//     return firstOnly(str.substring(0, str.length - 1)) + str[str.length - 1];
//   } 

// }

// firstOnly('abca');




// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }
  if (array[0] === value){
    return 1 + countOccurrence(array.slice(1), value)
  }
  return countOccurrence(array.slice(1), value)
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var arr = [];
  if (array.length === 0) {
    return [];
  }

  arr.push(callback(array[0]));
  return arr.concat(rMap(array.slice(1), callback));
};

// [2].push(callback(2))
// [2].concat(rMap([2,3], timesTwo));

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
// var countKeysInObj = function(obj, key) {
//   if (Object.keys(obj).length === 0) {
//     return 0;
//   }

//   for (var prop in obj) {
//     if (typeof obj[prop] === 'object' && prop === key) {
//       var burrow = 1 + countKeysInObj(obj[prop], key)
//       delete obj[prop];
//       return burrow + countKeysInObj(obj, key);
//     } else if (typeof obj[prop] === 'object') {
//       var burrow = countKeysInObj(obj[prop], key)
//       delete obj[prop];
//       return burrow + countKeysInObj(obj, key);
//     }

//     if (prop === key) {
//       delete obj[prop];
//       return 1 + countKeysInObj(obj, key);
//     } else {
//       delete obj[prop];
//       return countKeysInObj(obj, key);
//     }
//   }
// };
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var prop in obj) {
    if (prop === key)  {
      count++;
    }
    if (typeof obj[prop] === 'object') {
      count += countKeysInObj(obj[prop], key);
    }
  }
  return count;
};
/*
var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
                2
e t p
i = e
{'x':'y'} === object && 'e' === 'e' --> true
count = 2
count += 0

countKeysInObj({'x':'y'}, 'e')
i = x
returns 0


*/

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var prop in obj) {
    if (obj[prop] === value) {
      count++;
    }

    if (typeof obj[prop] === 'object') {
      count += countValuesInObj(obj[prop], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var prop in obj) {
    if (prop === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey]
    }

    if (typeof obj[prop] === 'object') {
      replaceKeysInObj(obj[prop], oldKey, newKey)
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
  if (n < 0 || n === 0) {
    return null;
  }
  var array = [0, 1];

  if (n === 1) {
    return array;
  } else {
    var spaces = fibonacci(n - 1);
    console.log(spaces, 'spaces')
    spaces.push(spaces[spaces.length - 1] + spaces[spaces.length - 2]);
    console.log(spaces.length, 'spaces length')
    console.log(spaces.length - 1, 'spaces length - 1')
    return spaces;
  }
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
  for (var prop in obj) {
    if (obj[prop] % 2 === 0) {
      count += obj[prop];
    }

    if (typeof obj[prop] === 'object') {
      count += nestedEvenSum(obj[prop]);
    }
  }
  return count;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (array.length === 0) {
    return [];
  } else if (typeof array === 'number') {
    return [array];
  }
  console.log(array);
  return flatten(array[0]).concat(flatten(array.slice(1)));
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var obj = obj || {};
  if (str.length === 0) {
    return obj;
  }
  if(!obj[str[0]]){
    obj[str[0]] = 1;
    letterTally(str.slice(1), obj);
  } else {
    obj[str[0]]++;
    letterTally(str.slice(1), obj);
  }
  
  return obj;
};


// let onlyOnce = function(str, obj){ 
// if(obj === undefined){
//   obj = {};
// }
// if(str.length === 0){
//   return '';
// }
// if(!obj.hasOwnProperty(str[0])){ {a: 1, b: 1}
//   obj[str[0]] = 1;
//   onlyOnce(str.substr(1), obj);
// } else {
//   onlyOnce(str.substr(1), obj);
// }

// var keys = Object.keys(obj).join('');
// return keys;
// }



// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var arr = []
  if (list.length === 0) {
    return arr;
  }
  
  if (list[0] !== list[1]) {
    arr.push(list[0])
  }
  return arr.concat(compress(list.slice(1)));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var arr = [];
  if (array.length === 0) {
    return arr;
  }

  var otherArr = array[0];
  otherArr.push(aug);
  arr.push(otherArr);
  return arr.concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var arr = []
  if (array.length === 0) {
    return arr;
  }

  if (array[0] === 0 && array[1] === 0) {
    return arr.concat(minimizeZeroes(array.slice(1))); 
  } else {
    arr.push(array[0])
    return arr.concat(minimizeZeroes(array.slice(1)));
  }

};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4, 5, -2] 
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var arr = [];
  
  if (array.length === 1 && array[0] > 0) {
    arr.push(-array[0])
    return arr;
  } else if (array.length === 1 && array[0] < 0) {
    arr.push(array[0])
    return arr;
  }

  if (array.length % 2 === 1 && array[0] > 0) {
    arr.push(-array[0])
  } else if (array.length % 2 === 1 && array[0] < 0) {
    arr.push(array[0])
  }

  if (array.length % 2 === 0 && array[0] > 0) {
    arr.push(array[0])
  } else if (array.length % 2 === 0 && array[0] < 0) {
    arr.push(-array[0])
  }

  return arr.concat(alternateSign(array.slice(1)));
};

/*

[2,7,8,3,1,4] even
 + - + - + -
  [7,8,3,1,4] odd 
   + - + - +
    [8,3,1,4] even
     + - + -
      [3,1,4] odd 
       + - + 
        [1,4] even
         + -
          [4] odd 
           + 
*/

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {

  var result = '';
  if (str.length === 0){
    return result;
  }

  if (str[0] === '1') {
    result += 'one';
  } else if (str[0] === '2') {
    result += 'two';
  } else if (str[0] === '3') {
    result += 'three';
  } else if (str[0] === '4') {
    result += 'four';
  } else if (str[0] === '5') {
    result += 'five';
  } else if (str[0] === '6') {
    result += 'six';
  } else if (str[0] === '7') {
    result += 'seven';
  } else if (str[0] === '8') {
    result += 'eight';
  } else if (str[0] === '9') {
    result += 'nine';
  } else {
    result += str[0];
  }

  return result + numToText(str.slice(1))
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
