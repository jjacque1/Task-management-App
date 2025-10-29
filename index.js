//Getting the html input values by id

let categoryInput = document.getElementById("categoryInput");

let taskInput = document.getElementById("taskInput");

let deadlineInput = document.getElementById("deadlineInput");

let statusInput = document.getElementById("statusInput");

let taskList = document.getElementById("taskList");

let addTaskButton = document.getElementById("addTaskButton");

//ADDING EVENT LISTENERS

addTaskButton.addEventListener("click", function () {
  let taskText = taskInput.value;
  let categoryText = categoryInput.value;
  let deadlineText = deadlineInput.value;
  let statusText = statusInput.value;

  if (
    taskText === "" ||
    categoryText === "" ||
    deadlineText === "" ||
    statusText === ""
  ) {
    alert("Please fill in all fields before adding a task");
    return;
  }

  // Create a single list item that includes all info

  let listItem = document.createElement("li");
  listItem.innerText = `

    Category: ${categoryText} 
    Task: ${taskText} 
    Deadline: ${deadlineText} 
    Status: ${statusText}`;

  taskList.appendChild(listItem);

  //Clear inputs

  taskInput.value = "";
  categoryInput.value = "";
  deadlineInput.value = "";
  statusInput.value = "";
});

// addTaskButton.addEventListener("click", function () {

//   if (categoryText === "") {
//     alert("Please enter a category");
//     return;
//   }

//   let listItem = document.createElement("li");
//   listItem.innerText = categoryText;

//   categoryList.appendChild(listItem);
//   categoryInput.value = "";
// });

// addTaskButton.addEventListener("click", function () {

//   if (deadlineinput === "") {
//     alert("Please pick a deadline date");
//     return;
//   }

//   let listItem = document.createElement("li");
//   listItem.innerText = deadlineinput;

//   deadlineList.appendChild(listItem);
//   deadlineinput.value = "";
// });
