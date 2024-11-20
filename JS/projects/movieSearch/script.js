const resultsDiv = document.getElementById('results');
const button = document.getElementById('btn');
const input = document.getElementById('myInput')
button.addEventListener('click', getMovies);
function getMovies ()
{
    const movieName = input.value;
    fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=e980a8b4`)
        .then(function (res) { return res.json() })
        .then(function (data) { displayData(data.Search) })
        .catch(function (err) { console.log(err) })
}
function displayData (data)
{
    resultsDiv.textContent=''
    data.forEach(function (val)
    {
        const movieDiv = document.createElement("div")
		movieDiv.classList.add("movie")
		const movieImage = document.createElement("img")
        movieImage.src = val.Poster;
        movieImage.alt = val.Title;
        const movieTitle = document.createElement("h2");
        movieTitle.textContent = val.Title;
        movieDiv.append(movieImage, movieTitle)
        resultsDiv.appendChild(movieDiv)
    })
    
}