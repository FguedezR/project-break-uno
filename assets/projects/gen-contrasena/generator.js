// variables
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()-_=+";

// las agrupamos todas en una
const todosLosCaracteres = mayusculas + minusculas + numeros + simbolos;

function generarPassword() {
  // para obtener la longitud
  const longitudInput = document.getElementById("length").value;
  const longitud = parseInt(longitudInput);

  // validar que cumple
  if (longitud < 12 || longitud > 50) {
    alert("Por favor, elige una longitud entre 12 y 50 caracteres.");
    return;
  }

  let password = "";

  // al menos uno de cada tipo
  password += obtenerCaracterAleatorio(mayusculas);
  password += obtenerCaracterAleatorio(minusculas);
  password += obtenerCaracterAleatorio(numeros);
  password += obtenerCaracterAleatorio(simbolos);

  // rellenar el resto de la contraseña
  // añadimos 4 caracteres, el bucle va desde 4 hasta la longitud total
  for (let i = 4; i < longitud; i++) {
    password += obtenerCaracterAleatorio(todosLosCaracteres);
  }

  // desordenar
  // si no hacemos esto los primeros 4 caracteres siempre serían mayus, mnin, num y simbolo en ese orden.
  password = desordenarCadena(password);

  // mostrar el resultado
  document.getElementById("passwordResult").value = password;
}

// obtener 1 carácter random de un string
function obtenerCaracterAleatorio(cadena) {
  const indiceAleatorio = Math.floor(Math.random() * cadena.length);
  return cadena[indiceAleatorio];
}

// desordenar la contraseña
function desordenarCadena(cadena) {
  // convertimos el string a array, lo desordenamos y lo volvemos a unir
  // sort para desordenar
  return cadena.split("").sort(function () {
    return 0.5 - Math.random();
  }).join("");
}

/* const desordenarCadena = cadena => cadena.split('').sort(() => 0.5 - Math.random()).join('');
 */