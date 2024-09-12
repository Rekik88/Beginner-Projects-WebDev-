function roll() {
  const nbrDice = document.getElementById("nbrDice");
  const res = document.getElementById("res");
  const images = [];
  const nbr = Number(nbrDice.value);
  res.textContent = "Dice : ";

  for (let i = 0; i < nbr; i++) {
    ranNbr = Math.floor(Math.random() * 6) + 1;
    res.textContent += `${ranNbr} `;
    images.push(`<img src="Pictures/${ranNbr}.png">`);
  }
  document.getElementById("diceImages").innerHTML = images.join(" ");
}
