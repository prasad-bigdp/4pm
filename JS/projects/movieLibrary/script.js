const mainDiv = document.getElementById("movieLibrary");
const movies = [
	{
		imageLink:
			"https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg",
		title: "RRR",
	},
	{
		imageLink:
			"https://img.etimg.com/thumb/width-640,height-480,imgsize-37508,resizemode-75,msid-106669368/news/new-updates/another-fan-on-his-way-to-see-kgf-actor-yash-dies/as-the-celebrated-kannada-actor-yash-turns-38-this-january-8th.jpg",
		title: "KGF",
	},
	{
		imageLink:
			"https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
		title: "SALAAR",
	},
	{
		imageLink:
			"https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg",
		title: "RRR",
	},
	{
		imageLink:
			"https://img.etimg.com/thumb/width-640,height-480,imgsize-37508,resizemode-75,msid-106669368/news/new-updates/another-fan-on-his-way-to-see-kgf-actor-yash-dies/as-the-celebrated-kannada-actor-yash-turns-38-this-january-8th.jpg",
		title: "KGF",
	},
	{
		imageLink:
			"https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
		title: "SALAAR",
	},
	{
		imageLink:
			"https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg",
		title: "RRR",
	},
	{
		imageLink:
			"https://img.etimg.com/thumb/width-640,height-480,imgsize-37508,resizemode-75,msid-106669368/news/new-updates/another-fan-on-his-way-to-see-kgf-actor-yash-dies/as-the-celebrated-kannada-actor-yash-turns-38-this-january-8th.jpg",
		title: "KGF",
	},
	{
		imageLink:
			"https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
		title: "SALAAR",
	},
	{
		imageLink:
			"https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg",
		title: "RRR",
	},
	{
		imageLink:
			"https://img.etimg.com/thumb/width-640,height-480,imgsize-37508,resizemode-75,msid-106669368/news/new-updates/another-fan-on-his-way-to-see-kgf-actor-yash-dies/as-the-celebrated-kannada-actor-yash-turns-38-this-january-8th.jpg",
		title: "KGF",
	},
	{
		imageLink:
			"https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
		title: "SALAAR",
	},
	{
		imageLink:
			"https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg",
		title: "RRR",
	},
	{
		imageLink:
			"https://img.etimg.com/thumb/width-640,height-480,imgsize-37508,resizemode-75,msid-106669368/news/new-updates/another-fan-on-his-way-to-see-kgf-actor-yash-dies/as-the-celebrated-kannada-actor-yash-turns-38-this-january-8th.jpg",
		title: "KGF",
	},
	{
		imageLink:
			"https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
		title: "SALAAR",
	},
    	{
		imageLink:
			"https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg",
		title: "RRR",
	},
	{
		imageLink:
			"https://img.etimg.com/thumb/width-640,height-480,imgsize-37508,resizemode-75,msid-106669368/news/new-updates/another-fan-on-his-way-to-see-kgf-actor-yash-dies/as-the-celebrated-kannada-actor-yash-turns-38-this-january-8th.jpg",
		title: "KGF",
	},
	{
		imageLink:
			"https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
		title: "SALAAR",
	},
    
]
movies.forEach(function (m)
{
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('myMovie')
    const movieImage = document.createElement('img');
    movieImage.src = m.imageLink;
    movieImage.alt=m.title
    const movieTitle = document.createElement('h2')
    movieTitle.textContent = m.title;
    movieDiv.appendChild(movieImage);
    movieDiv.appendChild(movieTitle);
    mainDiv.appendChild(movieDiv)
})



