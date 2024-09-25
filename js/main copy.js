
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

    var article = $(e.target).find('div.row5__item-article').text();
        console.log(article);
        
        OpenPopUp();
        var popupHTML = '<div class="popup-box"><div><i class="iconfont icon_menu_close close-pop"></i></div></div>';
        
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
    $('#pop-up-close').on('click', function () {
        ClosePopUp();

        // if($(this).data('repeat') === 1 ){
        //     $('#orderform-date_arrival').focus();
        // }

    })
}

$(document).ready(function(){
    $('.row5__item-container').click(function(e){
        console.log( "div target", e.target);
        
    });
});

$(document).mouseup(function (e){ 
    var div = $("#popup-box"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
    ClosePopUp(); 
    }
});


$(document).mouseup(function (e){ 
    var div = $("#popup-box"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
    ClosePopUp(); 
    }
});

$(document).scrollTop(s-20);
console.log( "scrollTop", s);



const showDialog = () => {
    document.getElementById('dialog').classList.add('show')
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  };
  const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('dialog').classList.remove('show');
  }
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });
  
  
  