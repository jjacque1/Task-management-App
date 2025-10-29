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

  // Display task in list: Create a single list item that includes all info

  let listItem = document.createElement("li");
  listItem.textContent = `${task.category}| ${task.name} |${task.deadline} |${task.status}`; 

  taskList.appendChild(listItem);

  //Clear inputs

  taskInput.value = "";
  categoryInput.value = "";
  deadlineInput.value = "";
  statusInput.value = "";

  console.log(tasks)
});
