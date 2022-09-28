import { fetchColors } from "./utils.js"

const colorBtn = document.getElementById("get-color")
const colorPicker = document.getElementById("color-picker")
const themePickerMenu = document.getElementById("theme-picker-menu")

let color = "#F55A5A"
let theme = "monochrome"
colorPicker.value = color
themePickerMenu.value = theme

window.onload = fetchColors(color, theme)


themePickerMenu.addEventListener("click", (event) => {
    themePickerMenu.value = event.target.value
})

colorPicker.addEventListener("change", (event) => {
    colorPicker.value =  event.target.value
})

colorBtn.addEventListener("click", () => {
    let color = colorPicker.value
    let theme = themePickerMenu.value
     
    fetchColors(color, theme)
    
})

