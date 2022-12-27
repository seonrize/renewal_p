// pop-up창 활성화 
const elPopup = document.querySelector('.pop-up'),
    elBtn = document.querySelector('.title01 button'),
    elExit = document.querySelector('.pop-up button'); 


elBtn.onclick=function(){
        elPopup.classList.add('active');
}


elPopup.onclick = function(e){

    if(e.target.classList.contains('pop-up'))
    {elPopup.classList.remove('active');}

    console.log(e);
        elExit.onclick = function(){
            elPopup.classList.remove('active');
        }
}

//썸네일 활성화 

mouseover 하면 innerHTML  = `div`

let data=[
    {url:'../img/2f.jpg'},
    {url:'../img/1f.jpg'},
    {url:'../img/b1f.jpg'},
    {url:'../img/b2f.jpg'},
]

const elThumb = document.querySelector('.f span');
let tag = '';


data.forEach(function(value, key){
    tag += `<figure>
    <img src="${data[key].url}">
    </figure>`;
})
elThumb.innerHTML = tag; 





