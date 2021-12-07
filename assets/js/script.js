// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// define variables
var latitude
var longitude
var apiKey
var futureForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
// replac lat, lon, and api key with actual values

// Display date to html
// User types in city and clicks a button - Event Listener

document.getElementById("search").addEventListener("click", fetchCurrentWeather);
function fetchCurrentWeather () {

}

// User City selection needs to be stored in variable
// API key and query string URL and store in a variable
// fetch current weather info from API
// add the current weather date to each html element - temp, humidity, wind, UV 
// store longitude and latitude of selected city in a variable
// fetch 5-day weather forecast from API
// add the forecast to the html element
// create variable for city history and store in local storage
// each city in the history needs a click event listener
// when clicked call fetch data functions and display html functions

