// Countdown Timer https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript
// To Do List https://www.w3schools.com/howto/howto_js_todolist.asp
// Special thanks to : Joy, 


//newInput function creates new task to the to-do list.
const newInput = () => {

    //creates a new li, then append
    let li = document.createElement("li");
    let input = document.querySelector("#input");
    let target = document.createTextNode(input);
    let todo = [];
    li.appendChild(target);

    if (input.value === '') {
        alert("Add something!");
    } else {
            document.querySelector("#ul").appendChild(li);
    }

    li.innerText = input.value;
    let span = document.createElement('span');
    let exit = document.createTextNode("\u00D7"); // \u00D7 for a nicer 'x'.
    span.className = "close";
    span.appendChild(exit);
    li.appendChild(span);
    
 
    //Still don't understand - please understand first before proceeding.
/*     close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        let div = this.parentElement;
          div.style.display = "none";
        }
    } */
}