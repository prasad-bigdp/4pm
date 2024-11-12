function fetchData ()
{
    console.log("API started")
    fetch("https://official-joke-api.appspot.com/random_joke")
			.then(function (res) {
				return res.json()
			})
			.then(function (data) {
				console.log(data)
			})
			.catch(function (err) {
				console.log(err)
			})
    
}
fetchData()