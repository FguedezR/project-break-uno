// recuperamos ids
const inputTitle = document.getElementById("inputTitle");
const inputUrl = document.getElementById("inputUrl");
const addBtn = document.getElementById("addBtn");
const linkList = document.getElementById("linkList");


let myLinks = JSON.parse(localStorage.getItem("savedLinks")) || [];
// imprimimos lo que ya existe
renderLinks();


addBtn.addEventListener("click", function () {
  const title = inputTitle.value;
  const url = inputUrl.value;

  //validación por si se rellana con algo vacío
  if (title === "" || url === "") {
    alert("Rellena ambos campos");
    return;
  }

  // crear onjeto del link
  const newLink = {
    name: title,
    link: url,
  };

  // añladir al array
  myLinks.push(newLink);

  // guardar y actualizar
  saveAndRender();

  inputTitle.value = "";
  inputUrl.value = "";
});


// guardar en localstorage e imprimir en html
function saveAndRender() {
  localStorage.setItem("savedLinks", JSON.stringify(myLinks));
  renderLinks();
}

// función principal para generar html createElement o innerHTML ??
function renderLinks() {
  linkList.innerHTML = "";

  myLinks.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
            <a href="${item.link}" target="_blank" class="link-content">
            ${item.name}
            </a>
            <button class="delete-btn" onclick="deleteLink(${index})">X</button>
        `;
    linkList.appendChild(li);
  });
}

// función para borrar el link del dom
function deleteLink(index) {
  // eliminar un elemento en la posición 1
  myLinks.splice(index, 1);

  saveAndRender();
}
