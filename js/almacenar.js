const cuadroDeTexto = document.getElementById("item")
const botonAgregar = document.getElementById("agregar")
const ulContenedor = document.getElementById("contenedor")
botonAgregar.addEventListener("click", () => {
  localStorage.setItem("valorTexto", cuadroDeTexto.value)
  if(cuadroDeTexto.value !== ""){
    const valorTexto2 = localStorage.getItem("valorTexto");
    const nuevoLI = `<li>${valorTexto2}</li>`
    ulContenedor.appendChild(nuevoLI)
  }
})
  