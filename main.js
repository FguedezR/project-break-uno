const imagenes = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80", 
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1501854140884-074bf86ee911?auto=format&fit=crop&w=1920&q=80", // Galaxia oscuro
  "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1920&q=80",
];

// para cambiar el fondo
function cambiarFondo() {
  // número aleatorio entre 0 y el largo del array (10)
  const indiceAleatorio = Math.floor(Math.random() * imagenes.length);

  // seleccionamos la imagen
  const imagenSeleccionada = imagenes[indiceAleatorio];

  // estilo en línea al body
  // La sintaxis CSS es: background-image: url('...');
  document.body.style.backgroundImage = `url('${imagenSeleccionada}')`;

  console.log("prueba de: " + indiceAleatorio);
}

cambiarFondo();

// configurar el intervalo 15s
setInterval(cambiarFondo, 10000);
