// OpenWeather Info
const openWeatherKey = 'Enter Open Weather API Key here';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

// Render functions
const renderForecast = (day) => {
  const weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
};


const executeSearch = () => {
  $weatherDiv.empty();
  $destination.empty();
  $container.css('visibility', 'visible');
  getForecast().then(forecast => renderForecast(forecast));
  return false;
};

$submit.click(executeSearch);