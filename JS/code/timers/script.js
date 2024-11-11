// function display ()
// {
//     console.log("hello async")
// }
// setTimeout(display, 1)
// for (let i = 0; i <= 9999; i++)
// {
//     console.log("hello world")
// }
let c = 0;
let k= setInterval(function ()
{
    c++;
    if (c == 5)
    {
        clearInterval(k)
    }
    console.log("hello")
}, 1)
let x=setTimeout(function ()
{
    console.log("Bye")
}, 20000)
console.log("hiiiiiii")
setTimeout(clearTimeout(x),10000)