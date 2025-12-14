🌦️ Aplicación de Pronóstico del Clima
📜 Descripción del Proyecto
Esta es una aplicación web frontend simple diseñada para mostrar las condiciones climáticas actuales y un pronóstico detallado por horas para una ciudad específica (Madrid, por defecto). El proyecto se enfoca en demostrar las mejores prácticas en JavaScript asíncrono, la manipulación eficiente del DOM y el uso del método map() para el renderizado de listas de datos.

🚀 Características Principales
Datos Asíncronos: Utiliza la API de WeatherAPI mediante la sintaxis moderna async/await.

Doble Vista: Muestra la información general del clima actual y un pronóstico horario (24 horas).

Mapeo Robusto: La función de fetch combina y limpia los datos de dos estructuras de API (clima actual y pronóstico) antes de enviarlos al frontend.

Renderizado Eficiente: Uso de Template Literals y el método map().join('') para inyectar grandes bloques de HTML de forma eficiente.

🛠️ Tecnologías Utilizadas
HTML5

CSS3 (Se requiere un archivo style.css para la presentación)

JavaScript (ES6+): Promesas, async/await, fetch, Destructuring, Array.prototype.map().

⚙️ Instalación y Uso
1. Requisitos
Solo necesitas un navegador web moderno (Chrome, Firefox, Edge, etc.) para ejecutar el proyecto.

2. Estructura de Archivos
Asegúrate de que tu proyecto tenga la siguiente estructura:

clima-app/
├── index.html          # Estructura de la aplicación y contenedores del DOM.
├── script.js           # Lógica principal, fetch, mapeo y renderizado.
└── style.css           # Estilos para la presentación visual.
3. Configuración de la API Key
⚠️ Advertencia de Seguridad: Actualmente, la API Key está expuesta directamente en el archivo script.js. Para un proyecto de producción, es obligatorio implementar una solución de proxy backend (Node.js/Express, Vercel Serverless Function, etc.) para ocultar la clave.

Para ejecutar localmente, asegúrate de que la clave de WeatherAPI esté definida al inicio de script.js.

4. Ejecución
Simplemente abre el archivo index.html en tu navegador. Los datos se cargarán automáticamente al iniciar la aplicación (DOMContentLoaded).

🧱 Estructura del Código
fetchWeatherApi() (Lógica Asíncrona)
Esta función es el núcleo de la aplicación.

Responsabilidad: Obtiene los datos del endpoint /forecast.json.

Sintaxis: Utiliza async/await dentro de un bloque try...catch para el manejo de errores.

Mapeo de Retorno: Devuelve un único objeto que contiene dos propiedades:

JavaScript

{
  current: { /* datos del clima actual */ },
  hourly: [ /* array de 24 pronósticos por hora */ ]
}
initApp() (Controlador de Arranque)
Responsabilidad: Llama a la función asíncrona principal y distribuye los datos.

Flujo: Utiliza await para obtener el objeto { current, hourly } y luego llama a renderWeather(current) y renderHourForecast(hourly).

Activación: Se ejecuta cuando el DOM está completamente cargado (document.addEventListener('DOMContentLoaded', initApp)).

renderWeather() y renderHourForecast() (Renderizado)
Técnica: Ambas funciones utilizan Destructuring para extraer las propiedades necesarias.

Inyección:

renderWeather: Genera un Template Literal para la tarjeta principal del clima.

renderHourForecast: Utiliza Array.prototype.map() para transformar el array de pronósticos en un array de strings HTML, y .join('') para concatenarlos antes de la inyección final en el DOM.

🤝 Contribuciones
Si deseas mejorar este proyecto, puedes enfocarte en:

Implementar la solución de proxy backend para proteger la API Key.

Añadir un campo de búsqueda para que el usuario pueda ingresar la ciudad.

Mejorar la presentación visual con animaciones CSS.

[Tu Nombre/Alias de Desarrollador] Fecha de Creación/Última Modificación
