// insertar endpoint con clave api
// estructura then y comprobación de errores
// capurar, mapeo y renderizado

// envolvemos en una función para devolver datos mapeados

async function fetchWeatherApi() {
  const days = 1; // Solo necesitamos el pronóstico del día actual
  const apiKey = "b386e9d79cc44b17ac5115217251312";
  const city = "Madrid";
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error en la API: Estado ${response.status}`);
    }

    const data = await response.json();
    const hourForecast = data.forecast.forecastday[0].hour;

    // mapeo del clima por horas
    const hourlyData = hourForecast.map((hourData) => {
      
      const time24 = hourData.time.split(" ")[1];
      return {
        time: time24,
        temp: hourData.temp_c,
        icon: hourData.condition.icon,
        condition: hourData.condition.text,
      };
    });

    // mapeo clima actual
    const currentWeather = {
      city: data.location.name,
      country: data.location.country,
      condition: data.current.condition.text,
      temp: data.current.temp_c,
      icon: data.current.condition.icon,
      time: data.location.localtime.split(" ")[1],
      precipitation: data.current.precip_mm,
      humidity: data.current.humidity,
      wind_kph: data.current.wind_kph,
    };

    const result = {
      current: currentWeather,
      hourly: hourlyData,
    };

    console.log("Datos del clima:", result);
    return result;

  } catch (error) {
    console.error("Hubo un problema en la petición", error);
    throw error;
  }
}

const hourContainer = document.getElementById("hour-container");

function renderHourForecast(hourData) {
  const allHours = hourData.map((hour) => {
      const fullIconUrl = hour.icon.startsWith("//") ? `https:${hour.icon}` : hour.icon;

      return `
            <ul class="hour-item">
                <li class="hourly-time">${hour.time}</li>
                <img src="${fullIconUrl}" alt="${hour.condition}" class="hour-icon">
                <li class="hour-temp">${hour.temp} ºC</li>
            </ul>
        `;
    })
    .join("");
  hourContainer.innerHTML = allHours;
}


// capturamos ids del html
const weatherContainer = document.getElementById("weather-container");
const errorElement = document.getElementById("weather-error");

function renderWeather({city, country, condition, temp, icon, precipitation, humidity, wind_kph}) {
  const fullIconUrl = icon.startsWith("//") ? `https:${icon}` : icon;
  /* <!-- <p id="weather-time">Hora local: ${time}</p> --> */

    const weatherTemplate = `
        <div class="current-weather-card container"> 
        <div style="text-align: center;">
            <h2 id="weather-location">${city}, ${country}</h2>
            <div id="weather-text">${condition}</div>
        </div>
        <div class="weather-details">
            <img
                src="${fullIconUrl}"
                alt="icono: ${condition}"
                id="weather-icon">
            <div class="numero-grados">${temp}º</div>
            <ul style="list-style: none; padding: 0;"> <!-- Pequeño fix para quitar puntos de lista -->
                <li>Precipitaciones: ${precipitation}%</li>
                <li>Humedad: ${humidity}%</li>
                <li>Viento: ${wind_kph} Km/h</li>
            </ul>
        </div>
    </div>
    `;
  weatherContainer.innerHTML = weatherTemplate;
  errorElement.textContent = "";
}

async function initApp() {
  try {
    const { current, hourly } = await fetchWeatherApi();

    // llamo a las dos funciones que contienen clima y clima por horas
    renderWeather(current);
    renderHourForecast(hourly);

  } catch (error) {
    console.error("Fallo al obtener los datos del clima", error);
  }
}
// inicializar en el DOM
document.addEventListener("DOMContentLoaded", initApp);


