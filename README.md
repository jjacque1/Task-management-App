# Project Title

Task Management App

## Description

In this assessment, you will build a Task Management App that allows users to add tasks with deadlines, assign categories, and update the status of each task. This app will require you to apply a wide range of JavaScript concepts, including arrays, objects, DOM manipulation, conditionals, and local storage to persist the task data.



## Getting Started

You will create a dynamic task management app that lets users:

Add new tasks with details such as the task name, category, deadline, and status.
Update the status of tasks to reflect their progress (e.g., “In Progress,” “Completed,” “Overdue”).
Automatically update task status based on the current date (tasks past their deadline will be marked as “Overdue”).
Filter tasks by status or category.
Persist task data using local storage so tasks are saved even after refreshing the page.


## Project Requirements

1. Adding New Tasks
Create input fields for the task name, category, deadline, and an initial status (e.g., “In Progress”).
Include an “Add Task” button that will add the task to the task list.
Each task should be stored as an object with properties such as task name, category, deadline, and status.
Add the task object to an array that holds all tasks.
2. Displaying the Task List
Create an HTML structure (such as an unordered list or table) to display the task list.
For each task, display the task name, category, deadline, and status.
Dynamically update the task list in the browser each time a new task is added or a status is updated.
3. Updating Task Status
Allow users to update the status of tasks (e.g., “In Progress,” “Completed”) via a dropdown or button.
Automatically check each task’s deadline and mark tasks as “Overdue” if the current date has passed the deadline.
Update the displayed task list whenever a task’s status changes.
4. Filtering Tasks
Add functionality to filter tasks by category or status (e.g., show only “Completed” tasks or tasks under the “Work” category).
Provide a dropdown or set of buttons for users to choose a filter.
When a filter is selected, only display the tasks that match the selected category or status.
5. Persisting Task Data with Local Storage
Use local storage to save the current state of the task list so that tasks are restored when the page is refreshed.
Ensure that task data (including name, category, deadline, and status) is stored and retrieved correctly.

## Acknowledgments

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Representing_dates_times

https://www.youtube.com/watch?v=LwYwz67l1lA

https://www.youtube.com/shorts/jZUHZDXmQ_A

https://www.google.com/search?q=how+to+get+the+time+a+button+was+clicked+in+javascript&sca_esv=de39b42295ba4a4a&sxsrf=AE3TifN4w_P9Pfu1QUO5E5cvLUkQKkduBQ%3A1761783840114&ei=ILACaafiBuOPp84PuPC2kAo&oq=how+to+get+the+time+a+button+was+clicked+&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIilob3cgdG8gZ2V0IHRoZSB0aW1lIGEgYnV0dG9uIHdhcyBjbGlja2VkICoCCAAyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRifBTIFECEYnwUyBRAhGJ8FMgUQIRifBUjGflDHDFiOZnAHeAGQAQCYAYQCoAHZLqoBBzExLjMyLjK4AQHIAQD4AQGYAjSgAv0wqAIUwgINECMYgAQYJxiKBRjqAsICEBAjGIAEGCcYigUY6gIYiwPCAgcQIxgnGOoCwgIKECMYJxjqAhiLA8ICFBAAGIAEGJECGLQCGIoFGOoC2AEBwgIQEC4YAxi0AhjqAhiPAdgBAcICEBAAGAMYtAIY6gIYjwHYAQHCAgQQIxgnwgILEAAYgAQYkQIYigXCAgoQABiABBhDGIoFwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxjRAxjHAcICCxAAGIAEGLEDGIoFwgILEC4YgAQYsQMY1ALCAggQABiABBixA8ICBRAAGIAEwgIOEAAYgAQYsQMYigUYjQbCAgoQIxiABBgnGIoFwgILEAAYgAQYsQMYgwHCAggQLhiABBixA8ICBBAAGAPCAgYQABgWGB7CAggQABiABBiiBMICCBAAGKIEGIkFwgILEAAYgAQYhgMYigXCAgUQIRirAsICBxAhGKABGAqYAx3xBWTwYKX4fCaPugYGCAEQARgBkgcHMTQuMzQuNKAH-f8CsgcGNy4zNC40uAe9MMIHCzAuMTIuMzkuMC4xyAfNAQ&sclient=gws-wiz-serp

https://perscholas.instructure.com/courses/2978/assignments/577966?confetti=true&submitted=1 

https://www.youtube.com/watch?v=ItIyxrAHY78