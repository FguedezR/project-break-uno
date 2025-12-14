/* function obtainFormatHour() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // para formatear la hora
  function formatDigit(digit) {
    if (digit < 10) {
        return '0' + digit
    }
    else if () {
        
    }
  }
} 

function myWatch() {
  const elementoReloj = document.getElementById("reloj-digital");
  return elementoReloj;
}
myWatch();*/

// padStar añade desde la izquierda el digito 0
function formatDigit(digit) {
  return String(digit).padStart(2, "0");
}

// creamos una función que contiene el objeto date
// le añadimos H:M:S y con la funcion de formatear metemos dentro de sus
// parámetros hours, minutes y seconds.
function obtainFormatHour() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const completeHour = ` ${formatDigit(hours)}:${formatDigit(
    minutes
  )}:${formatDigit(seconds)} `;

  return completeHour;
}
// console.log(obtainFormatHour());

// función para actualizar el DOM
function updateWatch() {
  const elementWatch = document.getElementById("reloj-digital");

  // comprobación de seguridad
  if (!elementWatch) {
    console.error("No se encuentra el elemento elementWatch en el DOM");

    if (typeof window.watchInterval !== "undefined") {
      clearInterval(window.watchInterval);
    }
    return;
  }

  // hora actual formateada
  const currentTime = obtainFormatHour();
  // asignar contenido al elemento
  elementWatch.textContent = currentTime;

  return;
}

function startWatch() {
  // llama para mostrar la hora sin esperar 1 segundo
  updateWatch();

  // llama cada 1s
  window.watchInterval = setInterval(updateWatch, 1000);
}
// ejecutar la funcion de start después que el DOM haya cargado
document.addEventListener("DOMContentLoaded", startWatch);

// fecha 00 / 00 / 0000

function extractDateParts() {
  // día del mes
  const allDay = new Date();

  const day = allDay.getDate();
  const month = allDay.getMonth() + 1;
  const year = allDay.getFullYear();

  // solo vamos a formatear dia y mes
  const dayFormat = formatDigit(day);
  const monthFormat = formatDigit(month);

  const completeDay = `${dayFormat}/${monthFormat}/${year}`;

  return completeDay;
}
// console.log(extractDateParts());

// funcion para actualizar el DOM una unica vez

function showOneDate() {
  const dateElement = document.getElementById("fecha-actual");

  // comprobación
  if (!dateElement) {
    console.error("No se encontró el elemento fecha-actual");
    return;
  }

  const printDate = extractDateParts();
  dateElement.textContent = printDate;
}
// en lugar de hacer showOneDate()
document.addEventListener("DOMContentLoaded", showOneDate);

// condición para frases de cada momento del día

function obtainCurrentTime() {
  const now = new Date();

  const hourDay = now.getDay(); // 0 a 23
  const minuteDay = now.getMinutes(); // 0 a 59

  return hourDay * 60 + minuteDay;
}
// console.log(obtainCurrentTime())

function messagesFromHour() {
  const currentMinutes = obtainCurrentTime();
  let message = "";

  // 00:01 (1) a 07:00 (420)
  if (currentMinutes >= 1 && currentMinutes <= 420) {
    message = "Es hora de descansar. Apaga y sigue mañana";
    console.log();
  }
  // 07:01 (421) a 12:00 (720)
  else if (currentMinutes >= 421 && currentMinutes <= 720) {
    message = "Buenos días, desayuna fuerte y a darle al código";
  }
  // 12:01 (721) a 14:00 (840)
  else if (minutosActuales >= 721 && minutosActuales <= 840) {
    mensaje = "Echa un rato más pero no olvides comer";
  }
  // 14:01 (841) a 16:00 (960)
  else if (minutosActuales >= 841 && minutosActuales <= 960) {
    mensaje = "Espero que hayas comido";
  }
  // 16:01 (961) a 18:00 (1080)
  else if (minutosActuales >= 961 && minutosActuales <= 1080) {
    mensaje = "Buenas tardes, el último empujón";
  }
  // 18:01 (1081) a 22:00 (1320)
  else if (minutosActuales >= 1081 && minutosActuales <= 1320) {
    mensaje = "Esto ya son horas extras, ... piensa en parar pronto";
  }
  // 22:01 (1321) a 00:00 (1440 - que son los 0 minutos de la próxima medianoche)
  else if (minutosActuales >= 1321 && minutosActuales <= 1440) {
    mensaje = "Buenas noches, es hora de pensar en parar y descansar";
  }
  // Caso especial: Medianoche exacta (00:00 o 0 minutos)
  else if (minutosActuales === 0) {
    mensaje = "Es medianoche. Es un buen momento para iniciar la rutina.";
  }
  // Por si acaso, un mensaje de error o por defecto
  else {
    mensaje = "Verificando el tiempo... ¡Sigue programando!";
  }
  return message;
}

// actualizar mensaje
function updateMessage() {
  const mensajeReloj = document.getElementById("mensaje-reloj");

  // comprobación rutinaria...
  if (!mensajeReloj) {
    console.error("No se encontró el elemento mensaje-reloj");
    if (window.mensajeIntervalo) {
      clearInterval(window.mensajeIntervalo);
    }
    return;
  }
  const printMessage = messagesFromHour();
  mensajeReloj.textContent = printMessage;
}

function startMessage() {
  // actualizar inmediatamente para mostrar el mensaje al cargar la página
  updateMessage();

  // creo que es mejor cada 60 segundos
  window.mensajeIntervalo = setInterval(updateMessage, 60000);
}

document.addEventListener("DOMContentLoaded", startMessage);
