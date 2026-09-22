const modal = document.getElementById('Modal')
const correio = document.getElementById('task')
const close = document.getElementById('close')
correio.addEventListener('click', () => { modal.style.display = 'block'})
close.addEventListener('click', () => { modal.style.display = 'none'})

const button1 = document.getElementById("start-mission1")
const button2 = document.getElementById("start-mission2")
const button3 = document.getElementById("start-mission3")

var dia = 1

if(dia == 1)
    button2.style.display = "none"
    button3.style.display = "none"

button1.addEventListener("click", () => {
    dia += 1
    button2.style.display = "block"
})

button2.addEventListener("click", () => {
    dia += 1
    button3.style.display = "block"
})

button3.addEventListener("click", () => {
    
})