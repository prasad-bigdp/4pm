/* first goal is to take pid value from URL */
let params = new URLSearchParams(window.location.search)
let pid = params.get('pid')
const mainDiv= document.getElementById('main')
const fetchData = async () =>
{
    const res = await fetch(`https://dummyjson.com/products/${pid}`);
    const data = await res.json();
    displayData(data)
}
fetchData()
const displayData=(data)=>{
    const leftDiv = document.createElement('div')
    leftDiv.classList.add('leftDiv')
    const image = document.createElement('img');
    image.src = data.thumbnail;
    image.alt= data.title
    leftDiv.appendChild(image)
    const rightDiv = document.createElement("div")
    rightDiv.classList.add("rightDiv")
    const heading = document.createElement('h2');
    heading.textContent = data.title;
    const desc = document.createElement('p');
    desc.textContent = data.description
    const price = document.createElement('p');
    price.textContent="₹"+data.price
    const button = document.createElement('button')
    button.textContent="add to cart"
    rightDiv.append(heading,desc,price,button)
    mainDiv.append(leftDiv,rightDiv)
}