// Countdown Timer https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript and https://www.youtube.com/watch?v=x7WJEmxNlEs
// To Do List https://www.w3schools.com/howto/howto_js_todolist.asp
// Special thanks to : Joy, 

//TO DO LIST CODE:

//Selectors
const input = document.querySelector("#input");
const todoList = document.querySelector("#ul");


//Event Listeners
todoList.addEventListener('click', addCheck);
/* todoList.addEventListener('click', removeList); */

//Functions
//newInput function creates new task to the to-do list.
const newInput = () => {
    
    //creates a new li, then append
    let li = document.createElement("li");
    let target = document.createTextNode(input);
    li.appendChild(target);

    if (input.value === '') {
        alert("Add something!");
    } else {
            li.className = 'todoItem';
            todoList.appendChild(li);
    }

    li.innerText = input.value;

    //create 'x' at the end of the li
    let span = document.createElement('span');
    let exit = document.createTextNode("\u00D7"); // \u00D7 for a nicer 'x'.
    span.className = "close";
    span.appendChild(exit);
    li.appendChild(span);
 }

function addCheck(e) {
    const item = e.target;
    console.log(e.target);
    //change to checked OR delete
    if(item.classList[0] === 'todoItem'){
        item.classList.toggle('checked');
    }  else if (item.classList[0] === 'close') {
        const todo = item.parentElement;
        todo.remove();
    }
}


//Timer 

const startMinutes = 25;
let time = startMinutes * 60;

const timerID = document.querySelector('#pomo');

const updateTimer = () => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    coun
    time --;
}
