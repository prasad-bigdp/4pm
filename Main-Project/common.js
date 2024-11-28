let count = document.getElementById('count');
let c = 0;
let items=[]
function addcartfn (item)
{
    c++;
    count.textContent = c;
    items.push(item)
    localStorage.setItem('cartCount', c)
    localStorage.setItem('cartItems',JSON.stringify(items))
}
export { addcartfn }