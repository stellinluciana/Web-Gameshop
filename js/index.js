// este lo necesito para agregarle el clic
const botonMenu = document.querySelector('.hamb')
// este lo necesito para agregarle la clase
const menu = document.querySelector('#menu-principal')
// const icono = botonMenu.querySelector('i')

// console.log(icono)

botonMenu.addEventListener('click', () => {
  menu.classList.toggle('open')
})

