function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar img light mode
  const img = document.querySelector("#profile img")

  // substituir img
  if (html.classList.contains("light")) {
    // se tiver light mode, pegar img light
    img.setAttribute("src", "./assets/assets/Avatar Toninho dia.png")
  } else {
    // se não estiver light mode, mantenha img normal
    img.setAttribute("src", "./assets/assets/Avatar Toninho noite.png")
  }
}
