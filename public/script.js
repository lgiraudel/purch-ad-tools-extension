console.log('pouet pouet');

var button = document.createElement('button');
button.innerText = 'Send message to extension';
button.addEventListener('click', function() {
  var data = { type: "FROM_PAGE", message: "Hello from the webpage!" };
  window.postMessage(data, "*");
})

document.body.appendChild(button);