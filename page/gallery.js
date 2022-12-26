// pop-up창 활성화 
const elPopup = document.querySelector('.pop-up'),
    elBtn = document.querySelector('.title01 button'),
    elExit = document.querySelector('.pop-up button'); 


// elBtn.onclick=function(){

//         elPopup.classList.add('active');
//     }
    
// elExit.onclick = function(e){
//         if(elPopup.classList.contains('pop-up'))
//         elPopup.classList.remove('active');
// }


elBtn.onclick=function(){
    elBtn.classList.toggle('pop-up');

    let blen = elBtn.classList.contains('pop-up');

    if(blen){
        elPopup.classList.add('active');
    }
    else{
        elPopup.classList.remove('active');
    }
}

elExit.onclick = function(e){
    if(elPopup.classList.contains('pop-up'))
    elPopup.classList.remove('active');
}







