const text = "Hola, soy Cristian 👨‍💻 Desarrollador Fullstack en formación";
let index = 0;

function type() {
  const typingElement = document.getElementById("typing-text");
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100); // velocidad de escritura
  }
}

document.addEventListener("DOMContentLoaded", type);