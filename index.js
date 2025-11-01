// Getting elements by id

let categoryInput = document.getElementById("categoryInput");

let taskInput = document.getElementById("taskInput");

let deadlineInput = document.getElementById("deadlineInput");

let statusInput = document.getElementById("statusInput");

let taskList = document.getElementById("taskList");

let addTaskButton = document.getElementById("addTaskButton");

//INITIALIZE AN EMPTY ARRAY TO HOLD TASK OBJECTS

let tasks = [];

//DECLEAR A FUNCTION THAT WILL DISPLAY ONE TASK IN THE TABLE

function renderTaskRow(task) {
  //CRATE NEW TABLE ROW ELEMENT
  let tr = document.createElement("tr");

  //CREATES THE FIRST TABLE cell on the row
  let td1 = document.createElement("td");
  td1.textContent = task.category;
  tr.appendChild(td1);

  //CREATES THE second TABLE cell on the row
  let td2 = document.createElement("td");
  td2.textContent = task.name;
  tr.appendChild(td2);

  //CREATES THE third TABLE cell on the row
  let td3 = document.createElement("td");
  td3.textContent = task.deadline;
  tr.appendChild(td3);

  //CREATES THE fourth TABLE cell on the row
  let td4 = document.createElement("td");
  td4.textContent = task.status;
  tr.appendChild(td4);

  //ADD THE ROW TO THE tbody with the id="taskList"

  taskList.appendChild(tr);
}

//ADDING EVENT LISTENERS

addTaskButton.addEventListener("click", function (event) {
  event.preventDefault();

  let taskText = taskInput.value;
  let categoryText = categoryInput.value;
  let deadlineText = deadlineInput.value;
  let statusText = statusInput.value;

  // VALIDATE INPUTS

  if (
    taskText === "" ||
    categoryText === "" ||
    deadlineText === "" ||
    statusText === ""
  ) {
    alert("Please fill in all fields before adding a task");
    return;
  }

  //Get today's date

  const today = new Date();

  /*When we create a date in JavaScript, like this:

 const today = new Date(); 
 
 it includes both the date and the time down to milliseconds.

Example: 2025-10-29T20:45:12.456Z

if you compare two dates directly — for example:   

deadlineDate < today  

that comparison includes the time of day too. So if your task’s deadline is today at 00:00 (midnight) and you check later in the day (like 8 p.m.), JavaScript thinks it’s already “past,” even though it’s still the same day.*/

  //SET THE TIME TO MIDNIGHT

  today.setHours(0, 0, 0, 0);

  /*This method changes the time part of your date to: 00:00:00.000 
So now today becomes just: 2025-10-29T00:00:00.000Z
That means when we compare:

deadlineDate < today

we’re effectively comparing calendar dates only, not times.
It’s a clean, reliable way to check whether a date is before, after, or equal to another date.
*/

  //CHANGE DEADLINE TEXT INTO A DATE OBJECT

  //Strings can’t be compared like real dates — so you convert it into a Date object:

  let deadlineDate = new Date(deadlineText);

  //SET DEADLINE DATE TO MIDNIGHT

  deadlineDate.setHours(0, 0, 0, 0);

  //SET DEFAULT STATUS TO THE USER'S SELECTION

  let updatedStatusText = statusText;

  //COMPARE DEADLINE DATE TO TODAY'S DATE

  if (deadlineDate < today) {
    if (statusText.toLowerCase() !== "completed") {
      updatedStatusText = "Overdue";
    } else {
      updatedStatusText = "Completed";
    }
  } else {
    updatedStatusText = statusText;
  }

  //CREATE A TASK OBJECT USING THE VARIBLES DECLEARED IN THE EVENTLISTENER FUNCTION

  let task = {
    name: taskText,
    category: categoryText,
    deadline: deadlineText,
    status: updatedStatusText,
  };

  //ADDING THE OBJECT TO THE EMPTY ARRAY

  tasks.push(task);

  // console.log(tasks) //test to see tasks array in the console

  renderTaskRow(task);
  //CLEAR INPUT FIELDS

  taskInput.value = "";
  categoryInput.value = "";
  deadlineInput.value = "";
  statusInput.value = "";
});
