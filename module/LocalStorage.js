 class LocalStorage {
  static getlist() {
    let task;
    if (localStorage.getItem('list') === null) {
      task = [];
    } else {
      task = JSON.parse(localStorage.getItem('list'));
    }
    return task;
  }

  static addLocal(task) {
    const list = LocalStorage.getlist();
    list.push(task);
    localStorage.setItem('list', JSON.stringify(list));
  }

  static idGenerator() {
    const task = LocalStorage.getlist();
    const id = task.length ? task[task.length - 1].index + 1 : 1;
    return id;
  }
}

module.exports =LocalStorage;