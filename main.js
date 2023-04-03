/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/board.js
class Board {
  constructor(number) {
    this.number = number;
  }
  createBoard() {
    const field = document.querySelector("#field");
    for (let i = 0; i < this.number; i += 1) {
      let tr = document.createElement("tr");
      for (let j = 0; j < this.number; j += 1) {
        let td = document.createElement("td");
        td.classList.add("cell");
        tr.appendChild(td);
      }
      field.appendChild(tr);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/goblin.js
class Goblin {
  locateGoblin() {
    let cells = Array.from(document.querySelectorAll(".cell"));
    let location = Math.floor(Math.random() * cells.length);
    cells[location].classList.add("goblin");
    setInterval(this.changeCell, 1000, cells);
  }
  changeCell(cells) {
    let tdActive = document.querySelector(".goblin");
    let position = cells.indexOf(tdActive);
    let pos = Math.floor(Math.random() * cells.length);
    if (position !== pos) {
      cells[position].classList.remove("goblin");
      cells[pos].classList.add("goblin");
    }
  }
}
;// CONCATENATED MODULE: ./src/js/gamePlay.js


class GamePlay {
  constructor() {
    this.gameBoard = new Board(4);
    this.goblin = new Goblin();
    this.board = document.querySelector("#field");
    this.countPlus = document.querySelector(".count-plus");
    this.countMinus = document.querySelector(".count-minus");
    this.countSkip = 0;
    this.count = 0;
  }
  start() {
    this.gameBoard.createBoard();
    this.goblin.locateGoblin();
    this.board.addEventListener("click", event => {
      event.preventDefault();
      this.clickCell(event);
    });
  }
  clickCell(event) {
    if (!event.target.classList.contains("goblin")) {
      this.countSkip++;
      this.countMinus.textContent = this.countSkip;
      if (this.countSkip === 5) {
        this.reset();
        alert("Вы проиграли!");
      }
    } else {
      this.count++;
      this.countPlus.textContent = this.count;
      if (this.count === 5) {
        this.reset();
        alert("Вы выиграли!");
      }
    }
  }
  reset() {
    this.countSkip = 0;
    this.count = 0;
    this.countPlus.textContent = 0;
    this.countMinus.textContent = 0;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const game = new GamePlay();
game.start();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
//# sourceMappingURL=main.js.map