/* eslint-disable no-unused-vars */
import Display from './module/Display.js';

const LocalStorage = require('./module/LocalStorage.js');
/**
 * @jest-environment jsdom
 */
document.body.innerHTML = `<main>
  <h1>Today's To Do List</h1>
  <form class="forms">
      <input type="text" placeholder="Add to your list..." id="desc" required>
      <button class="form-btn" type="submit">ENTER</button>
  </form>
  <div class="showList"></div>
  <button class="clearBtn" type="button">Clear all Completed</button> 
 </main>`;

LocalStorage.getlist = jest.fn(() => [
  {
    description: 'First Task',
    index: 1,
    completed: false,
    id: 1,
  },
  {
    description: 'Second Task',
    index: 2,
    completed: true,
    id: 2,
  },
]);

const task2 = {
  description: 'Third Task',
  index: 3,
  completed: false,
  id: 3,
};

const list = LocalStorage.getlist();
describe('Add task in the list ', () => {
  it('Add a task in the array for localStorage ', () => {
    list.push(task2);
    expect(list).toHaveLength(3);
  });

  it('delete a task in the array for localStorage', () => {
    list.pop();
    expect(list).toHaveLength(2);
  });

  it('Add a task in DOM', () => {
    Display.addList(task2, 1);
    const divlist = document.querySelectorAll('.showList > div');
    expect(divlist).toHaveLength(1);
  });
  it('Delete a task in DOM', () => {
    Display.deleteTask(2);
    const divlist = document.querySelectorAll('.showList > div');
    expect(divlist).toHaveLength(1);
  });
});

describe('Check the completed status', () => {
  it('check the value to be true', () => {
    Display.changebool(1);
    const info = JSON.parse(localStorage.getItem('list'));
    expect(info[0].completed).toBe(true);
  });
  it('check the value to be false', () => {
    Display.changebool(2);
    const info = JSON.parse(localStorage.getItem('list'));
    expect(info[1].completed).toBe(false);
  });
});

describe('clear All Complete', () => {
  it('Clear All complete', () => {
    const task3 = {
      description: 'Fourth Task',
      index: 4,
      completed: true,
      id: 4,
    };
    Display.addList(task2, 1);
    Display.addList(task3, 2);
    Display.clearAll();
    const info = JSON.parse(localStorage.getItem('list'));
    expect(info.length).toBe(1);
  });
});

describe('check the update function', () => {
  it('change the input', () => {
    Display.UpdateInput(1, 'Hello Kwaleyela');
    const info = JSON.parse(localStorage.getItem('list'));
    expect(info[0].description).toBe('Hello Kwaleyela');
  });
});
