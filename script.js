const inputBox = document.querySelector(".input-box");
const addBtn = document.querySelector(".add-btn");
const todoItems = document.querySelector(".items");

addBtn.addEventListener("click", () => {
  creatTodo();
});

const creatTodo = () => {
  if (inputBox.value === "") {
    inputBox.classList.add("border");
  } else {
    let todos = inputBox.value;
    inputBox.value = "";
    addTodo(todos);
  };
  inputBox.addEventListener("click", () => {
    inputBox.classList.remove("border");
  });
};

let data = JSON.parse(localStorage.getItem('data'));

function addTodo(todos) {

  data.push(todos);

  localStorage.setItem("data", JSON.stringify(data));
  genarateTodos();
};




function genarateTodos() {
  let finalTodo = '';
  data.forEach((todos, i) => {
    finalTodo += ` <li id=${i}>
  <input type="checkbox"  />
  <p id="#form">${todos}</p>
  <div class="icon">
    <span data-bs-toggle="modal" data-bs-target='#form' onClick ="editTodo(this)"><i class="fa-regular fa-pen-to-square"></i></span>
    <span onClick ="deleteTodo(this)"> <i class="fa-regular fa-trash-can"></i></span>
  </div>

</li>`

  });
  todoItems.innerHTML = finalTodo;
};

genarateTodos();

function deleteTodo(e) {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id,1);
  localStorage.setItem("data", JSON.stringify(data));
};

function editTodo(e) {
  inputBox.value =e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id,1);
  localStorage.setItem("data", JSON.stringify(data));
};
