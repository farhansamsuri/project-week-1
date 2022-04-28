// Countdown Timer https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript and https://www.youtube.com/watch?v=x7WJEmxNlEs
// To Do List https://www.w3schools.com/howto/howto_js_todolist.asp

//TO DO LIST CODE:

//Selectors
const input = document.querySelector("#input");
const todoList = document.querySelector("#ul");


//Event Listeners
todoList.addEventListener('click', addCheck);

//Functions
//function creates new task to the to-do list.
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




//Timer Code


//Variables, Selectors

const timerID = document.querySelector('#pomo');
const startStop = document.querySelector('#startStop');
const mainID = document.querySelector('#mainTimer');
const restID = document.querySelector('#restTimer');
const sessionsID = document.querySelector('#sessions');
const changeBody = document.querySelector("body");


let startMinutes = .1;
let restMinutes = .1;
let time = startMinutes * 60;
let restTime = restMinutes * 60;
let n = 1;
let start = false;
let rest = false;

const displayTime = () => {if (startMinutes < 10){
    
    timerID.innerText = `0${startMinutes}:00`;
} else {timerID.innerText = `${startMinutes}:00`}

sessionsID.innerText = `Session No: ${n}`;
}
displayTime();

//Main Timer
const updateTimer = () => {
    if (rest === false){
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    time --;
    console.log('time:', time);

    } else if (rest === true){
    minutes = Math.floor(restTime / 60);
    seconds = restTime % 60;
    restTime --;
    console.log('restTime:', restTime);
    }


    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
    seconds = '0' + seconds;
}

timerID.innerText = `${minutes}:${seconds}`;

if (time < 0 || restTime < 0) {
    clearInterval(startTimer);
    startMinutes = startMinutes - '0';
    restMinutes = restMinutes - '0';
    time = startMinutes * 60;
    restTime = restMinutes * 60;
    rest = !rest;
    if (startMinutes < 10 || restMinutes < 10){
    timerID.innerText = `0${rest ? restMinutes : startMinutes}:00`;
    } else {
    timerID.innerText = `${rest ? restMinutes : startMinutes}:00`;        
    }

    if (rest === true){
        changeBody.style.background = 'linear-gradient(to right, #360033, #0b8793)';
    } else if (rest === false){
        changeBody.style.background = 'linear-gradient(to right, #f2709c, #ff9472)';
    }

    rest ? n = n : n++;
    sessionsID.innerText = `Session No: ${n}`;

    start = !start;
    console.log(`startMinutes ${startMinutes}, restMinutes ${restMinutes}`);
}
}

// Start/Pause/Stop Function
const startFunc = () => {
    if (start === false){
startTimer = setInterval(updateTimer, 1000);
start = true;
console.log('startMinutes:', startMinutes, 'time', time);
    } else if (start === true){
        clearInterval(startTimer);
        start = false;
    }
}


// Setting, Editing Function
const setMain = () => {
    console.log(parseInt(mainID.value));
    startMinutes = parseInt(mainID.value);
    time = startMinutes * 60;
    if (startMinutes < 10 /* && startMinutes.charAt(0) != 0 */){
        startMinutes = '0' + startMinutes;
    }
    if (rest === false){
    timerID.innerHTML = `${startMinutes}:00`;
    }
}

//Rest Timer
const setRest = () => {
    console.log(parseInt(restID.value));
    restMinutes = parseInt(restID.value);
    restTime = restMinutes * 60;
    console.log('rest:', rest);
    if (restMinutes < 10 /* && restMinutes.charAt(0) != '0' */){
        restMinutes = '0' + restMinutes;
    }
    if (rest === true){
        timerID.innerHTML = `${restMinutes}:00`;
    }   
}