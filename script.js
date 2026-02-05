function add() {
  const input = document.getElementById("task");
  head = document.getElementById("head");
  head.removeAttribute("hidden");
const h3 = document.querySelector("h3"); 
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


  // append cells to row
  tr.appendChild(tdTask);
  tr.appendChild(tdAction);
  input.value = ""; // clear input

  // append row to table
  document.getElementById("list").appendChild(tr);
  const table = document.getElementById("list");
const firstDataRow = table.rows[0]; // first row after header
firstDataRow.onclick = () =>  h3.hidden = true;
}