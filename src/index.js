function updateWeather(response) {
  let temperature = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let description = document.querySelector("#weather-description");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let time = document.querySelector("#time");

  // Create a date object from the response time
  let date = new Date(response.data.time * 1000);

  // Update the UI elements with the data from the response
  temperature.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed} km/h`;

  // Pass the created date object to the formatDate function
  time.innerHTML = formatDate(date);
}

function formatDate(date) {
  let minutes = date.getMinutes(); // Use the date object passed as an argument
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  // Ensure two digits for minutes
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "b0e75af401t952a8ab0ba812a00o3fdc";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeather);
}

function searchsubmitted(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchsubmitted);
searchCity("Nairobi");
