const $buttonSend = document.querySelector (".btn-send")
const $inputMessage = document.querySelector(".input-message")
const $chatMessage = document.querySelector(".chat-messages")

$buttonSend.addEventListener("click", sendMessage)

function sendMessage() {
  const message = $inputMessage.value

  $chatMessage.innerHTML += `
  <div class="message sent">
          <div class="text-globe">
            <p>${message}</p>
            <p class="timestamp">${new Date().toLocaleTimeString()}</p>
          </div>
   </div>
  `
  $inputMessage.value = ""

  setTimeout(function () {
    $chatMessage.innerHTML += `
     <div class="message received">
          <div class="text-globe">
            <p>Mensaje recibido! ${message}</p>
            <p class="timestamp">${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
  `
  },  5000)
}
