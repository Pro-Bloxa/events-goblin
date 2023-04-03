export class Goblin {
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
