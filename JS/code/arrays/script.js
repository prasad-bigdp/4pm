/* arrays are non primitve data type or reference data type */
var str = "prasad", str1 = "prasad";
console.log(str == str1)
var arr = [2, 3], arr1 = [2, 3];
console.log(arr == arr1);
/* arrays is collection of elements */
var a = [2, "prasad", true]
a[-1]=36
/* arrays stores the values in indexes*/
console.log(a[-1])
var arr2 = [5, 6, 8, 9, 5];
//arr2[0]+arr2[2]=5+8
//array functions
console.log(arr2.length);
console.log(arr2.indexOf(5))
console.log(arr2.lastIndexOf(5))
console.log(arr2.push(6),arr2)
console.log(arr2.pop(),arr2)
console.log(arr2.unshift(25), arr2)
console.log(arr2.shift(), arr2)
console.log(arr2)
console.log(arr2.splice(2, 0,25,26,27,28,29,30))
console.log(arr2)

var friends = ["Joy","Rachel","Stuwart","Joey","Phoebe"]
/*
1. remove Joy and add chandler //ushift("joy");shift("chandler")/splice(0,1,"chandler")
2. remove Stuwart and add Ross //splice(2,1,"ross")
3. add monica to the last  ---- push(monica)/splice(5,0,"monica")
==============================
["chandler","Rachel","Ross","Joey","Phoebe","Monica"]

*/
console.log(arr2.concat([1, 5]))
arr2=[1,6,7,3,4,5,11]
console.log(arr2.reverse())
console.log(arr2.sort())

arr=["prasad","java","pooja","karthik"]
arr.forEach(function (val)
{
    //"Prasad".charAt(0)
    console.log(val.charAt(0))
})
/* take an array*/
b = [5, 6, 7, 8, 9]
/* square them and return new array*/
var squaredArray = b.forEach(function (v)
{
    return v * v;
})
console.log(squaredArray)
var squaredArray2 = b.map(function (v) {
	return v * v
})
console.log(squaredArray2)
arr = [2, 3, 8, 7, 6, 5];
var evenOdd = arr.map(function (val)
{
    if (val % 2 == 0)
    {
        return val;
    }
})
console.log(evenOdd)
var evenOdd2 = arr.filter(function (val) {
	if (val % 2 == 0) {
		return val
	}
})
console.log(evenOdd2)

arr = [1, 2, 3]
var k = 0
arr.find(raju)
function raju(val)
{
    return val%2==0
}
var x=arr.reduce(function (prev,curr)
{
    return prev+curr
},0)
console.log(x)



//objects
let student = {
    name: "shekhar",
    age: 24,
    study ()
    {
        console.log("studying")
    }
}
console.log(student.name) //dot notation
console.log(student['name']) //index signature













































