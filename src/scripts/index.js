const icons = [
  "🌙",
  "🌙",
  "🔮",
  "🔮",
  "🥀",
  "🥀",
  "🧙‍♀️",
  "🧙‍♀️",
  "🍄",
  "🍄",
  "🍷",
  "🍷",
  "🍭",
  "🍭",
];

let shuffleIcons = icons.sort(() => (Math.random() > 0.5 ? 2 : -1));
let openCards = [];

for (let i = 0; i < icons.length; i++) {
  let box = document.createElement("div");
  box.className = "card";
  box.innerHTML = shuffleIcons[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("open");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("match");
    openCards[1].classList.add("match");
  } else {
    openCards[0].classList.remove("open");
    openCards[1].classList.remove("open");
  }

  openCards = [];

  checkWin();
}

function checkWin() {
  if (document.querySelectorAll(".match").length === icons.length) {
    alert("YOU WIN!");
  }
}
