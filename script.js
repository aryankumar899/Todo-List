const inputBox=document.getElementById('input-text');
const listCon=document.getElementById('task-container');

function addtask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listCon.appendChild(li);
    }
    inputBox.value="";
}
