const API_KEY = "588eb3c715f5c8e9fe1b5fdf6bac1665"
// =========== add id and key strings ===========

function handleFormSubmit(event) {
  console.log("== handleFormSubmit ==")
  event.preventDefault();
  let city = document.getElementById("city").value;
  console.log("city:", city);
  fetchCurrentWeather(city);
}
  //handle submit event

function fetchCurrentWeather(city) {
  console.log("== fetchCurrentWeather ==")
  console.log("city:", city);

  let weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
  weatherUrl += city;
  weatherUrl += "&APPID=";
  weatherUrl += API_KEY;
  console.log("weatherUrl:", weatherUrl);

  fetch(weatherUrl)
    .then( (weatherData) => {
      console.log("== then1 ==");
      //console.log("response:", response); --> checks for response
      return weatherData.json()
    })
    .catch( error => {
      console.log("== catch1 ==");
      console.error('Oh no! ${error}')
    })
    .then( weatherJson => {
      console.log("== then2 ==");
      console.log(weatherJson);
      return weatherJson
    })
    .catch( error => {
      console.log("== catch2 ==");
      console.error('Ruh-roh! Could not convert the json: ${error}')
    })
    .then( weatherJson => {
      console.log("== then3 ==");
      displayCurrentWeather(weatherJson);
    })
  //fetch current weather based on city
}

function displayCurrentWeather(weatherJson) {
  console.log("== displayCurrentWeather ==")
  console.log("weatherJson:", weatherJson);
  console.log("weatherJson.city.name:", weatherJson.city.name);
  console.log("weatherJson.city.main:", weatherJson.city.main);
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  console.log("== fetchFiveDayForecast ==")
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  console.log("== displayFiveDayForecast ==")
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  console.log("== createChart ==")
  //Bonus: render temperature chart using five day forecast data and ChartJS
}


document.addEventListener('DOMContentLoaded', function() {
  console.log ("-- DOMContentLoaded --");
  document.getElementById("submitBtn").addEventListener("click", handleFormSubmit);
  console.log("document.getElementById('submitBtn'):", document.getElementById("submitBtn"))
  //add event listener here for form submission
})
