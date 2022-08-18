/* eslint-disable */
 
 const { default: JSDOMEnvironment } = require('jest-environment-jsdom');
const LocalStorage = require('./module/LocalStorage');
import Display from './module/Display'
 /**
 * @jest-environment jsdom
 */
  document.body.innerHTML =
  `<main>
  <h1>Today's To Do List</h1>
  <form class="forms">
      <input type="text" placeholder="Add to your list..." id="desc" required>
      <button class="form-btn" type="submit">ENTER</button>
  </form>
  <div class="showList"></div>
  <button class="clearBtn" type="button">Clear all Completed</button> 
 </main>`;

 LocalStorage.getlist = jest.fn(()=>[
   {
    description:'First Task',
    index:1,
    completed:false,
    id:1
   }
]);

describe('Add task in the list ', () => {
   const task2 = {
      description:'Second Task',
      index:2,
      completed:false,
      id:2
     };
   it('Add a task in the array for localStorage ',()=>{
    
    const list = LocalStorage.getlist();
    list.push(task2);
    expect(list).toHaveLength(2);
   });

  it('delete a task in the array for localStorage',()=>{
   LocalStorage.getlist = jest.fn(()=>[
      {
       description:'First Task',
       index:1,
       completed:false,
       id:1
      }
   ]);
   const list = LocalStorage.getlist();
   list.pop();
   expect(list).toHaveLength(0);
  });

  it('Add a task in DOM',()=>{
   Display.addList(task2,1);
   const divlist = document.querySelectorAll('.showList > div');
   expect(divlist).toHaveLength(1);
  });
  it('Delete a task in DOM',()=>{
   Display.deteleTask(2);
   const divlist = document.querySelectorAll('.showList > div');
   expect(divlist).toHaveLength(1);
  });
  
});





