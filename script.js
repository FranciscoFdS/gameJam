const modal = document.getElementById('Modal')
const correio = document.getElementById('task')
const close = document.getElementById('close')
correio.addEventListener('click', () => { modal.style.display = 'block'})
close.addEventListener('click', () => { modal.style.display = 'none'})

const button1 = document.getElementsByClassName("m1")
const button2 = document.getElementsByClassName("m2")
const button3 = document.getElementsByClassName("m3") 

var dia = 1

button1.addEventListener("click", () => {
    dia += 1
})