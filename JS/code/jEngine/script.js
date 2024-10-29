console.log(a); //Hoisting -- u can use the value before its declaration //callstack,execution content
var a = 5;
var c = 5;
function display ()
{
    console.log(z)
    var z = 5;
    console.log(z)
}
display()