const header = document.querySelector('.header'),
    textarea = document.querySelector('#textarea'),
    btn = document.querySelector('#btn'),
    omri = document.querySelector('.omri');



btn.addEventListener('click', () => {
    let amount = (Number(textarea.value))
    for (let i = 0; i < amount; i++) {
        this.img = document.createElement("img")
        img.src = "https://pngimg.com/uploads/smiley/smiley_PNG36233.png"
        img.style.width = "100px"
        omri.append(this.img)
    }

}); 