// console.log("basic promises");
// function doSomething() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			// Other things to do before completion of the promise
// 			console.log("Did something")
// 			// The fulfillment value of the promise
// 			resolve("https://example.com/")
// 		}, 5000)
// 	})
// }
// doSomething()
// .then(function (ans)
// {
//     console.log(ans)
// })
//     .catch(function (err)
//     {
//     console.log(err)
//     })
// console.log("hiiiiiiii")




let p = new Promise(function (resolve, reject)
{
	let x = false;
	if (x)
	{
		setTimeout(function ()
		{
			resolve("take the chocolate")
		},5000)
	}
	else
	{
		reject("I don't want to give")
	}
})
p
	.then(function (val)
	{
	   console.log("i received "+val)
    })
	.catch(function (err)
	{
	console.log(err)
	})
	.finally(function ()
	{
	   console.log("i run always")
   })



/* create a promise which prints hello world 
after 10 seconds */



const myPromise = new Promise(function (resolve, reject)
{
	resolve(10)
})

myPromise
	.then(function (val) //10
    {
		console.log(val);
		return val * 2; //20
	})
	.then(function (val)//20
	{
		console.log(val);
		return val * 2;//40
	})
	.then(function (val)//40
	{
		console.log(val)
	})






