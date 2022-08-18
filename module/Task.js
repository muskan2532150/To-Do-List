export default class Tasks {
  constructor(des, index, id, bool = false) {
    this.description = des;
    this.index = index;
    this.completed = bool;
    this.id = id;
  }
}