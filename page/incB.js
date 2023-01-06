$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./page/incB.html header > div', head);
$('footer').load('./page/incB.html footer > div'); 

let idx = sessionStorage.idx ;  

function head(){
    $('header ul li').eq(idx).find('a').addClass('active');
    console.log(idx);

    $('header ul li').click(function(){
        let idx = $(this).index();
        sessionStorage.idx = idx;
    })

}
