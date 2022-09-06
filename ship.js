/**
 *
 * OOP in ES5 below
 * @param {number} draft
 * @param {number} crew
 */
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

// Cannot add method directly in Ship, so to add method to Ship class, you have to use prototype
Ship.prototype.measureWeight = function () {
  if (this.draft > 20) {
    return "Banyak nih muatan kapalnya";
  } else {
    return "Lebih banyak muatan orangnya...";
  }
};

const emptyShip = new Ship(2, 9);

console.log(emptyShip.measureWeight());

// ship() {
//   if (this.draft + this.crew * 1.5 > 20) {
//     return "Banyak nih muatan kapalnya";
//   } else {
//     return "Lebih banyak muatan orangnya...";
//   }
// }
