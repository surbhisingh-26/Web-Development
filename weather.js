const apiKey = 'your_api_key_here'; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherResult = document.getElementById('weatherResult');

const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const condition = document.getElementById('condition');

searchButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name!');
  }
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    updateWeatherUI(data);
  } catch (error) {
    alert(error.message);
  }
}

function updateWeatherUI(data) {
  cityName.textContent = data.name;
  temperature.textContent = data.main.temp;
  humidity.textContent = data.main.humidity;
  condition.textContent = data.weather[0].description;

  weatherResult.classList.remove('hidden');
}
