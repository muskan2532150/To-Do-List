import LocalStorage from './LocalStorage.js';

export default class Display {
  static addList(task, id) {
    const listContainer = document.querySelector('.showList');
    const div = document.createElement('div');
    const div1 = document.createElement('div');
    const input = document.createElement('input');
    const input1 = document.createElement('input');
    const button = document.createElement('button');
    const i = document.createElement('i');
    div.setAttribute('class', 'list');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'mycheckbox');
    input.setAttribute('id', id);
    input1.setAttribute('class', 'displayP');
    input1.setAttribute('value', task.description);
    input1.setAttribute('type', 'text');
    input1.setAttribute('required', '');
    button.setAttribute('class', 'list-btn ');
    i.setAttribute('class', 'fa-solid fa-trash');

    button.appendChild(i);
    div1.appendChild(input);
    div1.appendChild(input1);
    div.appendChild(div1);
    div.appendChild(button);

    listContainer.appendChild(div);

    document.querySelector('.clearBtn').style.display = 'inline-block';
  }

  static deleteTask(id) {
    const list = LocalStorage.getlist();
    list.forEach((task, i) => {
      if (task.index.toString() === id.toString()) {
        list.splice(i, 1);
      }
    });
    Display.changeindex(list);
    if ((Object.keys(list).length) === 0) document.querySelector('.clearBtn').style.display = 'none';
    localStorage.setItem('list', JSON.stringify(list));
  }

  static changebool(id) {
    const list = LocalStorage.getlist();
    list.forEach((task) => {
      if (task.id.toString() === id.toString()) {
        task.completed = !task.completed;
      }
    });
    localStorage.setItem('list', JSON.stringify(list));
  }

  static changeindex(list) {
    list.forEach((task, i) => {
      task.index = i + 1;
    });
  }

  static clearAll() {
    const List = document.querySelectorAll('.list');
    const tasks = LocalStorage.getlist();
    const arr = [];
    tasks.forEach((task, index) => {
      if (task.completed) {
        List[task.index - 1].remove();
      } else {
        arr.push(tasks[index]);
      }
    });
    Display.changeindex(arr);
    if ((Object.keys(arr).length) === 0) document.querySelector('.clearBtn').style.display = 'none';
    localStorage.setItem('list', JSON.stringify(arr));
  }

  static UpdateInput(id, value) {
    const list = LocalStorage.getlist();
    [...list].forEach((el) => {
      if (el.id.toString() === id.toString()) { list[el.index - 1].description = value; }
    });
    localStorage.setItem('list', JSON.stringify(list));
  }
}
