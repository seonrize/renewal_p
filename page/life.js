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
slide = document.querySelectorAll(".link");

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
    console.log("닫기",e);
    if(e.target.className == "x"){
        book.style.display = "none";
    }
}

//클릭한 책에 맞게 팝업창 출력
function Bo(m){
    const elBook = document.querySelector('.iframe-book article');
    book.style.display = "block";
    elBook.innerHTML =  `
                        <div class="x">x</div>
                        <iframe 
                            src="${bookLink[m]}" 
                            width="${window.innerWidth*0.8}" height="${window.innerHeight*0.8}" 
                            style="position: fixed; z-index: 999; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);">
                        </iframe>`
}