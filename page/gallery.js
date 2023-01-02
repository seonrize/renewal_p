//  section-scroll pop-up창 활성화 
    // const elPopup = document.querySelector('.pop-up'),
    //     elBtn = document.querySelector('.title01 button'),
    //     elExit = document.querySelector('.pop-up button'); 


    // elBtn.onclick=function(){
    //         elPopup.classList.add('active');
    // }


    // elPopup.onclick = function(e){

    //     if(e.target.classList.contains('pop-up'))
    //     {elPopup.classList.remove('active');}

    //     console.log(e);
    //         elExit.onclick = function(){
    //             elPopup.classList.remove('active');
    //         }
    // }



// load 


const elMain = document.querySelector('main'),
    elAside = document.querySelector('aside'),
    elSec = document.querySelectorAll('section');
let move = 0;


elSec.forEach(function (elSection, key) {
    elAside.innerHTML += '<button></button>';
    elSection.addEventListener('mousewheel', function () {
        animation(key);
    })
})

const elBtns = document.querySelectorAll('aside button'); 
    let idx = 0;
elBtns.forEach(function(btn,key){
    btn.addEventListener('click', function(){

        animation(key)
    })
})

function update(key){
    elBtns[idx].classList.remove('active');  // 저번 키를 지우고
    elBtns[key].classList.add('active');   // 현재 클릭한 새로운 액티브를 넣어줘 
        idx=key;
}

    update(0);  // 처음 실행되는 콘텐츠의 값 

function animation(key){    
    try {
        if (event.wheelDelta < 0) {
            move = elSec[key].nextElementSibling.offsetTop;
            key ++;
        } else if(event.wheelDelta > 0) {                         // wheel 했을때 (if, else if)
            move = elSec[key].previousElementSibling.offsetTop;
            key --;
        }else{
            move = elSec[key].offsetTop;     //click 했을 때 
        }
    } catch { }
    update(key);



    elMain.style = `transform:translateY(-${move}px)`;
    console.log(move);
    console.log(elAside);
}