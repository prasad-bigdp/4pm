/* return an array of people names who are eligible to vote */
var arr = [
	{
		name: "raj",
		age: 20,
	},
	{
		name: "suraj",
		age: 30,
	},
	{
		name: "praveen",
		age: 25,
	},
	{
		name: "meena",
		age: 19,
	},
	{
		name: "pranitha",
		age: 14,
	},
]
//standard for
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i].name)
}
// for--of
for (var i of arr)
{
    console.log(i.name)
}
//for..in
for (var i in arr)
{
    console.log(arr[i].name)
}


// we should check each and every element of array
let arr2=[]
 arr.forEach(function (val) {
    if (val["age"] >= 18)
    {
       arr2.push(val.name)
    }
})
console.log(arr2)

// let arr=[3,4,5,6,7,8,9]
// make two arrays one with and another with odd numbers
let evenArr = [], oddArr = []
arr.forEach(function (v)
{
    if (v % 2 == 0)
        evenArr.push(v);
    else
        oddArr.push(v);
})
// if-else-if can be managed by switch
console.log("chooose any one")
console.log("1.add")
console.log("2.subtract")
console.log("3.multiply")
var choice = 3
function add ()
{
    console.log("added")
}
switch (choice)
{
    case 1: add(); break;
    case 2: console.log("subtract successfully"); break;
    case 3: console.log("multiply successfully");  break;
        default:console.log("wrong input")
}









