import Tasks from './Task.js';

const listContainer = document.querySelector('.showList');
export default class Display {
  static addList() {
    Tasks.forEach((task) => {
      const div = document.createElement('div');
      const input = document.createElement('input');
      const p = document.createElement('p');
      div.setAttribute('class', 'list');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('class', 'mycheckbox');
      p.setAttribute('class', 'displayP');
      const pText = document.createTextNode(task.discription);
      p.appendChild(pText);
      div.appendChild(input);
      div.appendChild(p);

      listContainer.appendChild(div);
    });
  }
}