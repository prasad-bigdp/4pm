console.log("basic promises");
function doSomething() {
	return new Promise((resolve) => {
		setTimeout(() => {
			// Other things to do before completion of the promise
			console.log("Did something")
			// The fulfillment value of the promise
			resolve("https://example.com/")
		}, 5000)
	})
}
doSomething()
.then(function (ans)
{
    console.log(ans)
})
    .catch(function (err)
    {
    console.log(err)
    })
console.log("hiiiiiiii")