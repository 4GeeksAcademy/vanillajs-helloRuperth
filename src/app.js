const button = document.querySelector(".button1");
setInterval(generateRandomCard, 10000); //me permite que se actualice la carta cada 10 segundos.
// Agrega un event listener al click del botón
button.addEventListener("click", function() {
  // Llama a la función generateRandomCard cuando se presione el botón.
  generateRandomCard();
});

// Funcion para generar una carta aleatoria.
function generateRandomCard() {
  const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  // Actualiza los elementos aleatoriamente.
  document.querySelector(".top-suit").innerHTML = randomSuit;
  document.querySelector(".numberLetter").innerHTML = randomValue;
  document.querySelector(".bottom-suit").innerHTML = randomSuit;

  // Cambia el color de las cartas para corazones y diamantes dejándolos de color rojo.
  if (randomSuit === "&hearts;" || randomSuit === "&diams;") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".numberLetter").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  } else {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".numberLetter").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
  }
}
