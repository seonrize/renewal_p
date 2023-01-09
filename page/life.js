let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

//book
const book = document.querySelector(".iframe-book"),
slide = document.querySelectorAll(".link"),
elSwiper = document.querySelector('.swiper'),
spanz = document.querySelector(".span-z"),
body = document.querySelector("body");

const bookLink = [
                    "http://www.ahnjunggeun.or.kr/work/20221227_page_ebook/index.html",
                    "http://www.ahnjunggeun.or.kr/work/20220801_publishing%20garage_ebook/index.html",
                    "http://www.ahnjunggeun.or.kr/work/20211231_52_ebook/index.html",
                    "http://www.ahnjunggeun.or.kr/work/20210811_AJG_ebook/index.html",
                    "http://www.ahnjunggeun.or.kr/work/20210112_publishing%20garage_ebook/index.html",
                    "http://www.ahnjunggeun.or.kr/work/AJG_2020_n49/mobile/index.html#p=1",
                    "http://www.ahnjunggeun.or.kr/work/AJG_2019_n48/mobile/index.html",
                    "http://www.ahnjunggeun.or.kr/work/Ahnjunggeun_47_ebook/mobile/index.html"
                ]

let tag = ""

slide.forEach(function(i,key){
    slide[key].addEventListener("click", function(){
        console.log("클릭");
        Bo(key);
    })
})

book.onclick = function(e){
    if(e.target.className == "x"){
        book.style.display = "none";
        elSwiper.style.zIndex = "0";
        body.style.overflow = "visible"
        // spanz.style.zIndex = "0";
    }
}

//클릭한 책에 맞게 팝업창 출력
function Bo(m){
    const elBook = document.querySelector('.iframe-book article');
    
    book.style.display = "block";
    elSwiper.style.zIndex = "-1";
    // spanz.style.zIndex = "-1";
    body.style.overflow = "hidden"

    elBook.innerHTML =  `
                        <div >
                            <img src="./img/life/close.png" class="x">
                        
                        </div>
                        <iframe 
                            src="${bookLink[m]}" 
                            width="${window.innerWidth*0.8}" height="${window.innerHeight*0.8}" 
                            style="position: fixed; z-index: 999; position: absolute; top: 50%; left: 50%; 
                            transform: translate(-50%,-50%); ">
                        </iframe>`
}


// svg
const content1 = document.querySelector('.content-path1');
    const content2 = document.querySelector('.content-path2');
    const path1 = document.querySelector('.path2');
    const path2 = document.querySelector('.path3');
    const path1Length = path1.getTotalLength();
    const path2Length = path2.getTotalLength();

    path1.style.strokeDasharray  = path1Length + ' ' + path1Length
    path1.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content1, path1Length)
    
    path2.style.strokeDasharray  = path2Length + ' ' + path2Length
    path2.style.strokeDashoffset = path2Length

    function calcDashoffset(scrollY, element, length) {
        const ratio = (scrollY - element.offsetTop) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler() {
        const scrollY = window.scrollY + (window.innerHeight * 0.8)
        path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length)
        path2.style.strokeDashoffset = calcDashoffset(scrollY, content2, path2Length)
    }

    window.addEventListener('scroll', scrollHandler)


    // top button
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $('#topBtn').fadeIn();
            } else {
                $('#topBtn').fadeOut();
            }
        });

            $("#topBtn").click(function() { 
            $('html, body').animate({ 
                scrollTop : 0 
            }, 700);
            return false; 
        }); 
    });