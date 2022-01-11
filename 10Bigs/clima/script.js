const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherLocation(city){
    const respt = await fetch(url(city), {origin: "cors"});
    const respData = await respt.json();
    
    addWeatherPage(respData);
}

function addWeatherPage(data){
    const temp = KToC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
        <h2>${temp}ºC</h2>
        <small>in ${search.value}</small>
    `;

    main.innerHTML = "";

    main.appendChild(weather);
}

function KToC(K){
    return (K - 273.15).toFixed(2);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = search.value;

    if(city){
        getWeatherLocation(city);
    }
})