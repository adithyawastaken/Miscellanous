console.log('content script running')
const images = document.getElementsByTagName('img')
window.addEventListener('keydown', (e)=>{
  if(e.key == 'q' && e.ctrlKey){
      window.open('https://instagram.com','_blank')
      window.open('https://twitter.com', '_blank')
  }
})
// 1. Send a message to the service worker requesting the user's data
chrome.runtime.sendMessage('get-user-data', (response) => {
    console.log(response);
    initializeUI(response);
  });