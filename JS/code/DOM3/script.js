console.log(document)
const modalBox = document.getElementById('modal')
function openModal ()
{
  modalBox.style.display='block'
}
function closeModal ()
{
    modalBox.style.display='none'
}
const inp = document.getElementById('inp')
const button= document.getElementById('btnShow')
function showPwd ()
{
   if(inp.type=="password")
   {
       inp.type = "text"
       button.textContent="hide"
    }
   else
   {
       inp.type = "password";
              button.textContent = "show"

    }
}