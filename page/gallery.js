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
let tt = 0;
$(window).resize(function (e) {
    
    if (window.innerWidth > 820) {  // 다바이스 크기가 #이상일때 
        
        tt++;
        
        if (tt == 1) {
            console.log(tt);
            const elMain = document.querySelector('main'),
                elAside = document.querySelector('aside'),
                elSec = document.querySelectorAll('section');
            let move = 0;

            console.log(elSec)
            elSec.forEach(function (elSection, key) {
                elAside.innerHTML += '<button></button>';
                elSection.addEventListener('mousewheel', function () {
                    animation(key);
                
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

            function animation(key) {
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
        }
    } else {
        console.log("aaa");
        /* 스크립트내용*/
        e.stopImmediatePropagation();
    }

}).resize();

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
