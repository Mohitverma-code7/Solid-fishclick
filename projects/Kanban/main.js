const columns = document.querySelectorAll(".column");
let draggedTask = null;
const STORAGE_KEY = "kanban-data";

// CREATE TASK
function createTask(text, priority = null) {
  const task = document.createElement("div");
  task.className = "task";
  task.setAttribute("draggable", true);

  const priorities = ["low", "medium", "high"];
  const randomPriority = priority || priorities[Math.floor(Math.random()*3)];

  task.innerHTML = `
    <div>
      <span>${text}</span>
      <div class="badge ${randomPriority}">${randomPriority}</div>
    </div>
    <button class="delete-btn">✕</button>
  `;

  return task;
}

// SAVE DATA
function saveData() {
  const data = [];

  columns.forEach(col => {
    const tasks = [];

    col.querySelectorAll(".task").forEach(task => {
      tasks.push({
        text: task.querySelector("span").textContent,
        priority: task.querySelector(".badge").textContent
      });
    });

    data.push(tasks);
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// LOAD DATA
function loadData() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!data) return;

  data.forEach((tasks, index) => {
    tasks.forEach(taskData => {
      const task = createTask(taskData.text, taskData.priority);
      columns[index].querySelector(".tasks").appendChild(task);
    });
  });
}

// UPDATE COUNTS
function updateCounts() {
  columns.forEach(col => {
    col.querySelector(".count").textContent =
      col.querySelectorAll(".task").length;
  });
}

// ADD TASK
document.addEventListener("click", e => {
  if (e.target.classList.contains("add-btn")) {
    const column = e.target.closest(".column");
    const input = column.querySelector(".task-input");

    if (!input.value.trim()) return;

    const task = createTask(input.value);
    column.querySelector(".tasks").appendChild(task);

    input.value = "";
    updateCounts();
    saveData();
  }
});

// DELETE TASK
document.addEventListener("click", e => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    updateCounts();
    saveData();
  }
});

// DRAG START
document.addEventListener("dragstart", e => {
  if (e.target.classList.contains("task")) {
    draggedTask = e.target;
    e.target.classList.add("dragging");
  }
});

// DRAG END
document.addEventListener("dragend", e => {
  if (e.target.classList.contains("task")) {
    e.target.classList.remove("dragging");
    draggedTask = null;
    saveData();
  }
});

// DRAG DROP
columns.forEach(col => {
  col.addEventListener("dragover", e => {
    e.preventDefault();
    col.classList.add("drag-over");
  });

  col.addEventListener("dragleave", () => {
    col.classList.remove("drag-over");
  });

  col.addEventListener("drop", () => {
    col.classList.remove("drag-over");

    if (draggedTask) {
      col.querySelector(".tasks").appendChild(draggedTask);
      updateCounts();
      saveData();
    }
  });
});

// INIT
loadData();
updateCounts();