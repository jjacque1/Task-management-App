//Getting the html input values by id

let categoryInput = document.getElementById("categoryInput");

let taskInput = document.getElementById("taskInput");

let deadlineInput = document.getElementById("deadlineInput");

let taskList = document.getElementById("taskList");
let categoryList = document.getElementById("categoryList")

let statusUpdate = document.getElementById("statusUpdate");

addTaskButton.addEventListener("click", function () {
    let taskText = taskInput.value;
    if (taskText === "") {
        alert("Please enter a task to get started!")
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerText = taskText

    taskList.append(listItem);
    taskInput.value = "";
})

addTaskButton.addEventListener("click", function () {
    let categoryText = categoryInput.value;
    if (categoryText === "") {
        alert("Please add a Task Category.")
        return;
    }

    let listItem = document.createElement("li");
    listItem.innerText = categoryText;

    categoryList.append(listItem);
    categoryInput.value = ""
})