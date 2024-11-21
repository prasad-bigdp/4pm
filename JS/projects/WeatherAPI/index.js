const resultsDiv = document.getElementById('results');
const cityInput = document.getElementById('inp');
const btn = document.getElementById('btn');
async function fetchData ()
{
    const cityName = cityInput.value;
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c71d877fa4098a434d8e1032df84812f`);
    const data = await res.json();
    console.log(data)
    displayData(data)
}
btn.addEventListener('click', fetchData)
function displayData (data)
{
    const title = document.createElement('h2');
    title.textContent = data.weather.description;
    const temp = document.createElement('p');
    temp.innerHTML = `<b>Temparature:</b> ${data.main.temp} <sup>o</sup>c`
    const pressure = document.createElement('p');
    pressure.textContent = "Pressure: " + data.main.pressure+"Hz"
    resultsDiv.append(title, temp,pressure)
}