let msg_container = document.querySelector(".msg-container");
let msg = document.getElementById("msg");
let newgame = document.getElementById("newgame");
let resetgame = document.getElementById("resetBtn");
let boxes = document.querySelectorAll(".box");

let trueO = true;

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trueO == true) {
      box.innerHTML = "O";
      trueO = false;
    } else {
      box.innerHTML = "X";
      trueO = true;
    }
    box.disabled = true;
    showwinner();
  });
});

const showwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        winner(pos1);
      }
    }
  }
};

const winner = (win) => {
  msg.innerHTML = `congratulation the winner is ${win}`;
  msg_container.classList.remove("hide");
  disabled();
};

const disabled = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enablebox = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const resetGame = () => {
  trueO = true;
  msg_container.classList.add("hide");
  enablebox();
};

newgame.addEventListener("click", resetGame);
resetgame.addEventListener("click", resetGame);
