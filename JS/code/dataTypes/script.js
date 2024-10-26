// numbers
var a = 25;
console.log(typeof a) //number
//In numbers you can use Math methods such as abs, sqrt, cbrt, ceil, floor, max,min,round, random,pow,
// tostring method can convert deminal number into any base
console.log(a.toString(2));
//strings
// strings are used to represent alphanumeric values,
var str = "Javascript"
console.log(str, typeof str)// Javascript string
console.log(str[0] + str[4])//JS
//string methods
console.log(str.length) //10
console.log(str.toUpperCase()) //JAVASCRIPT
console.log(str.toLowerCase()) //javascript
console.log(str.concat(" is soo easy"))
console.log(str.indexOf('s'))
console.log(str.lastIndexOf('a'));
console.log()
console.log(str.split('a'));
console.log(str.endsWith('J'));
// create an array of items separted values
console.log(str.split(''))
console.log(["ram ", "is", "good", "Boy"].join(" "))
// "js is so easy".split(' ').length
console.log(str.replace('a', 'i')) //jivascript
var x = "sonia";
x.toUpperCase();
console.log(x)// strings are immutable
// boolean  -- to store true/false, we use boolean values. true is considered as 1 and false is considered as 0. we use boolean in condition
var y = true, z = 5 > 7;
// types will be convert sometimes by default called implicit conversion or duck typing
console.log('5' + '4');//54
console.log('5' + 4) //54 --- '5'+4 ==>'5'+'4'
console.log(5 - '4'); //1
console.log(5 - "prasad")//NaN
console.log(5 + true) //6



var k="prasad"
console.log(
	k[0].toUpperCase() +
		k[1].toLowerCase() +
		k[2].toUpperCase() +
		k[3].toLowerCase() +
		k[4].toUpperCase() +
		k[5].toLowerCase(),
)










