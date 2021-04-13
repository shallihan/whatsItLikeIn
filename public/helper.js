  const createWeatherHTML = (currentDay) => {
    console.log(currentDay)
    return `<h2>${weekDays[(new Date()).getDay()]}</h2>
          <h2>Temperature: ${kelvinToCelcius(currentDay.main.temp)}&deg;C</h2>
          <h2>Condition: ${currentDay.weather[0].description}</h2>`;
  }

  const createPhrase = () => {
          return `<h1>${weatherPhrases[0]}<h1>`
      
  }

  const kelvinToCelcius = k => (k - 273.15).toFixed(0);