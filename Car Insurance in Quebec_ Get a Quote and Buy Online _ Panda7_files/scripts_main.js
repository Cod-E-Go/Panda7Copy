window.onscroll = function() { scrollFunction() };
var a = document.querySelector(".hamburger-menu");
var m = document.querySelector(".hamburger");

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.querySelector(".navstyle").style.borderBottom = "#e0e0e0 SOLID 1px";
        document.querySelector(".navstyle").style.background = "#fff";
        if (window.innerWidth > 1024) {
            document.querySelector(".navstyle .navbar-brand").style.transform = "translate(-50%, 0px)";
            document.querySelector(".navstyle .navbar-brand #logo").style.width = "130px";
        }



    } else {
        document.querySelector(".navstyle").style.borderBottom = "none";
        document.querySelector(".navstyle").style.background = "none";
        if (window.innerWidth > 1024) {
            document.querySelector(".navstyle .navbar-brand").style.transform = "translate(-50%, 65px)";
            document.querySelector(".navstyle .navbar-brand #logo").style.width = "160px";
        }
    }

}



m.addEventListener("click", () => {
    a.classList.toggle("change");

});
$(function() {
    $('.scroll1').infiniteslide({
        speed: 120
    });

});

$(function() {
  if ($('#owl-demo1').lenght != 0 ){
    $("#owl-demo1").brandCarousel({
      navigation : true
    });
  }
  if ($('.vertical-slider').lenght != 0){
    $('.vertical-slider').slick({
      vertical: true,
      infinite: true,
      verticalSwiping: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      speed: 1000
    });
  }
  if ($('.hero-slider').lenght != 0) {
    var width = window.innerWidth;
    var slidesToShow = 3;

    // On mobile
    if ( width < 500) {
      slidesToShow = 2;

    }

    $('.hero-slider').slick({
      vertical: true,
      infinite: true,
      verticalSwiping: false,
      centerMode: true,
      draggable: false,

      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 1000,
      pauseOnFocus: false,
      pauseOnHover: false,

    });
    $('.hero-slider').show();
  }
   if ($('#show_more_faq').lenght != 0) {
     $('#show_more_faq').on('click',function(){
       $('.faqs .card').removeClass('hidden');
       $('#show_more_faq').hide();
     })
   }
});

if($('#pills-tab').length != 0) {
  //it doesn't exist

  var triggerTabList = [].slice.call(document.querySelectorAll('#pills-tab a'))
  triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new bootstrap.Tab(triggerEl)

      triggerEl.addEventListener('click', function (event) {
          event.preventDefault()
          tabTrigger.show()
      })
  })
}

if($('#nav-tab').length != 0) {
    $(document).ready(function() {
      var triggerTabList = [].slice.call(document.querySelectorAll('#nav-tab a'))
      triggerTabList.forEach(function(triggerEl) {
          var tabTrigger = new bootstrap.Tab(triggerEl)

          triggerEl.addEventListener('click', function(event) {
              event.preventDefault()
              tabTrigger.show()
          })
      })
        $(".dropdown-menu a").click(function() {
            var parent = $(this).parents(".dropdown").find('.dropdown-toggle');
            parent.html($(this).text() + ' <span class="caret"></span>');
        });

    });
}



if ($('#birdrightbody').length) {
const birdrightbody = document.querySelector('#birdonebody');
  const tl = new TimelineMax({ repeat: -1 });
  tl.to(birdrightbody, .5, { rotateZ: '10deg', transformOrigin: 'bottom right', ease: Power1.easeOut });
  tl.to(birdrightbody, .2, { rotateZ: '0 deg', transformOrigin: 'bottom right', ease: Power1.easeOut });
  tl.to(birdrightbody, .2, { rotateZ: '10deg', transformOrigin: 'bottom right', ease: Power1.easeOut });
  tl.to(birdrightbody, .2, { rotateZ: '0 deg', transformOrigin: 'bottom right', ease: Power1.easeOut });
}

if ($('#birdlefttail').length) {
const birdlefttail = document.querySelector('#birdtwotail');
const birdlefttbody = document.querySelector('#birdtwobody');
  const t2 = new TimelineMax({ repeat: -1 });
  t2.to(birdlefttail, .5, { rotateZ: '10deg', transformOrigin: 'bottom right', ease: Power1.easeOut });
  t2.to(birdlefttail, .5, { rotateZ: '0 deg', transformOrigin: 'bottom right', ease: Power1.easeOut });
  t2.to(birdlefttbody, .5, { rotateZ: '-10deg', transformOrigin: 'top left', ease: Power1.easeOut });
  t2.to(birdlefttbody, .2, { rotateZ: '0 deg', transformOrigin: 'top left', ease: Power1.easeOut });
}



if ($('#bird_tenent').length) {
const bird = document.querySelector('#bird_tenent');
const wing = document.querySelector('#bird_tenent #wing');


const bfly = new TimelineMax({ repeat: -1 }, 2);
bfly.from(bird, 2.5, { x: '3100px', y: '-1100px',ease: Power1.easeOut, yoyo: true })
    .from(wing, .1, { rotateZ: '15deg', transformOrigin: 'center left', ease: Power1.easeInOut, yoyo: true })
    .from(wing, .1, { rotateZ: '5deg', transformOrigin: 'center left', ease: Power1.easeInOut, yoyo: true })
    .to(bird, 6, { x: 0, y: 0 })
    .to(bird, .5, { scaleX: -1, transformOrigin: '50% 0%' })
    .from(wing, .1, { rotateZ: '15deg', transformOrigin: 'center left', ease: Power1.easeInOut, yoyo: true })
    .from(wing, .1, { rotateZ: '5deg', transformOrigin: 'center left', ease: Power1.easeInOut, yoyo: true })
    .to(bird, 1.5, { x: '600px', y: '-54px' })
    .to(bird, 6, { x: '600px', y: '-54px' })
    .from(wing, .1, { rotateZ: '15deg', transformOrigin: 'center left', ease: Power1.easeInOut, yoyo: true })
    .from(wing, .1, { rotateZ: '5deg', transformOrigin: 'center left', ease: Power1.easeInOut, yoyo: true })
    .to(bird, 1.5, { x: '900px', y: '-600px' })
    .to(bird, 6, { x: '900px', y: '-600px' })
    .to(bird, 1, { x: '3100px', y: '-1100px',ease: Power1.easeIn })
    .from(bird, 6, { x: '3100px', y: '-1100px', yoyo: true });
}


if ($('#bird').length != 0) {
const bird = document.querySelector('#bird');
const wing = document.querySelector('#bird #wing');


const bfly = new TimelineMax({ repeat: -1 }, 2);
bfly.from(bird, 1.5, { x: '600px', y: '-200px', yoyo: true })
    .to(bird, 6, { x: 0, y: 0 })
    .to(bird, .5, { scaleX: -1, transformOrigin: '50% 0%' })
    .from(wing, .1, { rotateZ: '15deg', transformOrigin: 'center left', ease: Power1.easeInOut, yoyo: true })
    .from(wing, .1, { rotateZ: '5deg', transformOrigin: 'center left', ease: Power1.easeInOut, yoyo: true })
    .to(bird, 3.5, { x: '600px', y: '-200px' })
    .from(bird, 6, { x: '600px', y: '-200px', yoyo: true });
}


if ($('#dogtail').length) {
const tail = document.querySelector('#dogtail');
const hd = document.querySelector("#doghead")

function breathe() {
    const tl = new TimelineMax({});
    tl.to(tail, .5, { rotateZ: '-10deg', transformOrigin: 'center left', ease: Power1.easeOut })
    tl.to(tail, .5, { rotateZ: '10 deg', transformOrigin: 'center left', ease: Power1.easeOut })
    tl.to(tail, .5, { rotateZ: '-10deg', transformOrigin: 'center left', ease: Power1.easeOut })
    tl.to(tail, .5, { rotateZ: '10 deg', transformOrigin: 'center left', ease: Power1.easeOut })
    tl.to(tail, .9, { rotateZ: '0 deg', transformOrigin: 'center left', ease: Power1.easeOut })
    tl.from(tail, .9, { rotateZ: '0 deg', transformOrigin: 'center left', ease: Power1.easeOut })
    return tl;
}

function head() {
    const tl = new TimelineMax({});
    tl.to(hd, .2, { rotateZ: '15deg', transformOrigin: 'center right', ease: Power1.easeOut })
    tl.to(hd, .2, { rotateZ: '0 deg', transformOrigin: 'center right', ease: Power1.easeOut })
    tl.to(hd, .2, { rotateZ: '20deg', transformOrigin: 'center right', ease: Power1.easeOut })
    tl.to(hd, .5, { rotateZ: '0 deg', transformOrigin: 'center right', ease: Power1.easeOut })
    return tl;

}

const masterTl = new TimelineMax({ repeat: -1 });
masterTl
    .add(breathe(), 'start')
    .add(head(), "start+=5.2")
}


if ($('#bubble_husband_love').length) {
const bubble_husband_love = document.querySelector('#bubble_husband_love');
bubble_husband_love.style.opacity=0;
const bubble_husband_smile = document.querySelector('#bubble_husband_smile');
bubble_husband_smile.style.opacity=0;
const bubble_wife_love = document.querySelector('#bubble_wife_love');
bubble_wife_love.style.opacity=0;
const bubble_wife_blush = document.querySelector('#bubble_wife_blush');
bubble_wife_blush.style.opacity=0;
const bubble_lady_sing = document.querySelector('#bubble_lady_sing');
bubble_lady_sing.style.opacity=0;
const bubble_lady_music = document.querySelector('#bubble_lady_music');
bubble_lady_music.style.opacity=0;
const lady_head =document.querySelector('#hand_lady');
const hus_hand =document.querySelector('#arm');

function husband_arm(){
    const t_h_s = new TimelineMax({});
    t_h_s.from(hus_hand, 2, {rotateZ: '45deg',yoyo: true, ease: Power1.easeInOut, transformOrigin: 'center left' });
    t_h_s.to(hus_hand, 3, {rotateZ: '0deg',yoyo: true, ease: Power1.easeInOut, transformOrigin: 'center left' });
    t_h_s.to(hus_hand, 2, {rotateZ: '45deg',yoyo: true, ease: Power1.easeInOut, transformOrigin: 'center left' });
    return t_h_s;
}
function bubble_husband_smiles(){
    const t_h_s = new TimelineMax({});
    t_h_s.to(bubble_husband_smile, .3 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_husband_smile, 4 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_husband_smile, .2 , {opacity: 0, ease: Power1.easeInOut })

    return t_h_s;
}
function bubble_husband_loves(){
    const t_h_s = new TimelineMax({});
    t_h_s.to(bubble_husband_love, .3 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_husband_love, 4 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_husband_love, .2 , {opacity: 0, ease: Power1.easeInOut })
    return t_h_s;
}

function bubble_wife_blushes(){
    const t_h_s = new TimelineMax({});
    t_h_s.to(bubble_wife_blush, .3 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_wife_blush, 3 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_wife_blush, .2 , {opacity: 0, ease: Power1.easeInOut })
    return t_h_s;
}
function bubble_wife_loves(){
    const t_h_s = new TimelineMax({});
    t_h_s.to(bubble_wife_love, .3 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_wife_love, 4 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_wife_love, .2 , {opacity: 0, ease: Power1.easeInOut })
    return t_h_s;
}
function bubble_lady_sings(){
    const t_h_s = new TimelineMax({});
    t_h_s.to(bubble_lady_sing, .3 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_lady_sing, 3 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_lady_sing, .2 , {opacity: 0, ease: Power1.easeInOut })
    return t_h_s;
}
function bubble_lady_musics(){
    const t_h_s = new TimelineMax({});
    t_h_s.to(bubble_lady_music, .3 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_lady_music, 4 , {opacity: 1, ease: Power1.easeInOut })
    t_h_s.to(bubble_lady_music, .2 , {opacity: 0, ease: Power1.easeInOut })
    return t_h_s;
}

const masterTl = new TimelineMax({  repeat: -1 });
masterTl
    .add(bubble_husband_smiles(), 'start')
    .add(bubble_wife_blushes(), 'start+=1.5')
    .add(bubble_husband_loves(), 'start+=6')
    .add(bubble_wife_loves(), 'start+=7')
    .add(bubble_lady_sings(), 'start+=3')
    .add(bubble_lady_musics(), 'start+=7.5')
    .add(husband_arm(), 'start+=6');

}


if ($('.swings #girl').length) {
const girl = document.querySelector('.swings #girl');
const boy = document.querySelector('.swings #boy');
gsap.fromTo(girl, 1, { rotation: -15 }, { rotation: 15, repeat: -1, yoyo: true, ease: Power1.easeInOut, transformOrigin: 'top left' });
gsap.fromTo(boy, 1, { rotation: 15 }, { rotation: -15, repeat: -1, yoyo: true, ease: Power1.easeInOut, transformOrigin: 'top left' });
}

$(document).ready(function () {

    if ($('.brands_slider').length) {
        var brandsSlider = $('.brands_slider');

        brandsSlider.owlCarousel(
            {
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                nav: false,
                dots: false,
                autoWidth: true,
                items: 5,
                margin: 45
            });

        if ($('.brands_prev').length) {
            var prev = $('.brands_prev');
            prev.on('click', function () {
                brandsSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.brands_next').length) {
            var next = $('.brands_next');
            next.on('click', function () {
                brandsSlider.trigger('next.owl.carousel');
            });
        }
    }


});

/*
 * DEPRECATED_29-11-01
const hand_wave= document.querySelector('#female_wave');
const leaf1=document.querySelector('#leaf1');
const leaf2=document.querySelector('#leaf2');
const leaf3=document.querySelector('#leaf3');
const leaf4=document.querySelector('#leaf4');
const leaf_tree=document.querySelector('#leaf_group');
*/



if ($('#right_arm').length) {
const right = document.querySelector('#right_arm');
const right_pot = document.querySelector('#right_arm #pot');
/*
 * DEPRECATED_29-11-01
const drop = document.querySelector('#wateranim');
*/

const globe_drop = document.querySelector('#globe_drop');
const g_pant_big = document.querySelector('#g_pant_big');
const g_pant_med = document.querySelector('#g_pant_med');
const g_pant_small = document.querySelector('#g_pant_small');
    //DEPRECATED_29-11-01
  //gsap.to(hand_wave, 1, { rotation: 15, repeat: -1, yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom left',nullTargetWarn: false });

function hand(){
    const tl = new TimelineMax({repeat: -1});
    tl.to(right, 1, { rotation: 15,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'top right' });
    tl.to(right, 3, { rotation: 15,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'top right' });
    tl.to(right, 1, { rotation: 0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'top right' });
    tl.to(right, 6, { rotation: 0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'top right' });
    return tl;
}
function hand_pot(){
    const tl = new TimelineMax({repeat: -1});
    tl.to(right_pot, 1, { rotation: -35,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'top right' });
    tl.to(right_pot, 3, { rotation: -35,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'top right' });
    tl.to(right_pot, 1, { rotation: 0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'top right' });
    tl.to(right_pot, 6, { rotation: 0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'top right' });
    return tl;
}
function drops(x){
    const tl = new TimelineMax();
    tl.from(x, 1, { opacity: 0,  yoyo: true, ease: Power1.easeInOut});
    tl.to(x, .8, { opacity: 1,  yoyo: true, ease: Power1.easeInOut});
    tl.to(x, .7, { opacity: 1,  yoyo: true, ease: Power1.easeInOut});
    tl.to(x, 1, { opacity: 0,  yoyo: true, ease: Power1.easeInOut});
    return tl;
}

function l1(x){
    const tl = new TimelineMax({repeat: -1});
    tl.to(x, 1, { rotation: 15,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom right' });
    tl.to(x, 3, { rotation: 15,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom right' });
    tl.to(x, 2, { rotation: 0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom right' });
    return tl;
}

function l2(x){
    const tl = new TimelineMax({repeat: -1});
    tl.to(x, 1, { rotation: 15,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom left' });
    tl.to(x, 3, { rotation: 15,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom left' });
    tl.to(x, 2, { rotation: 0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom left' });
    return tl;
}

function plant(x){
    const tl = new TimelineMax();
    tl.from(x, 1, {scale:.1, opacity: 0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    tl.to(x, 1, { opacity: 1,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    tl.to(x, 3, { opacity: 1,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    tl.to(x, 1, { opacity: 0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    return tl;
}
function drop_g(x){
    const tl = new TimelineMax();
    tl.to(x, 1, { y:'300px',opacity:0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    tl.to(x, .05, { y:'0px',opacity:0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    tl.to(x, .05, { y:'0px',opacity:1,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    tl.to(x, 1, { y:'300px',opacity:0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    tl.to(x, .05, { y:'0px',opacity:0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    tl.to(x, .05, { y:'0px',opacity:1,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    tl.to(x, 1, { y:'300px',opacity:0,  yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom center' });
    return tl;
}


const masterT3 = new TimelineMax({ repeat: -1 });
masterT3.add(drop_g(globe_drop),'start')
        .add(plant(g_pant_big),'start+=2')
        .add(plant(g_pant_med),'start+=2.3')
        .add(plant(g_pant_small),'start+=2.6');

/*
 * DEPRECATED_29-11-01
const masterTl = new TimelineMax({ repeat: -1 });
masterTl.add(l1(leaf1),'start')
        .add(l2(leaf2),'start')
        .add(l2(leaf3),'start')
        .add(l1(leaf4),'start');
*/

const masterT2 = new TimelineMax({ repeat: -1 });
masterT2.add(hand(),'start')
        .add(hand_pot(),'start');
        //.add(drops(drop),'start+=1');DEPRECATED_29-11-01



}


if ($('#leafanim').length) {
  const leaf = document.querySelector("#leafanim");
  gsap.fromTo(leaf, 2, { rotation: 0 }, { rotation: 15, repeat: -1, yoyo: true, ease: Power1.easeInOut, transformOrigin: 'bottom left' });
}
