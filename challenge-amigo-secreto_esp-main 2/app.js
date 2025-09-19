// Array de los nombres
let amigos = [];

// ➡️ Función de añadir amigos desde el input
function agregarAmigo() {
  let input = document.getElementById("amigo"); // capturar el input
  let nombre = input.value.trim(); // quitar espacios extra

  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  // Guardar en el array
  amigos.push(nombre);

  // Mostrar los amigos en pantalla
  mostrarAmigos();

  // Limpiar el input
  input.value = "";
}

// ➡️ Función para mostrar los amigos en la lista <ul>
function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiamos la lista antes de volver a dibujarla

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// ➡️ Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes ingresar al menos 1 amigos para hacer el sorteo.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length); // índice aleatorio
  let amigoSecreto = amigos[indice];

  // Mostrar el resultado en el <ul id="resultado">
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}