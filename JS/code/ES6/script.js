/* Ecmascript is an organization which brings updates to different scripting languages in versions
ES14 is the latest version of JS in june,2023
There is a revolutionary version (ES6) released in 2015. it brings OOP concepts to JS and it make modular programming more flexible
*/
// Features available from ES6 are:*/





console.log(a)
var a = 20;
var a = 50;/* using var redeclaration is possible*/
console.log(a)
a = 45; /* re assigning is possible using var */
console.log(a);
let b = 10;
/* let and const variables are stored in temporal dead zone so you cannot redeclare them,also you cannot access them before initialization */
console.log(b)
b = 25
console.log(b)
const c = 15;
/* var is a function scope variable  and let,const are block scoped variables */
// function something ()
// {
//     if (true)
//     {
//         let k=25
//     }
//     console.log("k="+k)
// }
// something()


/* rest */
function display2 (...b)
{
    let arr=[...b] //[1,2,3,4]
    console.log(arr)//[1,2,3,4]  [1,[2,3,4]] [[1,2,3,4]]
}
display2(1, 2, 3, 4)


function display3 (a,b,...c)
{
    console.log(c) 
    let arr = [1, 2, c];
    console.log(arr) //[1,2,[7,8]];
    let arr2 = [1, 2, ...c];
    console.log(arr2) //[1,2,7,8]
}
display3(5, 6, 7, 8)
//Array Destructuring
let arr = ["Raju","Ravi","Ramu"];
let [a1, b1, c1] = arr;
//var a1=arr[0],b1=arr[1],c1=arr[2]
console.log(a1)
let [a2, ...b2] = arr;
console.log(a2, ...b2);
//object destructuring
let obj = {
    title: "Raj",
    age: 55,
    phno:58585858
}
console.log(obj.age)
const { title,age } = obj
console.log(age) //55

let obj2 = {
    username: "dfhhjdf",
    password:"dgfh"
}
// destructure password and print in console
const { password } = obj2 
//const password= obj2.password








class Employee
{
    name; id; salary;
    constructor(a,b){
        this.name= a; //current calling object -- obj1.name="raj"
        this.salary= b;
    }
    work ()
    {
        console.log(`${this.name} working`)
    }
}
class superEmployee extends Employee
{
    isPromoted;
    constructor(a, b, c)
    {
        super(a, b);
        this.isPromoted = c;
    }
}
let obj6= new superEmployee("Praveen",60000,true)




//object creation
let obj1 = new Employee("raj", 25000);
obj1.salary = 50000;
let obj5 = new Employee("Geetha", 10000)
// Employee() - constructor -- it is used to assign default 
//values to class variables
console.log(obj1.name)
obj1.work()
obj5.work()
console.log()


























