# 🌦️ Aplicación de Pronóstico del Clima

## 📜 Descripción del Proyecto

> Esta es una aplicación web frontend simple diseñada para mostrar las condiciones climáticas actuales y un pronóstico detallado por horas para una ciudad específica (Madrid, por defecto).
> El proyecto se enfoca en demostrar las mejores prácticas en JavaScript asíncrono, la manipulación eficiente del DOM y el uso del método map() para el renderizado de listas de datos.

## 🚀 Características PrincipalesDatos Asíncronos:

Utiliza la API de WeatherAPI mediante la sintaxis moderna async/await.
**Doble Vista:** Muestra la información general del clima actual y un pronóstico horario (24 horas).Mapeo Robusto: La función de fetch combina y limpia los datos de la API antes de enviarlos al frontend.

**Renderizado Eficiente:** Uso de Template Literals y el método `map().join('')` para inyectar bloques de HTML de forma eficiente.🛠️ Tecnologías UtilizadasTecnologíaDescripciónHTML5Estructura base de la aplicación.CSS3Estilizado y presentación visual.JavaScript (ES6+)Lógica asíncrona (async/await, fetch), Destructuring y manipulación avanzada de Arrays (.map()).⚙️ Instalación y Uso1. RequisitosSolo necesitas un navegador web moderno (Chrome, Firefox, Edge, etc.) para ejecutar el proyecto.

2. Estructura de ArchivosAsegúrate de que tu proyecto tenga la siguiente estructura:
`3. clima-app/
├── index.html          # Estructura principal y contenedores del DOM.
├── script.js           # Lógica principal, fetch, mapeo y renderizado.
└── style.css           # Estilos para la presentación visual.`

4. Configuración de la API Key⚠️ Advertencia de SeguridadLa API Key de WeatherAPI se encuentra actualmente expuesta en script.js. Para producción, es obligatorio implementar una solución de proxy backend (utilizando Node.js/Express, Vercel Serverless Function, etc.) para ocultar la clave y hacer la petición desde el servidor, no desde el navegador del cliente.4. EjecuciónSimplemente abre el archivo index.html en tu navegador. Los datos se cargarán automáticamente al iniciar la aplicación (DOMContentLoaded).
5.🧱 Estructura del CódigofetchWeatherApi() (Lógica Asíncrona)Esta función es crucial ya que maneja la comunicación y limpieza de los datos.Endpoint: Utiliza /forecast.json para obtener tanto el clima actual como los datos horarios en una sola petición.Sintaxis: Implementa async/await dentro de un bloque try...catch para una gestión de errores clara.

Retorno: Devuelve un objeto unificado que contiene dos propiedades clave:JavaScript{
  current: { /* datos del clima actual */ },
  hourly: [ /* array de 24 pronósticos por hora */ ]
}
initApp() (Controlador de Arranque)El punto de entrada de la aplicación.Flujo de Datos: Utiliza await fetchWeatherApi() y destructuring para obtener directamente las propiedades { current, hourly }.Activación: Asegura que el código solo se ejecute cuando el HTML esté completamente cargado.renderWeather() y renderHourForecast() (Renderizado)renderWeather (Clima Actual): Recibe el objeto current y utiliza Template Literals para crear la tarjeta principal del clima.renderHourForecast (Pronóstico Horario): Recibe el array hourly y utiliza la siguiente secuencia para la inyección eficiente en el DOM:$$\text{Array} \xrightarrow{\text{map()}} \text{Array de strings HTML} \xrightarrow{\text{join('')}} \text{String HTML Único} \xrightarrow{\text{innerHTML}} \text{DOM}$$🤝 ContribucionesSi deseas mejorar este proyecto, puedes considerar las siguientes áreas:Implementar la solución de proxy backend para la API Key.Añadir un campo de búsqueda para que el usuario pueda ingresar la ciudad.Mejorar la experiencia de usuario con indicadores de carga (spinners).Desarrollado con 💙 y ☕ por [Tu Nombre/Alias de Desarrollador]
