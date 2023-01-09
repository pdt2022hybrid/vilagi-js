const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const pcscore = document.getElementById("computerScore");
const mescore = document.getElementById("youScore");
const SELECTIONS = [
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "scissors",
    emoji: "✌️",
    beats: "paper",
  },
];
selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", () => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );

    makeSelection(selection);
  });
});
function makeSelection(selection) {
  const computerSelection = random();
  console.log(pcscore);

  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  console.log(
    selection.name,
    computerSelection.name,
    yourWinner,
    computerWinner
  );
  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);
  score(yourWinner, computerWinner);
  checker(pcscore, mescore);
}
function checker() {
  if (parseInt(mescore.innerHTML) === 10) {
    mescore.innerHTML = parseInt(mescore.innerHTML) * 0;
    pcscore.innerHTML = parseInt(pcscore.innerHTML) * 0;
    alert("vyhral si");
  } else if (parseInt(pcscore.innerHTML) === 10) {
    mescore.innerHTML = parseInt(mescore.innerHTML) * 0;
    pcscore.innerHTML = parseInt(pcscore.innerHTML) * 0;
    alert("prehral si");
  }
}
function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  if (winner) {
    div.classList.add("winner");
  } else {
    div.classList.add("result-selection");
  }
  finalColumn.after(div);
}
function score(yourWinner, computerWinner) {
  const pcscore = document.getElementById("computerScore");
  const mescore = document.getElementById("youScore");
  console.log("jsaodnjoasd;hbdn");
  if (yourWinner) {
    mescore.innerHTML = parseInt(mescore.innerHTML) + 1;
  } else if (computerWinner) {
    pcscore.innerHTML = parseInt(pcscore.innerHTML) + 1;
  }
}
function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}
function random() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}
function tp() {
  var element = document.getElementById("div1");
  element.style.display = "none";
  document.getElementById("div2").style.fontSize = "20px";
}
function tp2() {
  var element = document.getElementById("div2");
  element.style.display = "none";
  document.getElementById("sch").style.fontSize = "20px";
}
function tp3() {
  var element = document.getElementById("sch");
  element.style.display = "none";
}
