let taskInput = document.getElementById("task-input");
let taskInput1 = document.getElementById("task-input1");
let addButton = document.getElementById("add-button");
let moveButton = document.getElementById("move-button");
let taskList = [];
let filterList = [];

addButton.addEventListener("click", addTask);
moveButton.addEventListener("click", changeBtnName);
function enterkey() {
  if (window.event.keyCode == 13) {
    addTask();
  }
}
function changeBtnName() {
   const moveText = `<span>편지쓰러가기</span>
     <span class="masker">
     <span>편지쓰러가기</span>
     </span>`;
   const moveText1 = `<span>편지함가기</span>
     <span class="masker">
     <span>편지함가기</span>
     </span>`;
   let n = 30;
   if(window.scrollY < n){
     window.scrollTo(0,940);
     moveButton.innerHTML = moveText;
   }else{
     window.scrollTo(0,0);
     moveButton.innerHTML = moveText1;
   }
}

window.addEventListener('scroll', function(){
  console.log( window.scrollY)
})

function showSpinner() {
  document.getElementsByClassName("layerPopup")[0].style.display = "block";
}
function hideSpinner() {
  document.getElementsByClassName("layerPopup")[0].style.display = "none";
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    taskContent1: taskInput1.value,
  };
  if (document.getElementById("task-input", "add-button").value == "") {
    alert("이름을 입력하세요");
    return;
  }
  if (document.getElementById("task-input1", "add-button").value == "") {
    alert("메세지를 입력하세요");
    return;
  }
  taskList.push(task);
  document.getElementById("task-input", "add-button").value = "";
  document.getElementById("task-input1", "add-button").value = "";
  showSpinner();
  setTimeout(() => hideSpinner(), 200);
  setTimeout(() => render()(alert("편지가 전송되었습니다.")), 300);
}

function render() {
  let list = [];
  list = taskList;
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete) {
      resultHTML += `<div class="task" id="${list[i].id}">
      <div class="button-box">
      <button class="trash" onclick="deleteTask('${list[i].id}')" tabindex="-1"><span class="material-symbols-outlined">
      delete
      </span></button>
      </div>
      <div class="div-flex"> 
      <span>${list[i].taskContent}</span>
      </div>
      <div class="div-flex1"> 
      <textarea readonly="readonly">${list[i].taskContent1}</textarea>
      </div>
       </div>`;
    } else {
      resultHTML += `<div class="task" id="${list[i].id}" >
      <div class="button-box">  
      <button class="trash" onclick="deleteTask('${list[i].id}')" tabindex="-1"><span class="material-symbols-outlined">
      delete
      </span></button>
      </div>
      <div class="div-flex">  
      <span>${list[i].taskContent}</span> 
      </div>
      <div class="div-flex1">  
      <textarea readonly="readonly">${list[i].taskContent1}</textarea> 
      </div>
  </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

function deleteTask(id) {
  let confirm_val = confirm("정말 삭제하시겠습니까?");
  if (confirm_val == true) {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id == id) {
        filterList.splice(i, 1);
        taskList.splice(i, 1);
        break;
      } else {
      }
    }
    render();
  } else if (confirm_val == false) {
  }
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substring(2, 9);
}
