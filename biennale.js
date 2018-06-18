$(document).ready(() => {

  $('.blocks.hidden').fadeIn(4000).removeClass('hidden');
  $('.blocks1.hidden').fadeIn(4000).removeClass('hidden');
  $('.blocks6.hidden').fadeIn(4000).removeClass('hidden');
  $('.blocks8.hidden').fadeIn(4000).removeClass('hidden');
  $('.mainbuttons.hidden').fadeIn(4000).removeClass('hidden');
  $('.blocksmenu.hidden').fadeIn(4000).removeClass('hidden');
  $('.blocks').removeClass('undo');
  $('.blocks6').removeClass('undo');
  $('.blocks1').removeClass('undo');
  $('.blocks8').removeClass('undo');

  $('.copy').hide();
  $('.container').hide();
  $('.vid').hide();

  $('.about').click(function() {
    $('.about').toggleClass('buttonopen').siblings().removeClass('buttonopen');
    $('.b8').animate({marginLeft:"0px", marginTop:"17.15%", width:"100.1%", height:"51.2%"});
        $('.b6').animate({marginTop:"20.4%", marginLeft:"43%", width:"19%", height:"6.5%"});
        $('.b1').animate({marginLeft:"37%", width:"43.45%", height:"17.85%"});
    $('div.blocks8').addClass('main').siblings().removeClass('main');
    $('.copy').fadeIn(1000);
    $('.abtbuttons').hide().delay(100).fadeIn(1000);
    $('.container').hide();
    $('.vid').hide();
    $('.b8').css("background-image", "none")
    $('.b6').css("background-image", "url('https://i0.wp.com/barker-creative.com/wp-content/uploads/2016/08/ttbw04.jpg?w=1000')")
    $('.b1').css("background-image", "url('https://i1.wp.com/barker-creative.com/wp-content/uploads/2016/08/ttbw08.jpg?w=1000')")
    $('.logo').fadeTo("slow", 0.1);
    $('.blocks').addClass('fader').removeClass('undo');
    $('.blocks6').addClass('fader').removeClass('undo');
    $('.blocks1').addClass('fader').removeClass('undo');
    $('.blocks8').removeClass('fader');
});

  $('.images').click(function() {
    $('.images').toggleClass('buttonopen').siblings().removeClass('buttonopen');
    $('.b1').animate({marginLeft:"0px", width:"80.45%", height:"79%"});
        $('.b6').animate({marginTop:"20.4%", marginLeft:"43%", width:"19%", height:"6.5%"});
        $('.b8').animate({marginLeft:"59.3%", marginTop:"37.9%", width:"40.7%", height:"17.85%"});
    $('div.blocks1').addClass('main').siblings().removeClass('main');
    $('.container').fadeIn();
    $('.copy').hide();
    $('.vid').hide();
    $('.b1').css("background-image", "none")
    $('.b6').css("background-image", "url('https://i0.wp.com/barker-creative.com/wp-content/uploads/2016/08/ttbw04.jpg?w=1000')")
    $('.b8').css("background-image", "url('https://i1.wp.com/barker-creative.com/wp-content/uploads/2016/08/ttbw03.jpg?w=1000')")
    $('.logo').fadeTo("slow", 0.1);
    $('.blocks').addClass('fader').removeClass('undo');
    $('.blocks6').addClass('fader').removeClass('undo');
    $('.blocks8').addClass('fader').removeClass('undo');
    $('.blocks1').removeClass('fader');
});

  $('.videos').click(function() {
    $('.videos').toggleClass('buttonopen').siblings().removeClass('buttonopen');
    $('.b6').animate({marginTop:"0px", marginLeft:"43.5%", width:"26.9%", height:"79%"});
        $('.b1').animate({marginLeft:"37%", width:"43.45%", height:"17.85%"});
        $('.b8').animate({marginLeft:"59.3%", marginTop:"37.9%", width:"40.7%", height:"17.85%"});
    $('div.blocks6').addClass('main').siblings().removeClass('main');
    $('.vid').fadeIn();
    $('.vimeo').hide().delay(50).fadeIn(500);
    $('.container').hide();
    $('.copy').hide();
    $('.b6').css("background-image", "none")
    $('.b1').css("background-image", "url('https://i1.wp.com/barker-creative.com/wp-content/uploads/2016/08/ttbw08.jpg?w=1000')")
    $('.b8').css("background-image", "url('https://i1.wp.com/barker-creative.com/wp-content/uploads/2016/08/ttbw03.jpg?w=1000')")
    $('.logo').fadeTo("slow", 0.1);
    $('.blocks').addClass('fader').removeClass('undo');
    $('.blocks8').addClass('fader').removeClass('undo');
    $('.blocks1').addClass('fader').removeClass('undo');
    $('.blocks6').removeClass('fader');


});

  $('.reset').click(function() {
    $('.copy').hide();
    $('.container').hide();
    $('.vid').hide();
    $('.about').removeClass('buttonopen');
    $('.images').removeClass('buttonopen');
    $('.videos').removeClass('buttonopen');
    $('.logo').fadeTo("slow", 1);
    $('.blocks').removeClass('fader').addClass('undo');
    $('.blocks6').removeClass('fader').addClass('undo');
    $('.blocks1').removeClass('fader').addClass('undo');
    $('.blocks8').removeClass('fader').addClass('undo');
    $('.b1').animate({marginLeft:"37%", width:"43.45%", height:"17.85%"});
    $('.b6').animate({marginTop:"20.4%", marginLeft:"43%", width:"19%", height:"6.5%"});
    $('.b8').animate({marginLeft:"59.3%", marginTop:"37.9%", width:"40.7%", height:"17.85%"});
    $('.b1').css("background-image", "url('https://i1.wp.com/barker-creative.com/wp-content/uploads/2016/08/ttbw08.jpg?w=1000')")
    $('.b6').css("background-image", "url('https://i0.wp.com/barker-creative.com/wp-content/uploads/2016/08/ttbw04.jpg?w=1000')")
    $('.b8').css("background-image", "url('https://i1.wp.com/barker-creative.com/wp-content/uploads/2016/08/ttbw03.jpg?w=1000')")

});

});