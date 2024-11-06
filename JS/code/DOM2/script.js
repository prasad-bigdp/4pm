const quality = document.getElementById('quality');
function change ()
{
    if (quality.textContent == "good")
    {
        quality.textContent = "bad";
        quality.style.color = "red"
        quality.classList.add('prasad')
    }
    else
    {
        quality.textContent = "good"
        quality.style.color = "green"
        quality.classList.remove("prasad")
    }
}