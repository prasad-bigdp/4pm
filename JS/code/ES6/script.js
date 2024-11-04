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
function something ()
{
    if (true)
    {
        let k=25
    }
    console.log("k="+k)
}
something()





