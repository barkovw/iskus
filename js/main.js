
function OpenPopUp (){
    $( 'body' ).addClass('scroll-lock');
    
    $('<div/>',{ class: 'overlay overlay-bg', id: 'overlay' }).appendTo('body');
   

}

function OpenPopUp2 (){
    $('<div/>',{ class: 'overlay overlay-bg', id: 'overlay' }).appendTo('body');
    $('<div/>',{ class: 'popup-box', id: 'popup-box' }).appendTo('.overlay');
    $( '.overlay' ).addClass('overlay-open');
    $( 'body' ).addClass('scroll-lock');
    $( '.top__head-menu' ).css('display', 'none');
}

function ClosePopUp (){
    $('.overlay').removeClass( 'overlay-open' );
    $('body').removeClass('scroll-lock');
    $('.section1__head-menu').css('display', 'block');
    $('div.overlay').remove();
    $('div.popup-box').remove();
}

function EventClosePopUp () {
    $(document).keyup(function (e) {
        if (e.which === 27) {
            ClosePopUp();
        }
    });
    $('#close-pop').on('click', function () {
        ClosePopUp();

        

    })
}

$(document).ready(function(){

    $('.row5__item').click(function(e){
        
        let el = $(this);
        let s = el.offset().top;

        let parent = $(e.currentTarget.parentElement);
        console.log(parent);
        // var yClick = e.pageY - $(this).offset().top;

        var tel = '<a class="tel__popup" href="tel:+79787433623" onclick="ym(50835353, \'reachGoal\', \'click-on-phone-isku\'); return true;">+7 978 743 36 23</a>';
        var image = parent.find('img.row5__item').attr('src');
        var article = parent.find('.row5__item-article').text(); 
        var price = parent.find('.row5__item-price').text(); 
        var popupHTML = '<div class="popup-box"><i id="close-popup" class="iconfont fa fa-times fa-2x close-pop" aria-hidden="true"></i><img class="img-popup" src="'+image+'"></img><p class="mt-10">'+article+'</p><p class="text-bold font26">'+price+'</p><p class="pop-mes">Чтобы заказать доставку букета звоните</p>'+tel+'</div>';
        
        OpenPopUp();
        
        $('.overlay').html(popupHTML);
        
        $('#close-popup').click(function(e){
            ClosePopUp();
            $(document).scrollTop(s-20);
            console.log( "scrollTop", s);
            
        });
    });

});







