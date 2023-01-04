$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('/page/inc.html header > div', head);
$('footer').load('/page/inc.html footer > div'); 

let idx = localStorage.idx ;  

function head(){
    $('header ul li').eq(idx).find('a').addClass('active');
    console.log(idx);

    $('header ul li').click(function(){
        let idx = $(this).index();
        localStorage.idx = idx;
    })

}
