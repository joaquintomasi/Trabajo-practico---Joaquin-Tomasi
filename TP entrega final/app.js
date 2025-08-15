const $buttonSend = document.querySelector (".btn-send")
const $inputMessage = document.querySelector(".input-message")
const $chatMessage = document.querySelector(".chat-messages")

$buttonSend.addEventListener("click", sendMessage)

// ESTO SIRVE PARA ENVIAR EL MENSAJE CON EL ENTER PERO LO HICE CON CHATGPT PARA PROBAR (NO TOMAR EN CUENTA!)

// $inputMessage.addEventListener("click", "keydown", function(event) {
//   if (event.key === "Enter") {
//       sendMessage();
//   }
// })

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
