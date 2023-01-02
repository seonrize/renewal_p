$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header', head);
$('footer').load('./inc.html footer > div'); 

let idx = localStorage.idx ;  

function head(){
    $('header ul li').eq(idx).find('a').addClass('active');
    console.log(idx);

    $('header ul li').click(function(){
        let idx = $(this).index();
        localStorage.idx = idx;
    })

}
