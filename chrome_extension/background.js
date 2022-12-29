console.log("background script working")
// Example of a simple user data object
const response = {
    msg: 'hello this is backgrond script'
  };
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    if (message === 'get-user-data') {
      sendResponse(response.msg);
    }
  });