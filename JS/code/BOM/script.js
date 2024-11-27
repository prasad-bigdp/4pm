console.log(this)
// Window object is called Browser Object. it is used to perform Browser level operations such as console,fetch,document,timers etc..,
//location - url
console.log(window.location.href, window.location)
// document.getElementById('btn').addEventListener('click', function ()
// {
    // window.location.replace('https://www.google.com')
// })
//history-
console.log(window.history.forward())
// geolocation
window.navigator.geolocation.getCurrentPosition((x) =>
{
 console.log(x.coords.latitude, x.coords.longitude,x.timestamp)   
}, (err) =>
{
   console.log(err.PERMISSION_DENIED) 
})
//mediaDevices
document.getElementById('btn').addEventListener('click', function ()
{
    window.navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((val) =>
        {
            console.log(val)
            document.getElementById('vd').srcObject = val;
        })
    .catch((err)=>console.log(err))
})
//webRTC -- part of JS to oncentrate on mostly video,audio,streaming,messaging









