const btn = document.getElementById('btn');
const mainDiv = document.getElementById("random");
function fetchData ()
{
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(function (res) { return res.json() })
        .then(function (data)
        {
            console.log(data);
            display(data);
         })
        .catch(function(err){console.log(err)})
}
fetchData()
setInterval(fetchData, 5000)

/* joke={
  "type": "general",
  "setup": "What do you call a singing Laptop?",
  "punchline": "A Dell",
  "id": 7
}*/
function display (joke)
{
    mainDiv.textContent=''
    const setUp = document.createElement('h2');
    setUp.textContent= joke.setup
    const punchLine = document.createElement('p')
    punchLine.textContent = joke.punchline
    mainDiv.append(setUp,punchLine)
}