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
// function aaafunc(){
//     sdakaosdkasd
// }


// window.addEventListener('scroll', aaafunc);
// window.removeEventListener('scroll', aaafunc);


// load 
let media = window.matchMedia('screen and (min-width:820px)');
let mediaState = true;
media.addListener((e)=>{
    if(e.matches){
        //pc
        mediaState = true;
    }else{
        //tarblet
        mediaState = false;
    }
    scrollFn();
})

    
    function scrollFn(){
        const elMain = document.querySelector('main'),
        elAside = document.querySelector('aside'),
        elSec = document.querySelectorAll('section');       

        if(mediaState){            
            let move = 0;

            elSec.forEach(function (elSection, key) {
                elAside.innerHTML += '<button></button>';
                elSection.addEventListener('mousewheel', function () {
                    if(mediaState) animation(key);
                })
            })

            const elBtns = document.querySelectorAll('aside button');
            let num = 0;
            elBtns.forEach(function (btn, key) {
                btn.addEventListener('click', function () {
                    animation(key)
                })
            })

            function update(key) {
                elBtns[num].classList.remove('active');  
                elBtns[key].classList.add('active');    
                num = key;
            }
            update(0); 
        
            

            function animation(key=0) {
                try {
                    if (event.wheelDelta < 0) {
                        move = elSec[key].nextElementSibling.offsetTop;
                        key++;
                    } else if (event.wheelDelta > 0) {
                        move = elSec[key].previousElementSibling.offsetTop;
                        key--;
                    } else {
                        move = elSec[key].offsetTop;
                    }
                } catch { }
                update(key);

                elMain.style = `transform:translateY(-${move}px)`;
                console.log(move);
                console.log(elAside);
            }

            /* 스크립트내용*/
        }else{
            elAside.innerHTML ='';
        }

    }
    scrollFn();


// 교육자료 

(function () {

    $(".flex-slide").each(function () {
        $(this).hover(function () {
            $(this).find('.flex-title').css({
                transform: 'rotate(0deg)',
                top: '10%'
            });
            $(this).find('.flex-about').css({
                opacity: '1'
            });
        }, function () {
            $(this).find('.flex-title').css({
                transform: 'rotate(90deg)',
            });
            $(this).find('.flex-about').css({
                opacity: '0',
                top: '15%'
            });
        })
    });
})();

// header > menu-bar 현재 페이지 표시


let idx = sessionStorage.idx;

function head() {
    $('header ul li').eq(idx).find('a').addClass('active');
    console.log(idx);

    $('header ul li').click(function () {
        let idx = $(this).index();
        sessionStorage.idx = idx;
    })

}

head();   // 함수실행 

// 
