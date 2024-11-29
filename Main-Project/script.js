import { addcartfn } from "./common.js";
const mainDiv = document.getElementById('products');
const fetchData = (url) =>
{
    fetch(url)
        .then((res) => res.json())
        .then((data)=>displayData(data.products))
        .catch((err)=>console.log(err))   
}







fetchData("https://dummyjson.com/products")
const displayData = (data) =>
{
    mainDiv.textContent=""
    data.forEach((val, ind) =>
    {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product')
        const productImage = document.createElement('img');
        productImage.src = val.thumbnail;
        productImage.alt= val.title
        const productTitle = document.createElement('h3');
        productTitle.textContent = val.title;
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ₹${val.price}`;
        const productLink = document.createElement('a');
        productLink.appendChild(productTitle)
        productLink.href=`./product.html?pid=${val.id}`
        const addCartButton = document.createElement('button');
        addCartButton.textContent = "Add to Cart 🛒"
        addCartButton.addEventListener('click',()=>addcartfn(val))
        productDiv.append(productImage, productLink, productPrice, addCartButton);
        mainDiv.appendChild(productDiv)
   })  
}
document.getElementById('limit').addEventListener('input', (event) =>
{
   fetchData(`https://dummyjson.com/products?limit=${event.target.value}`)
})
document.getElementById('sort').addEventListener('input', (event) =>
{
    fetchData(`https://dummyjson.com/products?sortBy=title&order=${event.target.value}`)
})
document.getElementById("category").addEventListener('click', (event) =>
{
    fetchData(`https://dummyjson.com/products/category/${event.target.value}`)
})
document.getElementById("searchBtn").addEventListener("click", () =>
{
    const val= document.getElementById('search')
    fetchData(`https://dummyjson.com/products/search?q=${val.value}`)
    val.value=""
})
