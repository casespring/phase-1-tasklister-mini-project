document.addEventListener("DOMContentLoaded", () => {
  // your code here
       let form = document.getElementById("create-task-form")
       form.addEventListener("submit", (e) => {
        e.preventDefault();
        todoList(e.target["new-task-description"].value);
        form.reset();
       })
});

function todoList(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener('click', btnDelete)
  btn.textContent = " X "
  p.textContent = `${todo} `;
  console.log(p);
  document.querySelector('#list').appendChild(p)
  p.appendChild(btn)
}

function btnDelete(e) {
  e.target.parentNode.remove();
};
