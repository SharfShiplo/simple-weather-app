// API_Key from Maps api

let API_Key = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = async (city) => {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const full_url = `${url}?q=${city}&appid=${API_Key}&units=iperial`;
  const weatherPromise = fetch(full_url);
  return await weatherPromise.then((response) => {
    return response.json();
  });
};
searchCity = () => {
  const city = document.getElementById("city-input").value;
  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
    })
    .catch((error) => {
      alert("The city is unknown!");
    });
};

showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp + "°F";
  document.getElementById("min-temp").innerText =
    weatherData.main.temp_min + "°F";
  document.getElementById("max-temp").innerText =
    weatherData.main.temp_max + "°F";
  document.getElementById("wind-speed").innerText =
    weatherData.wind.speed + " km/h";
  document.getElementById("humidity").innerText =
    weatherData.main.humidity + "%";
};
