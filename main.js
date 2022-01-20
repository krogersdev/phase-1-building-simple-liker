// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// document.addEventListener('DOMContentLoaded', hideModal); 

//Event Listener 
 const hearts = document.querySelectorAll('.like-glyph');
 hearts.forEach(heart => heart.addEventListener('click',function(e) {
  heartClick(e)
  mimicServerCall()
    .then(res => res)
    .catch((error) => catchError(error))
 }));
 
 // Successful Click Event Handlers 
function heartClick(e) {
  if(e.target.innerText === FULL_HEART) {
      e.target.innerText = EMPTY_HEART;
      e.target.classList.remove('activated-heart');
  } else {
      e.target.innerText = FULL_HEART;
      e.target.className = 'activated-heart';
  }
};

//Fail Click Event Handlers 
function catchError (error) {
  document.querySelector("#modal > h2").innerText = `${error}`;
  document.getElementById('modal').classList.remove('hidden');
  setTimeout(hideModal, 3000); 
}

//Hides Modal
function hideModal () {
  const modal = document.getElementById('modal');
  modal.className = ("hidden");
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
