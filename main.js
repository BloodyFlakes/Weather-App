let apiKey = "66976afc25676647f181371c5e52345a";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let weather = document.querySelector(".weather");
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let er = document.querySelector(".error");

async function checkWeather(city) {
  let response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    er.style.cssText = "display: block";
    weather.style.cssText = "display: none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°c`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    weather.style.cssText = "display: block";
    er.style.cssText = "display: none";
  }
}
searchBtn.addEventListener("click", () => {
  if (searchBox.value.toLowerCase() == "rashed") {
    // Hardcoded weather for "Rashed"
    weather.style.cssText = "display: block";
    document.querySelector(".city").innerHTML = "Maram Heart";
    document.querySelector(".temp").innerHTML = 69 + `°C`;
    document.querySelector(".humidity").innerHTML = 3 + `%`;
    document.querySelector(".wind").innerHTML = 8 + ` km/h`;
    weatherIcon.src = "images/clouds.png";
    er.style.cssText = "display: none";
  } else if (searchBox.value.toLowerCase() == "maram") {
    // Hardcoded weather for "Maram"
    weather.style.cssText = "display: block";
    document.querySelector(".city").innerHTML = "Rashed Heart";
    document.querySelector(".temp").innerHTML = 69 + `°C`;
    document.querySelector(".humidity").innerHTML = 13 + `%`;
    document.querySelector(".wind").innerHTML = 7 + ` km/h`;
    weatherIcon.src = "images/clear.png";
    er.style.cssText = "display: none";
  } else {
    // Fetch weather for user input
    checkWeather(searchBox.value);
  }
});
