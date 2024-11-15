let arr = [2, 3, 4, 5]
console.log(arr[2] + arr[3]) //4+5=9
console.log(arr[-8]) //undefined

//methods
//length
console.log(arr.length)
arr[8] = 29;
console.log(arr.length, arr, arr[4])
let bbt= ["ross","sheldon","leonard","penny","joey"]
//1. remove joey and add "raj"
bbt.pop(); bbt.push("raj")
// 2. remove ross and add "howard"
bbt.shift(); bbt.unshift("howard");
// 3. after sheldon add amy without deleting any words
bbt.splice(2, 0, "amy")
console.log(bbt.includes("sheldon"));
console.log(bbt.indexOf("sheldon"))//1
console.log(arr.reverse());
//iterators
arr = [1, 2, 3, 4];
arr.forEach(function (val,i)
{
    console.log(val*2,i) 
})
let names = ["raj", "jaya", "vani", "mani"]
// print everyones first letter in console for given array
let arr2=names.forEach(function (val)
{
    console.log(val.charAt(0))//r j v m
    return val.charAt(0)
})
let arr3 = names.map(function (val) {
	console.log(val.charAt(0)) //r j v m
	return val.charAt(0)
})

console.log(arr2, arr3);

arr=[1,2,3,4]
let res1 = arr.forEach(function (num)
{
    return num % 2 == 0;
})
console.log(res1) //undefined
let res2 = arr.map(function (num) {
	return num % 2 == 0
})
console.log(res2) //[f,t,f,t]

let res3 = arr.filter(function (num) {
	return num % 2 == 0
})
console.log(res3) //[2,4]
arr=[1,3,5,2]
let res4 = arr.some(function (num) {
	return num % 2 == 0
})
// some wil be true if any of element matches condition
console.log(res4)
let res5 = arr.every(function (num) {
	return num % 2 == 0
})
// Every wil be true if Every  element matches condition
console.log(res5)
arr = [1, 2, 3, 4];
let res6 = arr.reduce(function (pv, cv)
{
    return pv+cv
}, 1000)
arr = [1, 2, 3, 4];
let res7 = arr.reduce(function (pv, cv) {
	return pv * cv
}, 1)

//flatten arrays
let arr4 = [[2, 3], [4, 5], [6, 7]];
let res8 = arr4.reduce(function (pv, cv)
{
    return pv.concat(cv)
},[])

console.log(res8)
// Objects
console.log("In js, everything is an object")
let user = {
    name: "Prasad",
    age: 50
}
console.log(user.name, user['name'])
console.log(Object.keys(user),Object.values(user),Object.entries(user))
let obj2= Object.assign(user)
console.log(obj2) // direct copy
let obj3= Object.create(user)
console.log(obj3)
//JSON- Javascript object notation
let newJson= JSON.stringify(user)
console.log(newJson)
console.log(JSON.parse(newJson))
// if, switch, while,dowhile,for,for..in,for..of












































