// write a function to dispaly hello functions
function display ()
{
    console.log("hello functions")
}
display()
// function expression
var display2 = function ()
{
    console.log("hello functions")
}
display2()

// write a function to take first and last names and print fullname
function fullName (fn,ln)
{
    console.log("My name is " + fn +" " + ln);
}
fullName("salman", "khan");

// create a function to print taxi fare which accepts hours and charge per hour and results their product.In case if charge per hour is not provided, take default charge ₹5.
function taxiFare (hr, rs = 5)
{
    console.log("your total fare is "+ hr*rs)
}
taxiFare(5) //₹25
taxiFare(5, 2) //₹10

// write a function which returns number of characters inside a sentence by accepting sentence as a argument
function noOfCharacters(str){
   return str.length
}
var res = noOfCharacters("Js is so easy")
console.log(res)


// callback function -- a function which is passed as a parameter to another function is known as callback fn
function mad ()
{
    console.log("i'm mad")
}
function bad ()
{
    console.log("i'm bad")
}
function both (a, b)
{
    console.log(a,b)
    a();
    b()
}
both(mad,bad)
















// one function inside another function -- nested function
//closures
function outer ()
{
    var a = 0;
    function inner ()
    {
        a++;
        debugger;
        console.log(a)
    }
    return inner
}
var result = outer();
console.log(result)
// we use closure in techniques like memorization
result() //1

result()  //2
//closure -- inner functions remembers outer function values even after
// outer function execution ended





















function add (a, b)
{
    return a + b;
}
function something (a, b, c,x)
{
    console.log(x) 
  console.log(x(a,b)+c)  
}
something(2,5,6,add)


function bahar ()
{
    var x = 25;
   return  function andhar ()
    {
       return --x;
    }
}
let res1 = bahar();
console.log(res1())



















