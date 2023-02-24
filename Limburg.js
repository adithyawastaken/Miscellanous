const container1 = document.querySelector('.container')
const container2= document.querySelector('.container-2')
const menuBar = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-circle-xmark')
const button = document.querySelector('button')

menuBar.addEventListener('click', ()=>{
  container1.classList.toggle('invisible')
  container2.classList.toggle('invisible')
})

closeBtn.addEventListener('click', ()=>{
    container1.classList.toggle('invisible')
    container2.classList.toggle('invisible')
})
button.addEventListener('click', ()=>{
    window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0')
})