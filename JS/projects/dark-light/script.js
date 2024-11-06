const btn= document.getElementById('darkLight')
function change ()
{
    if (btn.textContent == "Switch to dark mode")
    {
        btn.textContent = "Switch to light mode"
        document.body.classList.add('dark')
    }
    else
    {
        btn.textContent = "Switch to dark mode"
				document.body.classList.remove("dark")
    }
}