const mainDiv = document.getElementById('mainDiv');
const fetchData = async () =>
{
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    displayData(data.recipes)
}
fetchData()
const displayData = (recipes) =>
{
    recipes.forEach((i)=>
    {
        const div = document.createElement('div')
        div.classList.add('recipe')
        const image = document.createElement('img');
        image.src = i.image;
        image.alt= i.name
        const title = document.createElement('h2');
        title.textContent = i.name;
        div.append(image, title);
        mainDiv.appendChild(div)
    })
}