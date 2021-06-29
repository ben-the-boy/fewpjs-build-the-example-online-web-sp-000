// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeButtons = document.querySelectorAll('.like-glyph');

const heartStates = {
  '♡': FULL_HEART,
  '♥': EMPTY_HEART
}

const classNames = {
  "like-glyph": "activated-heart",
  "activated-heart": "like-glyph"
}

function like(e) {
  heart = e.target;
  mimicServerCall()
  .then(function(message) {
    heart.innerText = heartStates[heart.innerText];
    heart.className = classNames[heart.className];
  })
  .catch(function(error) {
    let modal = document.getElementById('modal');
    modal.className = "";
    let modalMessage = document.getElementById('modal-message');
    modalMessage.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000)
  });
}

for (const element of likeButtons) {
  element.addEventListener('click', like);
}











//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
