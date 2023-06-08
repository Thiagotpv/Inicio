function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')){
img.setAttribute("src", "./assets/Avatar-light.png")
img.setAttribute("Alt", "Foto de Thiago Tibolla de Óculos escuros")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute("Alt", "Foto de Thiago Tibolla de Óculos")
  }
}
