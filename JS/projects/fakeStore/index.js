const mainDiv = document.getElementById('store');
document.querySelector('.btn1').addEventListener('click', function ()
{
    getCategory('electronics')
})
document.querySelector(".btn2").addEventListener("click", function () {
	getCategory("men's clothing")
})
document.querySelector(".btn3").addEventListener("click", function () {
	getCategory("women's clothing")
})
document.querySelector(".btn4").addEventListener("click", function () {
	getCategory("jewelery")
})
function getCategory(cat) {
	fetch(`https://fakestoreapi.com/products/category/${cat}`)
		.then(function (res) {
			return res.json()
		})
		.then(function (data) {
			console.log(data)
			displayData(data)
		})
		.catch(function (err) {
			console.log(err)
		})
}

function getData ()
{
    fetch("https://fakestoreapi.com/products")
        .then(function (res) { return res.json() })
        .then(function (data) { console.log(data); displayData(data)})
        .catch(function(err){console.log(err)})
}
getData();
function displayData (values)
{
    mainDiv.textContent=''
    values.forEach(function (val)
    {
        const myDiv = document.createElement('div');
        myDiv.classList.add('product')
        const myImage = document.createElement('img');
        myImage.src = val.image;
        myImage.alt = val.title;
        const mytitle = document.createElement('h1');
        mytitle.textContent = val.title;
        const myPrice = document.createElement('p');
        myPrice.textContent = "₹" + val.price
        myDiv.append(myImage, mytitle, myPrice);
        mainDiv.appendChild(myDiv)
   })
}