$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./incB.html header > div', head);
$('footer').load('./incB.html footer > div'); 

let idx = localStorage.idx ;  

function head(){
    $('header ul li').eq(idx).find('a').addClass('active');
    console.log(idx);

    $('header ul li').click(function(){
        let idx = $(this).index();
        localStorage.idx = idx;
    })

}
