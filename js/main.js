
// when click on nav item dropdown link

$('.services-link').click(()=> {
    $(location).prop('href', '../components/services.html');
})

$('.products-link').click(()=> {
    $(location).prop('href', '../components/products.html');
})

$('.projects-link').click(()=> {
    $(location).prop('href', '../components/projects.html');
})

// carousel slider images

$(document).ready(function() {
    $(".home-services .skitter-large").skitter({
        label: false,
        numbers: false,
        dots: false,
        interval: 1800,
    });
});

$(document).ready(function() {
    $(".services .skitter-large").skitter({
        label: false,
        numbers: false,
        dots: false,
        interval: 2500,
    });
});

$(document).ready(function() {
    $(".products .skitter-large").skitter({
        label: false,
        numbers: false,
        dots: false,
        interval: 2500,
    });
});

// change project when clicked on it

$('.cont-imgs .imgs .img-group').click(function(){
    let clickSrc = $(this).children('img').attr('src');
    let clickTitle = $(this).children('h4').text();
    $('.img-details img').attr('src' , clickSrc);
    $('.caption-details h2').text(clickTitle);
    $('.caption-details span').text(clickTitle);
    changeSrc()
})

function changeSrc(){
    if($('.caption-details h2').text() == 'Zari On Time') {
        $('.show-details .buttons a').attr('href' , '../components/projects/zari-on-time.html');
    }
    
    else if($('.caption-details h2').text() == 'Zari Jomla') {
        $('.show-details .buttons a').attr('href' , '../components/projects/zari-jomla.html');
    }
    
    else if($('.caption-details h2').text() == 'Zari Gifts') {
        $('.show-details .buttons a').attr('href' , '../components/projects/zari-gifts.html');
    }
    
    else if($('.caption-details h2').text() == 'Zari Express') {
        $('.show-details .buttons a').attr('href' , '../components/projects/zari-express.html');
    }
}


// when click event on btnTopFooter & toggle

$('#btnTopFooter').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})

$('.navbar .navbar-toggler').click(()=>{
    $('.navbar .navbar-toggler').toggleClass('convert');
})

// when click on question to show an answer

$('.faq .group-quiz .quiz').click(function(){
    $(this).children('div').toggleClass('add');
    $(this).parent().siblings().children().children('div').removeClass('add');
    $(this).siblings().slideToggle(300);
    $(this).parent().siblings().children('.answer').slideUp(300);
})

$('.privacy-policy .group-quiz .quiz').click(function(){
    $(this).children('div').toggleClass('add');
    $(this).parent().siblings().children().children('div').removeClass('add');
    $(this).siblings().slideToggle(300);
    $(this).parent().siblings().children('.answer').slideUp(300);
})

$('.terms-of-service .group-quiz .quiz').click(function(){
    $(this).children('div').toggleClass('add');
    $(this).parent().siblings().children().children('div').removeClass('add');
    $(this).siblings().slideToggle(300);
    $(this).parent().siblings().children('.answer').slideUp(300);
})

// in the begining..

$(document).ready(()=>{
    $('.faq .group-quiz .quiz div').eq(0).addClass('add');
    $('.privacy-policy .group-quiz .quiz div').eq(0).addClass('add');
    $('.terms-of-service .group-quiz .quiz div').eq(0).addClass('add');
    let answerFaq = Array.from($('.faq .group-quiz .answer'));
    let answerPrivacyPolicy = Array.from($('.privacy-policy .group-quiz .answer'));
    let answerTermsOfService = Array.from($('.terms-of-service .group-quiz .answer'));
    
    for(let i = 0; i < answerFaq.length; i++){
        $(answerFaq[0]).slideDown();
        if(i > 0)
        {
            $(answerFaq[i]).slideUp();
        }
    };

    for(let i = 0; i < answerPrivacyPolicy.length; i++){
        $(answerPrivacyPolicy[0]).slideDown();
        if(i > 0)
        {
            $(answerPrivacyPolicy[i]).slideUp();
        }
    }

    for(let i = 0; i < answerTermsOfService.length; i++){
        $(answerTermsOfService[0]).slideDown();
        if(i > 0)
        {
            $(answerTermsOfService[i]).slideUp();
        }
    }
})


new WOW().init();

