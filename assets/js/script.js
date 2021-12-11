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

var apiKey ="79ca4c3eecbe1377c331363aeee21c9c"
// temperature conversion function
// conversion rate (kelvin − 273.15) × 9/5 + 32 = temp in fahrenheit
function convertTemp (kelvin) {
var tempFahrenheit = (kelvin - 273.15) * 9/5 + 32;
tempFahrenheit = tempFahrenheit.toFixed(2);
return tempFahrenheit
}
// var futureForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
// replace lat, lon, and api key with actual values

// Display date to html
// User types in city and clicks a button - Event Listener

document.getElementById("search").addEventListener("click", fetchCurrentWeather);
function fetchCurrentWeather (event) {
    console.log("hi")
    event.preventDefault()
// User City selection needs to be stored in variable
var city = document.getElementById("city").value
var currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
fetch(currentWeather).then(function(response) {
    return response.json()
})
.then(function(data) {
console.log(data)
var latitude = data.coord.lat
var longitude = data.coord.lon
var wind = data.wind.speed
var icon = data.weather[0].icon
var currentTempF = convertTemp (data.main.temp)
var humidity = data.main.humidity
document.getElementById("windspeed").textContent = wind
document.getElementById("icon").setAttribute("src",`http://openweathermap.org/img/wn/${icon}@2x.png` )
document.getElementById("currentTempF").textContent = `Current Temperature: ${currentTempF} degrees`
document.getElementById("humidity").textContent = humidity


var futureForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
fetch(futureForecast)
.then(function(secondResponse) {
    return secondResponse.json()
})
.then(function(secondData) {
    console.log(secondData)
})
.catch(function(error) {
    console.log(error)
})
})
}


// API key and query string URL and store in a variable
// fetch current weather info from API
// add the current weather date to each html element - temp, humidity, wind, UV 
// store longitude and latitude of selected city in a variable
// fetch 5-day weather forecast from API
// add the forecast to the html element
// create variable for city history and store in local storage
// each city in the history needs a click event listener
// when clicked call fetch data functions and display html functions

