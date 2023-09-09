
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                li.classList.add("complete");
            } else {
                li.classList.remove("complete");
            }
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
const taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
