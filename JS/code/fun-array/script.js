function x() {
    let basicSalary = 20000
    debugger;
	function y(promotion) {
        basicSalary += promotion
        debugger;
		console.log("y called")
	}
	return y
}
debugger;
let result = x()
console.log(result)
result(50000)



function vani (x)
{
    console.log(x) //ravi function
    x()
}
function ravi ()
{
    console.log("thanks for calling")
}
vani(ravi)


function test (a, b,c)
{
    let x = c(a);
    let y = c(b)
    console.log(x+y)
}
function square (p)
{
    return p * p;
}
test(3,4,square)














