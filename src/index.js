import Display from '../module/Display.js';
import './style.css';
import LocalStorage from '../module/LocalStorage.js';
import Tasks from '../module/Task.js';

const form = document.querySelector('.forms');
const listContainer = document.querySelector('.showList');
const clearbtn = document.querySelector('.clearBtn');

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

  // Taking event target class
  const eventClass = e.target.className;

  // Check if the event is checkbox
  if (eventClass === 'mycheckbox') {
    e.target.nextSibling.classList.toggle('active');
    Display.changebool(e.target.id);
  } 
  // Check if the event is change input
  else if (eventClass === 'displayP') {
    const eventinput = e.target.previousSibling.id;
    e.target.addEventListener('change', (e) => {
      Display.UpdateInput(eventinput,e.target.value);
    });
  } 
  // check if the event is delete 
  else {
    const removebtn = [...document.querySelectorAll('.showList > .list')].findIndex((element) => element === e.target.parentNode.parentNode);
    Display.deleteTask(removebtn + 1);
    e.target.parentNode.parentNode.remove();
  }
});

clearbtn.addEventListener('click', () => {
  Display.clearAll();
});

const displayFirst = () => {
  const list = LocalStorage.getlist();
  list.forEach((task, index) => {
    Display.addList(task, task.id);
    const nodeList = document.querySelectorAll('.displayP');
    const nodeListCheckbox = document.querySelectorAll('.mycheckbox');
    const elements = [...nodeList];
    const checkBoxList = [...nodeListCheckbox];
    if (task.bool) {
      elements[index].classList.toggle('active');
      checkBoxList[index].setAttribute('checked', '');
    }
  });
};

displayFirst();
