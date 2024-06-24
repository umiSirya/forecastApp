function updateWeather(response) {
  let temperature = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");

  temperature.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
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
