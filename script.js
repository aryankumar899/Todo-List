const inputBox = document.getElementById('input-text');
const listCon = document.getElementById('task-container');

function addtask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

// listCon.addEventListener("click", function (e) {
//     console.log(e.target); // Check which element is being clicked
// });


listCon.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",listCon.innerHTML);
}
function showData(){
    listCon.innerHTML=localStorage.getItem("data");
}
showData();
