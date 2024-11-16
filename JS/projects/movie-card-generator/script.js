const imageInput = document.getElementById('inp1');
const titleInput = document.getElementById('inp2');
const mainDiv = document.getElementById('movieDiv')
function display ()
{
    const image = document.createElement('img');
    image.src =imageInput.value
    image.alt = titleInput.value;
    const title = document.createElement('h1');
    title.textContent = titleInput.value;
    mainDiv.append(image, title)
    imageInput.value = "";
    titleInput.value=''
}