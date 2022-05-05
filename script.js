let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentTime = new Date();
let dayNow = currentTime.getDay();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentTimeNow = document.querySelector("#current-time");
currentTimeNow.innerHTML = `${days[dayNow]} ,  ${hours} : ${minutes}`;
// challlenge 2
function showTemperature(response) {
  console.log(response);
  let city = document.querySelector("#cities");
  city.innerHTML = response.data.name;
  let degrees = document.querySelector("#degrees");
  degrees.innerHTML = Math.round(response.data.main.temp);
  let currentDescription = document.querySelector("#current-description");
  currentDescription.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  let message = response.data.main.humidity;
  humidity.innerHTML = `Humidity: ${message} %`;
  let wind = document.querySelector("#wind");
  let feedback = Math.round(response.data.wind.speed);
  wind.innerHTML = `Wind: ${feedback} km/h`;
}

function search(city) {
  let apiKey = "b00e2756e494f089ab514ad884e85b6e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}
let searchInput = document.querySelector("#search-input");
searchInput.addEventListener("submit", handleSubmit);

function currentName(response) {
  let myCity = document.querySelector("#cities");
  myCity.innerHTML = response.data.name;
  let temp = document.querySelector("#degrees");
  temp.innerHTML = Math.round(response.data.main.temp);
  let weatherDescription = document.querySelector("#current-description");
  weatherDescription.innerHTML = response.data.weather[0].description;
  let humidityNow = document.querySelector("#humidity");
  let currentMessage = response.data.main.humidity;
  humidityNow.innerHTML = `Humidity: ${currentMessage} %`;
  let windNow = document.querySelector("#wind");
  let currentFeedback = Math.round(response.data.wind.speed);
  windNow.innerHTML = `Wind: ${currentFeedback} km/h`;
}
function currentButton() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("#current-button");
button.addEventListener("click", currentButton);

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "b00e2756e494f089ab514ad884e85b6e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentName);
}
search("New York");
