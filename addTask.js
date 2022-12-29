const inputtask = document.querySelector('.input')
const reset = document.querySelector('.reset-btn')
const add = document.querySelector('.add-btn')
const ul = document.querySelector('#ul')
// adding event listener for submit button
add.addEventListener('click' , ()=>{
    const Text = document.createElement('h3')
    Text.innerText = inputtask.value
    if(inputtask.value == ''){
        alert('Enter a task kiddo')
    } else {
        ul.appendChild(Text);
    }
    inputtask.value = ''
})
// adding event listener for reset button
reset.addEventListener('click' , ()=>{
    const Text = document.querySelectorAll('h3')
    for(let i= 0; i<Text.length; i++){
        Text[i].remove();
    }
  inputtask.value = ''
})
