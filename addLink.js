const input = document.querySelector('input');
const ul = document.querySelector('ul')
const addbtn = document.querySelector('#addbtn')
const resetbtn = document.querySelector('#resetbtn')
const audio = new Audio()
audio.src = './audio/sword sound.wav'


// Event listener for the add button
addbtn.addEventListener('click' , ()=>{
  let link = document.createElement('a')
    let li = document.createElement('h3')
    link.setAttribute('href' , `https://${input.value}`)
    link.setAttribute('target' , '_blank')
 const listItems = document.querySelectorAll('a')
  li.innerText = input.value;

  for(i of listItems){
    if(i.innerText == input.value) {
     alert('You have entered this same link before nerd')
     link.remove()
     li.remove()
    
    }
  }
 
  if(input.value == ''){
    alert('Enter a link kid')
   } 
    else  {
        link.append(li)
        ul.append(link)
        audio.play()
   }
       

input.value = ''
})
// Event listener for the reset button

resetbtn.addEventListener('click' , ()=>{
    const a = document.querySelectorAll('a')
Array.from(a).map(e=>e.remove())
})
// Toggle button for light and dark theme

const toggle = document.querySelector('.toggle-btn')
const body = document.querySelector('body')
const ball = document.querySelector('.ball')
const sun = document.querySelector('.fa-sun')
toggle.addEventListener('click' , ()=>{
    body.classList.toggle('dark')
ball.classList.toggle('move')
toggle.classList.toggle('dark-ok')
sun.classList.toggle('visible')
});

// Event Listener for Enter key and reset key
window.addEventListener('keydown' , (e)=>{
  const a = document.querySelectorAll('a')
  let link = document.createElement('a')
  let li = document.createElement('h3')
  link.setAttribute('href' , `https://${input.value}`)
  link.setAttribute('target' , '_blank')
const listItems = document.querySelectorAll('a')
li.innerText = input.value;
  if(e.key == 'Enter' && input.value !== ''){
    link.append(li)
            ul.append(link)
            audio.play()
            for(i of listItems){
                if(i.innerText == input.value) {
                 alert('You have entered this same link before nerd')
                 link.remove()
                 li.remove()
                }
              }
            input.value = ''
  } else if(e.key == 'Enter' && input.value == '') {
    alert('Enter a link kid')
    link.remove()
    li.remove()
  } if(e.key === 'q' && e.altKey){
    for(i of a){
      i.remove();
    }
  }
})







