# 🚀 Project Break Uno - Dashboard de Proyectos

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Bienvenido a mi primer Dashboard de proyectos web. Este repositorio agrupa cuatro herramientas interactivas desarrolladas con **Vanilla JavaScript**, enfocadas en la manipulación del DOM, consumo de APIs y persistencia de datos.

## 🔗 Demo en Vivo
¡Puedes probar el proyecto funcionando en el siguiente enlace!
👉 **[Ver Project Break Uno en GitHub Pages](https://fguedezr.github.io/project-break-uno/)**

---

## 🛠️ Proyectos Incluidos

Desde el dashboard principal puedes navegar a las siguientes micro-aplicaciones:

### 1. 🔒 Generador de Contraseñas Seguras
Crea contraseñas aleatorias seguras permitiendo al usuario elegir la longitud (12-50 caracteres).
- **Conceptos clave:** `Math.random()`, manipulación de Strings, Arrays, validaciones.

### 2. 🔗 Gestor de Enlaces
Una herramienta para guardar tus links favoritos. Permite añadir y eliminar enlaces dinámicamente.
- **Conceptos clave:** `localStorage`, persistencia de datos, creación dinámica de elementos DOM.

### 3. 🌤️ Estación Climática
Muestra el clima actual y cambia el fondo de pantalla automáticamente con imágenes de alta calidad.
- **Conceptos clave:** Consumo de APIs (Fetch), asincronía, `setInterval` para rotación de imágenes de fondo.

### 4. ⏰ Reloj Digital
Un reloj que muestra la hora local actualizándose en tiempo real.
- **Conceptos clave:** Objeto `Date`, temporizadores (`setInterval`), lógica de formato de hora.

---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura organizada para separar los recursos y los sub-proyectos:

```roject-break-uno/
│
├── index.html          # Dashboard Principal
├── style.css           # Estilos globales
├── main.js             # Lógica del dashboard
│
└── assets/
    ├── img/            # Iconos e imágenes globales
    └── projects/       # Sub-carpetas de cada proyecto
        ├── estacion-clima/
        ├── gen-contrasena/
        ├── generador-enlaces/
          └── reloj-digital/
