document.title = "Weather Application";
// searchBar.addEventListener('keydown', (event) => {
//     if(event.key === 'Enter'){
//         cityName.textContent = searchBar.value;
//         cityName.style.textTransform = 'capitalize';

//         searchBar.value='';
//     }
// })


// start
const APIKEY = "";
const URL = "https://api.openweathermap.org/data/2.5/weather";

const searchBar = document.querySelector("#search-bar");
const searchBtn = document.querySelector(".search-btn");

const checkWeather = async (city = '') => {
    const res = await fetch(`${URL}?q=${city}&units=metric&appid=${APIKEY}`);
    let data = await res.json();
    let tempValue = data.main.temp;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let cityName = data.name;
    return {
        cityName,
        tempValue,
        humidity,
        wind
    };
}

searchBtn.addEventListener('click', () => {
    const city = searchBar.value.trim();

    if (city === "") return;

    checkWeather(city).then(data => {
        const { cityName, tempValue, humidity, wind } = data;

        const city = document.querySelector(".city-name");
        city.textContent = cityName;

        const temp = document.querySelector(".temp-value");
        temp.textContent = tempValue;

        const humidityValue = document.querySelector(".humidity-value");
        humidityValue.textContent = humidity;

        const windValue = document.querySelector(".wind-value");
        windValue.textContent = wind;
    })

    searchBar.value = '';
})
