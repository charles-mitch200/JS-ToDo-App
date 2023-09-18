const inputElem = document.getElementById("input-box");
const buttonElem = document.querySelector("button");
const listElem = document.querySelector(".list-container");

// Store data permanently in local storage
const saveData = () => {
  localStorage.setItem("data", listElem.innerHTML);
};

// Display data
const showData = () => {
  listElem.innerHTML = localStorage.getItem("data");
};

// function to add todo
const addTodo = () => {
  if (inputElem.value === "") {
    alert("Please add todo!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputElem.value;
    listElem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputElem.value = "";
  saveData();
};

// The add button updates the todo list
buttonElem.addEventListener("click", addTodo);

// Logic to check and uncheck a todo and remove it
listElem.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

showData();
