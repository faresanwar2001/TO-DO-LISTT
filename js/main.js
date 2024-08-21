let valueInput = document.getElementById("valueInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList")



if (JSON.parse(localStorage.getItem("list"))!==null){
    tasks=JSON.parse(localStorage.getItem("list"))
}else{
    tasks=[]
}
displayTask()
function addList(){
    allTasks={
        id: tasks.length+1,
        task:valueInput.value
    }
 tasks.push(allTasks);
 var allList = JSON.stringify(tasks);
 localStorage.setItem("list", allList);
 displayTask()
 clearTask()
 

 
}
addTask.addEventListener("click",addList)

function displayTask(){
    let item =``
    for(let i=0;i<tasks.length;i++){
        item+=`<li>${tasks[i].id}&nbsp; &nbsp;&nbsp;&nbsp; ${tasks[i].task} <button id="deleteInput" onClick="deleteTask(${i})"><i class="fa-solid fa-trash"></i></button> </li>`
        
        
        
    }
    taskList.innerHTML=item
}
function clearTask(){
    valueInput.value=''
}
function deleteTask(index){

    tasks.splice(index,1)
    displayTask()
    localStorage.setItem('list', JSON.stringify(tasks));
}
