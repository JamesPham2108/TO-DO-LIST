// accessing elements with the IDs "input-box" and "list-container" in the HTML document.
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


// linking the "Enter" key (on the keyboard) with the "Add Task" button on the Web Page
// When the "Enter" key is pressed, it triggers a click event on an element with the ID "add," effectively simulating a click on the "Add Task" button.
inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("add").click();
    }
});


// for executing the content inside the Box
function addTask() {

    // alert if the user don't input anything
    if (inputBox.value === "") {
        alert("Please write some tasks before saving it!")
    }

    // creating a new list item (<li>) containing the input text and appends it to the listContainer.
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // adding a close button (<span>) to each list item for task removal.
        let span = document.createElement("span");
        span.innerHTML = "&#10006";
        li.appendChild(span);
    }
    // preparing for the nex input
    inputBox.value = "";
    keepData();
}

// for changing the tick (check or uncheck)
// when a list item (<li>) is clicked, it toggles a "checked" class to mark or unmark the task as completed. If the close button (<span>) within a list item is clicked, it removes the corresponding list item.
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        keepData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        keepData();
    }
}, false);


// keepping the list that already input if we refresh the brower
// storing and retrieve task data in local storage. keepData() saves the current task list (listContainer.innerHTML) in the local storage, and showTask() retrieves and displays the task list from local storage when the page is refreshed.
function keepData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
