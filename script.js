function add() {
  const input = document.getElementById("task");
  head = document.getElementById("head");
  head.removeAttribute("hidden");

  const taskText = input.value.trim();

  if (taskText === "") return;

  // create row
  const tr = document.createElement("tr");

  // create task cell
  const tdTask = document.createElement("td");
  tdTask.textContent = taskText;

  // create action cell with delete button
  const tdAction = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";

  deleteBtn.onclick = () => tr.remove();
  tdAction.appendChild(deleteBtn);
if(tr===null) {
    alert("No Tasks Added");
  }
  // append cells to row
  tr.appendChild(tdTask);
  tr.appendChild(tdAction);
  input.value = ""; // clear input

  // append row to table
  document.getElementById("list").appendChild(tr);

}