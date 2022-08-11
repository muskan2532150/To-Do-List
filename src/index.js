import Display from '../module/Display.js';
import './style.css';
import Tasks from '../module/Task.js';
import LocalStorage from '../module/LocalStorage.js';

const form = document.querySelector('.forms');
const listContainer = document.querySelector('.showList');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const des = document.getElementById('desc').value;
  const index = LocalStorage.idGenerator();
  const id = LocalStorage.idGenerator();
  const task = new Tasks(des, index, id);
  Display.addList(task, id);
  LocalStorage.addLocal(task);
  document.getElementById('desc').value = '';
});

listContainer.addEventListener('click', (e) => {
  const eventClass = e.target.className;

  if (eventClass === 'mycheckbox') {
    e.target.nextSibling.classList.toggle('active');
    Display.changebool(e.target.id);
  } else if (eventClass === 'displayP') {
    const list = LocalStorage.getlist();
    const eventinput = e.target.previousSibling.id;

    e.target.addEventListener('change', (e) => {
      list[eventinput - 1].des = e.target.value;
      localStorage.setItem('list', JSON.stringify(list));
    });
  } else {
    const removebtn = e.target.parentNode.previousSibling.firstChild.id;
    Display.renameLocal(removebtn, e.target);
  }
});

const clearbtn = document.querySelector('.clearBtn');
clearbtn.addEventListener('click', () => {
  Display.clearAll();
  LocalStorage.clearLocal();
});

function displayFirst() {
  const list = LocalStorage.getlist();
  list.forEach((task, index) => {
    Display.addList(task, task.id);
    const nodeList = document.querySelectorAll('.displayP');
    const elements = Array.from(nodeList);
    if (task.bool) {
      elements[index].classList.toggle('active');
    }
  });
}

displayFirst();
