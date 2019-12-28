export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(player) {
      if (this.members.has(player)) throw new Error('Такой игрок уже есть в команде');
      this.members.add(player);
    }
  
    addAll(...players) {
      players.forEach((elem) => this.members.add(elem));
    }
  
    toArray() {
      return Array.from(this.members);
    }
}
  