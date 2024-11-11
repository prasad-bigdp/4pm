const timer = document.getElementById('time');
setInterval(function ()
{
    let dt = new Date()
   timer.textContent = dt.toLocaleTimeString() 
},1000)