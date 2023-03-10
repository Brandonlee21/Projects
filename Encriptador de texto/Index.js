function criptador() {
  var texto = document.getElementById('inputTexto').value.toLowerCase()
  var txtCifrado = texto.replace(/e/gim, 'enter')
  var txtCifrado = txtCifrado.replace(/o/gim, 'ober')
  var txtCifrado = txtCifrado.replace(/i/gim, 'imes')
  var txtCifrado = txtCifrado.replace(/a/gim, 'ai')
  var txtCifrado = txtCifrado.replace(/u/gim, 'ufat')

  document.getElementById('img-right').style.display = 'none'
  document.getElementById('texto').style.display = 'none'
  document.getElementById('texto2').innerHTML = txtCifrado
  document.getElementById('copy').style.display = 'show'
  document.getElementById('copy').style.display = 'inherit'
}

function descriptador() {
  var texto = document.getElementById('inputTexto').value.toLowerCase()
  var txtCifrado = texto.replace(/enter/gim, 'e')
  var txtCifrado = txtCifrado.replace(/ober/gim, 'o')
  var txtCifrado = txtCifrado.replace(/imes/gim, 'i')
  var txtCifrado = txtCifrado.replace(/ai/gim, 'a')
  var txtCifrado = txtCifrado.replace(/ufat/gim, 'u')

  document.getElementById('img-right').style.display = 'none'
  document.getElementById('texto').style.display = 'none'
  document.getElementById('texto2').innerHTML = txtCifrado
  document.getElementById('copy').style.display = 'show'
  document.getElementById('copy').style.display = 'inherit'
}
function copy() {
  var contenido = document.querySelector('#texto2')
  contenido.select()
  document.execCommand('copy')

  alert('Copiado!')
}
btnGravador.addEventListener('click', function () {
  var speech = true
  Window.SpeechRecongnition = Window.webkitSpeechRecongnition
  const recognition = new SpeechRecongnition()
  recognition.interimResults = true

  if (speech == true) {
    recognition.start()
  }
})
