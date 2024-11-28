const cartMain = document.getElementById('cart')
const items = JSON.parse(localStorage.getItem('cartItems'))
console.log(items)
items.forEach((i) =>
{
    const div = document.createElement('div');
    div.classList.add('cartItem')
    const image = document.createElement('img');
    image.src = i.thumbnail;
    image.alt = i.title;
    const title = document.createElement('h3');
    title.textContent = i.title;
    const price = document.createElement('p');
    price.textContent="₹"+i.price
    const deleteButton = document.createElement('button');
    deleteButton.textContent="❎"
    div.append(image, title, price, deleteButton)
    cartMain.append(div)
})
function updatePrice ()
{
    let total = items.reduce((prev, curr) => prev + curr.price, 0)
    document.getElementById('price').textContent=total
}
updatePrice()