let taskInput = document.getElementById("task-input");
let taskInput1 = document.getElementById("task-input1");
let addButton = document.getElementById("add-button");
let moveButton = document.getElementById("move-button");
let mySwiper = document.getElementById("my-siper");
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
  const moveText = `<span class="move-font">편지쓰러가기</span>
     <span class="masker">
     <span class="move-font">편지쓰러가기</span>
     </span>`;
  const moveText1 = `<span class="move-font">편지함가기</span>
     <span class="masker">
     <span class="move-font">편지함가기</span>
     </span>`;
  let n = 30;
  if (window.scrollY < n) {
    window.scrollTo(0, 940);
    moveButton.innerHTML = moveText;
  } else {
    window.scrollTo(0, 0);
    moveButton.innerHTML = moveText1;
  }
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    taskContent1: taskInput1.value,
  };
  if (document.getElementById("task-input", "add-button").value == "") {
    Swal.fire({
      icon: "warning",
      text: "이름을 입력하세요.",
      width: "360px",
    });
    return;
  }
  if (document.getElementById("task-input1", "add-button").value == "") {
    Swal.fire({
      icon: "warning",
      text: "메세지를 입력하세요.",
      width: "360px",
    });
    return;
  }
  taskList.push(task);
  document.getElementById("task-input", "add-button").value = "";
  document.getElementById("task-input1", "add-button").value = "";
  Swal.fire({
    icon: "success",
    title: "전송 완료.",
    showConfirmButton: false,
    timer: 900,
    width: "360px",
  });
  render();
}

function render() {
  let list = [];
  list = taskList;
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    resultHTML += `<div class="swiper-slide" id="${list[i].id}" >
    <div class="img-con3" id="${list[i].id}">
    <img class="letter01" src="../img/letter/letter01.png">
    </div>
    <div class="img-con4" id="${list[i].id}">
    <img class="letter02" src="../img/letter/letter02.png">
    </div>
      <div class="task">
      <div class="button-box">  
      <button class="trash" onclick="deleteTask('${list[i].id}')" tabindex="-1"><span class="material-symbols-outlined" id="trash-icon">
      delete
      </span></button>
      </div>
      <div class="div-flex">
      <span class="toForm">${list[i].taskContent}</span>  
      </div>
      <div class="div-flex1">
      <textarea class="toForm" readonly="readonly">${list[i].taskContent1}</textarea> 
      </div>
      </div>
  </div>`;
  }
  swiper();
  document.getElementById("task-board").innerHTML = resultHTML;
}

function deleteTask(id) {
  Swal.fire({
    title: "삭제하시겠습니까?",
    icon: "warning",
    width: "360px",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
          filterList.splice(i, 1);
          taskList.splice(i, 1);
          break;
        } else {
        }
      }
      render();
      Swal.fire("완료", "삭제되었습니다.");
    }
  });
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

function swiper() {
  mySwiper = new Swiper(".mySwiper", {
    slidesPerView: "3", // 한 슬라이드에 보여줄 갯수
    loopAdditionalSlides: 1,
    // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    pagination: {
      // 호출(pager) 여부
      el: ".swiper-pagination", //버튼을 담을 태그 설정
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      // 버튼
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1420: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
    },
  });
}
swiper();
