//Getting elements by id

let categoryInput = document.getElementById("categoryInput");

let taskInput = document.getElementById("taskInput");

let deadlineInput = document.getElementById("deadlineInput");

let statusInput = document.getElementById("statusInput");

let taskList = document.getElementById("taskList");

let addTaskButton = document.getElementById("addTaskButton");

//TASK ARRAY

let tasks = [];

//ADDING EVENT LISTENERS

addTaskButton.addEventListener("click", function () {
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

  //CREATE A TASK OBJECT

  let task = {
    name: taskText,
    category: categoryText,
    deadline: deadlineText,
    status: statusText,
  };

  //ADDING THE OBJECT TO THE ARRAY

  tasks.push(task);

  // Display task in task object

  let listItem = document.createElement("li");
  listItem.innerText = `${task.category}| ${task.name} |${task.deadline} |${task.status}`;

  taskList.appendChild(listItem);

  //Clear inputs

  taskInput.value = "";
  categoryInput.value = "";
  deadlineInput.value = "";
  statusInput.value = "";

//   console.log(tasks);


//Get today's date

let today = new Date();

//Change deadline text into a Date object

// if (deadlineDate < today) {

// }


});



