console.log(document)
/* document object contains a copy of your HTML */
/* understanding DOM requires three steps */
/* 1. selection */
/* 2. manipulation */
/* 3. creation */
// console.log(document.getElementsByTagName('h1'))
// console.log(document.getElementsByClassName('heading'))
// console.log(document.getElementById('head'))
// console.log(document.querySelector('h1'))
// console.log(document.querySelectorAll("h1"))
function fun ()
{
     document.getElementById("head").textContent = "Hello Prasad!"
}
let c = 0;
function incr ()
{
    c++;
    document.getElementById('count').textContent = c;
}








