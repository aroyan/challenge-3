class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  ship() {
    if (this.draft > 20) {
      return "Banyak nih muatan kapalnya";
    } else {
      return "Lebih banyak muatan orangnya...";
    }
  }
}

const emptyShip = new Ship(2, 9);

console.log(emptyShip.ship());

// ship() {
//   if (this.draft + this.crew * 1.5 > 20) {
//     return "Banyak nih muatan kapalnya";
//   } else {
//     return "Lebih banyak muatan orangnya...";
//   }
// }
