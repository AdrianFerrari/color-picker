function columnsHtml (array) {
    for (const color of array) {
        let colorDiv = document.querySelector(`#color-${array.indexOf(color)+1}`)
        colorDiv.style.background=`${color.hex.value}`

        let hexDiv = document.querySelector(`#hex-code-${array.indexOf(color)+1}`)
        hexDiv.textContent = `${color.hex.value}`
    }
}

function fetchColors(color, theme) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.substring(1)}&mode=${theme}`)
    .then((response) => response.json())
    .then((data) => columnsHtml(data.colors));
}

export{columnsHtml, fetchColors}