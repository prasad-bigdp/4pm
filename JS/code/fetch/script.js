console.log("before fetch");
function run ()
{
    fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then(function (res) {
                console.log(res);
                return res.json();
            })
        .then(function (data)
        {
            console.log(data)
            document.getElementById('para').textContent=data.title
        })
			.catch(function (err) {
				console.log(err)
			})
}
run()