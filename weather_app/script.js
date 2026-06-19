// ============================================================
// STATE
// Stores the last fetched data so the unit toggle can re-render
// without making a new API call.
// ============================================================

let unit            = 'C';   // current temperature unit ('C' or 'F')
let lastWeatherData = null;  // last full API response object
let lastCityName    = '';    // last resolved city name
let lastCountry     = '';    // last resolved country name


// ============================================================
// GET WEATHER DESCRIPTION
// Converts a WMO numeric weather code into a human-readable
// description, an emoji icon, and a CSS animation class.
// ============================================================

function getWeatherDescription(code) {
  if (code === 0)                       return { description: 'Clear sky',     icon: '☀️',  animClass: 'anim-spin'   };
  if (code >= 1  && code <= 3)          return { description: 'Partly cloudy', icon: '⛅',  animClass: 'anim-pulse'  };
  if (code === 45 || code === 48)       return { description: 'Foggy',          icon: '🌫️', animClass: 'anim-pulse'  };
  if (code >= 51 && code <= 55)         return { description: 'Drizzle',        icon: '🌦️', animClass: 'anim-bounce' };
  if (code >= 61 && code <= 65)         return { description: 'Rain',           icon: '🌧️', animClass: 'anim-bounce' };
  if (code >= 71 && code <= 75)         return { description: 'Snow',           icon: '❄️',  animClass: 'anim-pulse'  };
  if (code >= 80 && code <= 82)         return { description: 'Rain showers',   icon: '🌦️', animClass: 'anim-bounce' };
  if (code === 95)                      return { description: 'Thunderstorm',   icon: '⛈️', animClass: 'anim-pulse'  };
  if (code === 96 || code === 99)       return { description: 'Thunderstorm',   icon: '⛈️', animClass: 'anim-pulse'  };
  return                                       { description: 'Unknown',        icon: '🌡️', animClass: ''            };
}


// ============================================================
// CONVERT TEMPERATURE
// Returns a formatted temperature string in the current unit.
// ============================================================

function convertTemp(celsius) {
  if (unit === 'C') return celsius.toFixed(1) + '°C';
  return (celsius * 9 / 5 + 32).toFixed(1) + '°F';
}


// ============================================================
// GET COORDINATES
// Calls the Open-Meteo Geocoding API to turn a city name into
// latitude, longitude, and resolved city/country strings.
// Throws an error if the city cannot be found.
// ============================================================

async function getCoordinates(city) {
  const url =
    'https://geocoding-api.open-meteo.com/v1/search?name=' +
    encodeURIComponent(city) +
    '&count=1&language=en&format=json';

  const response = await fetch(url);
  if (!response.ok) throw new Error('Network error — could not reach the geocoding service.');

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error('City "' + city + '" was not found. Check the spelling and try again.');
  }

  return {
    name:    data.results[0].name,
    country: data.results[0].country,
    lat:     data.results[0].latitude,
    lon:     data.results[0].longitude
  };
}


// ============================================================
// GET WEATHER
// Calls the Open-Meteo Forecast API with latitude and longitude
// to fetch current conditions and a 5-day daily forecast.
// Returns the full parsed JSON response.
// ============================================================

async function getWeather(lat, lon) {
  const url =
    'https://api.open-meteo.com/v1/forecast' +
    '?latitude='  + lat +
    '&longitude=' + lon +
    '&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,uv_index' +
    '&daily=temperature_2m_max,temperature_2m_min,weather_code' +
    '&timezone=auto';

  const response = await fetch(url);
  if (!response.ok) throw new Error('Network error — could not fetch weather data.');

  return await response.json();
}


// ============================================================
// DISPLAY CURRENT WEATHER
// Updates the hero section and stats row with the current
// weather data from the API response object.
// ============================================================

function displayCurrentWeather(data, cityName, country) {
  const current = data.current;
  const weather = getWeatherDescription(current.weather_code);

  // Animated icon — apply the correct CSS animation class
  const iconEl = document.getElementById('weatherIcon');
  iconEl.textContent = weather.icon;
  iconEl.className = 'weather-icon ' + weather.animClass;

  // City and country
  document.getElementById('cityName').textContent  = cityName;
  document.getElementById('country').textContent   = country;

  // Temperature and description
  document.getElementById('temperature').textContent  = convertTemp(current.temperature_2m);
  document.getElementById('description').textContent  = weather.description;

  // Stats — UV index can be null at night, so fall back to N/A
  document.getElementById('humidity').textContent  = current.relative_humidity_2m + '%';
  document.getElementById('windSpeed').textContent = current.wind_speed_10m + ' km/h';
  document.getElementById('uvIndex').textContent   =
    (current.uv_index !== null && current.uv_index !== undefined)
      ? current.uv_index.toFixed(1)
      : 'N/A';

  // Reveal the sections
  document.getElementById('hero').classList.remove('hidden');
  document.getElementById('stats').classList.remove('hidden');
}


// ============================================================
// DISPLAY FORECAST
// Builds and inserts 5 forecast day cards into #forecastGrid
// using the daily array from the API response.
// ============================================================

function displayForecast(daily) {
  const grid = document.getElementById('forecastGrid');
  grid.innerHTML = '';

  for (var i = 0; i < 5; i++) {
    // Parse the date string as noon local time to avoid timezone shifts
    var date    = new Date(daily.time[i] + 'T12:00:00');
    var dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
    var weather = getWeatherDescription(daily.weather_code[i]);

    var card = document.createElement('div');
    card.className = 'forecast-card';
    card.innerHTML =
      '<span class="forecast-day">'  + dayName                                   + '</span>' +
      '<span class="forecast-icon">' + weather.icon                              + '</span>' +
      '<span class="forecast-high">' + convertTemp(daily.temperature_2m_max[i]) + '</span>' +
      '<span class="forecast-low">'  + convertTemp(daily.temperature_2m_min[i]) + '</span>';

    grid.appendChild(card);
  }

  document.getElementById('forecast').classList.remove('hidden');
}


// ============================================================
// SHOW ERROR
// Displays a clear error message on the page and hides weather
// sections so stale data is not visible alongside the error.
// ============================================================

function showError(message) {
  var errorEl = document.getElementById('errorMsg');
  errorEl.textContent = '⚠️ ' + message;
  errorEl.classList.remove('hidden');

  document.getElementById('hero').classList.add('hidden');
  document.getElementById('stats').classList.add('hidden');
  document.getElementById('forecast').classList.add('hidden');
}


// ============================================================
// CLEAR STATE
// Resets the UI before a new search — hides error and old data,
// and shows the loading indicator.
// ============================================================

function clearState() {
  document.getElementById('errorMsg').classList.add('hidden');
  document.getElementById('loadingMsg').classList.remove('hidden');
  document.getElementById('hero').classList.add('hidden');
  document.getElementById('stats').classList.add('hidden');
  document.getElementById('forecast').classList.add('hidden');
}


// ============================================================
// HANDLE SEARCH — main function triggered by the Search button
// Reads the city input, fetches coordinates then weather data,
// and updates the DOM. Accepts an optional city string override
// (used by history chip clicks).
// ============================================================

async function handleSearch(cityOverride) {
  var input = document.getElementById('searchInput');
  var city  = (typeof cityOverride === 'string' ? cityOverride : input.value).trim();

  if (!city) {
    document.getElementById('loadingMsg').classList.add('hidden');
    showError('Please enter a city name to search.');
    return;
  }

  clearState();

  try {
    var coords = await getCoordinates(city);
    var data   = await getWeather(coords.lat, coords.lon);

    // Persist for unit toggle re-render (bonus)
    lastWeatherData = data;
    lastCityName    = coords.name;
    lastCountry     = coords.country;

    document.getElementById('loadingMsg').classList.add('hidden');
    document.getElementById('unitToggle').classList.remove('hidden');

    displayCurrentWeather(data, coords.name, coords.country);
    displayForecast(data.daily);

    // Save city to search history (bonus)
    addToHistory(coords.name);

    // Update the input to show the resolved city name
    input.value = coords.name;

  } catch (err) {
    document.getElementById('loadingMsg').classList.add('hidden');
    showError(err.message);
  }
}


// ============================================================
// TOGGLE UNIT (bonus)
// Switches between °C and °F and re-renders the weather display
// using the stored last API response — no new network request.
// ============================================================

function toggleUnit() {
  if (!lastWeatherData) return;

  unit = (unit === 'C') ? 'F' : 'C';
  document.getElementById('unitToggle').textContent = (unit === 'C') ? '°C / °F' : '°F / °C';

  displayCurrentWeather(lastWeatherData, lastCityName, lastCountry);
  displayForecast(lastWeatherData.daily);
}


// ============================================================
// ADD TO HISTORY (bonus)
// Saves the given city to localStorage (max 5) and re-renders
// the history chip bar.
// ============================================================

function addToHistory(city) {
  var history = JSON.parse(localStorage.getItem('weatherHistory') || '[]');

  // Remove duplicate entry if the city was searched before
  history = history.filter(function (c) {
    return c.toLowerCase() !== city.toLowerCase();
  });

  history.unshift(city);
  if (history.length > 5) history = history.slice(0, 5);

  localStorage.setItem('weatherHistory', JSON.stringify(history));
  renderHistory();
}


// ============================================================
// RENDER HISTORY (bonus)
// Reads the saved city list from localStorage and renders each
// city as a clickable chip button below the search bar.
// ============================================================

function renderHistory() {
  var bar     = document.getElementById('historyBar');
  var history = JSON.parse(localStorage.getItem('weatherHistory') || '[]');

  bar.innerHTML = '';

  history.forEach(function (city) {
    var btn = document.createElement('button');
    btn.className   = 'history-chip';
    btn.textContent = city;
    btn.addEventListener('click', function () {
      document.getElementById('searchInput').value = city;
      handleSearch(city);
    });
    bar.appendChild(btn);
  });
}


// ============================================================
// HANDLE GEOLOCATION (bonus)
// Uses the browser's navigator.geolocation to detect the user's
// position on page load and show local weather automatically.
// Fails silently if permission is denied or unavailable.
// ============================================================

async function handleGeolocation() {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(
    async function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      clearState();

      try {
        var data = await getWeather(lat, lon);

        lastWeatherData = data;
        lastCityName    = 'Current Location';
        lastCountry     = '';

        document.getElementById('loadingMsg').classList.add('hidden');
        document.getElementById('unitToggle').classList.remove('hidden');

        displayCurrentWeather(data, 'Current Location', '');
        displayForecast(data.daily);

      } catch (err) {
        // Silent fail — user can still search manually
        document.getElementById('loadingMsg').classList.add('hidden');
      }
    },
    function () {
      // User denied geolocation or it is unavailable — silent fail
      document.getElementById('loadingMsg').classList.add('hidden');
    }
  );
}


// ============================================================
// EVENT LISTENERS
// ============================================================

// Search button click
document.getElementById('searchBtn').addEventListener('click', function () {
  handleSearch();
});

// Enter key in the search input field
document.getElementById('searchInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') handleSearch();
});

// Unit toggle button (°C / °F)
document.getElementById('unitToggle').addEventListener('click', toggleUnit);


// ============================================================
// INITIALISE — runs on page load
// Restores search history chips and attempts geolocation.
// ============================================================

renderHistory();
handleGeolocation();
