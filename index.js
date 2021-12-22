// get handle to text input
const inputText = document.querySelector("#task-input");
// get handle to 'task add' button
const addTask = document.querySelector("#adding-btn");
// get handle to alert message
const infoAlert = document.querySelector(".alert");
// get handle to 'remove tasks' button
const removeItems = document.querySelector("#clear-list");
// get handle to input area
const listItem = document.querySelector("#ul-of-todos");

// * = = Alert message ==
function alertMessage(message) {
  infoAlert.innerHTML = `${message}`;
  setTimeout(function () {
    infoAlert.style.display = "none";
  }, 2000);
  infoAlert.style.display = "inline-block";
}

// * = = input text trim ==
function formInput(textInput) {
  let trimmedInput = inputText.value.toLowerCase().trim();
  let trimmedOutput = trimmedInput[0].toUpperCase() + trimmedInput.slice(1);
  return trimmedOutput;
}

// * = = Add button ==
addTask.addEventListener("click", () => {
  // if empty do nothing
  if (inputText.value === "") {
    alertMessage("Dont be lazy, add something to do!");
    // if text then create tasks
  } else {
    const textToPrint = formInput(inputText);
    createList(textToPrint);
  }
});

// * = = tasks creation and putting on display ==
function createList(whatToDo) {
  const lineContent = `
  <li class="tobedone-task">
  <i class= "far fa-square" task="markDone" title="Mark task done" tabindex="0"></i>
  <span id="text">${whatToDo}</span>
  <i class="far fa-trash-alt" task = "trashIt" title="Remove task" tabindex="0"></i>
  </li>`;
  listItem.insertAdjacentHTML("beforeend", lineContent);
  inputText.value = "";
  alertMessage("New task added!");
}

// * = = event for task done and task delete when symbols clicked  ==
listItem.addEventListener("click", (event) => {
  const element = event.target;
  if (element.attributes.task.value === "markDone") {
    element.classList.replace("fa-square", "fa-check-square");
    console.log(element.parentNode.classList.value);
    element.parentNode.classList.replace("tobedone-task", "overline");

    alertMessage("Task is done!");
  } else if (element.attributes.task.value === "trashIt") {
    element.parentNode.parentNode.removeChild(element.parentNode);
    alertMessage("Task is deleted!");
  }
});

// * = = clearing all items ==
removeItems.addEventListener("click", () => {
  listOfTasks = [];
  ulOfList = document.getElementById("ul-of-todos");
  while (ulOfList.firstChild) {
    ulOfList.removeChild(ulOfList.firstChild);
  }

  alertMessage("All ToDos deleted!");
});
