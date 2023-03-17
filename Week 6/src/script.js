//Week 5 - Homework

//Show current location and temperature after clicking the pin button

function showTemp(weather) {
  let temperature = Math.round(weather.data.main.temp);
  let location = weather.data.name;
  let h1 = document.querySelector(`h1`);
  h1.innerHTML = `${location}`;

  let temp = document.querySelector(`#temp-celsius`);
  temp.innerHTML = `${temperature}`;

  let description = weather.data.weather[0].description;
  let h3 = document.querySelector(`#weather-now`);
  h3.innerHTML = `${description}`;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = `0e2dc69e2a1c111f6d36578cd53fff21`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&&units=metric`;

  axios.get(url).then(showTemp);
}

function displayCurrent(location) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector(`button`);
button.addEventListener("click", displayCurrent);

// Show current temperature when searching for a city

function changeTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector(`#temp-celsius`);
  temp.innerHTML = `${temperature}`;

  let description = response.data.weather[0].description;
  let h3 = document.querySelector(`#weather-now`);
  h3.innerHTML = `${description}`;
}

function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");

  let currentyCity = document.querySelector("#current-city");
  currentyCity.innerHTML = city.value;

  let weatherCity = city.value;
  let apiKey = `0e2dc69e2a1c111f6d36578cd53fff21`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&units=metric&appid=${apiKey}`;

  axios.get(url).then(changeTemp);
}

let searchCity = document.querySelector(`#search-form`);
searchCity.addEventListener("submit", changeCity);
