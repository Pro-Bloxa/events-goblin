export class Board {
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
