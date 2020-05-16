/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);



//-----CODE START HERE---------
// var = $("#");
// welcome-section

var welcome_section = $("#welcome-section");
var near_mou = $("#near_mountains-01");
var far_mou = $("#far_mountains");
var moon = $("#moon");
var forest = $("#forest");

var name_container = $("#name_container")
var fullname = $("#fullname");
var quote = $("#quote");
var line = $("#hr_01");


// about_section

var about_section = $("#about_section");
var about_text_box = $("#about_text_box");
var about_text = $("#about_text");
var job_text = $("#job_text");
var about_btn = $("#about_btn");

var about_img_box = $("#about_img_box");
var about_img = $("#about_img");
var overlay_about = $("#overlay_about");
var about_sign = $("#about_sign")

// project_section

var project_section = $("#projects");
var project_text_box = $("#project_text_box");
var my_project_text = $("#my_project_text");
var work_text = $("#work_text");
var project_btn = $("#project_btn");

var project_img_box = $("#project_img_box");
var card_box = $("#card_box");

// contact_section

var contact_section = $("#contact_section");
var contact_container = $("#contact_container");

var social_icon = $("#social_icon")

// nav_bar

var to_home = $("#to_home");
var to_about_section = $("#to_about_section");
var to_project_section = $("#to_project_section");
var to_contact_section = $("#to_contact_section");

//----------------

var h = [welcome_section.height(), about_section.height(), project_section.height(), contact_section.height()]


// welcome function

function add_class_Welcome(){
    near_mou.addClass("testing2");
    far_mou.addClass("testing2");
    moon.addClass("testing2");
    forest.addClass("testing2");

    name_container.addClass("testing2");
}

function remove_class_Welcome(){
    near_mou.removeClass("testing2");
    forest.removeClass("testing2");
    far_mou.removeClass("testing2");
    moon.removeClass("testing2");

    name_container.removeClass("testing2");
}


// about function

function add_style_about(){
    setTimeout(() => {
        about_text.css("transform" , "translateX(0)");
        job_text.css("transform" , "translateX(0)");
        about_btn.css("transform" , "translateX(0)");
        about_img.css("transform" , "translate( 0, -50%)")
        about_sign.css("transform" , "translate(0, 0)")
    }, 300);
        
}

function remove_style_about(){
    about_text.css("transform" , "translateX(-350px)")
    job_text.css("transform" , "translateX(-300px)")
    about_btn.css("transform" , "translateX(-300px)")
    about_img.css("transform" , "translate(150%, -50%)")
    about_sign.css("transform" , "translate(0, 130%)")
}

function hover_about_btn(){
  about_btn.hover(()=>{
    overlay_about.css("height", "481px")
  }, ()=>{
    overlay_about.css("height", "1px")
  })
}


// project function

function add_style_project(){
  my_project_text.css("transform" , "translateX(0)")
  work_text.css("transform" , "translateX(0)")
  project_btn.css("transform" , "translateX(0)")
  card_box.css("transform" , "translateX(0)")
}

function remove_style_project(){
    my_project_text.css("transform" , "translateX(100%)")
    work_text.css("transform" , "translateX(100%)")
    project_btn.css("transform" , "translateX(100%)")
    card_box.css("transform" , "translateX(-100%)")
}


// contact function

function add_style_contact(){
  contact_container.css("transform" , "translateY(0)")
  social_icon.css("transform" , "translate(-50%, -50%)")
}

function remove_style_contact(){
  contact_container.css("transform" , "translateY(100%)")
  social_icon.css("transform" , "translate(-50%, 100%)")
}








var $root = $('html, body');

function scroll_classify(){

    $(window).on('wheel', $.throttle(100, true,function(e){
        const scroll_y = $(window).scrollTop(); 
        // console.log(scroll_y);
        // console.log(h[0] +100);

        var delta = e.originalEvent.deltaY;

        if (delta > 0) {
            if(scroll_y > -1 && scroll_y < 200){
                $root.animate({
                    scrollTop: about_section.offset().top
                    }, 600);
                    setTimeout(()=>{
                        remove_class_Welcome();
                        add_style_about();
                    }, 150);
            }

            if(scroll_y > h[0] -100 && scroll_y < h[0]+500){
                $root.animate({
                    scrollTop: project_section.offset().top
                    }, 600);
                    setTimeout(()=>{
                      remove_style_about();
                  }, 400);
                  setTimeout(() => {
                    add_style_project();
                }, 150);
            }

            if(scroll_y > (h[0] + h[1]) -100 && scroll_y < (h[0] + h[1] +500)){
              $root.animate({
                  scrollTop: contact_section.offset().top
                  }, 600);
                  setTimeout(() => {
                    remove_style_project();
                }, 400);
                setTimeout(() => {
                  add_style_contact();
              }, 150);
            }
            
        }// going down

        else {
            if(scroll_y > (h[0] -200) && scroll_y < (h[0]+200)){
                $root.animate({
                    scrollTop: welcome_section.offset().top
                    }, 600);
                setTimeout(()=>{
                    add_class_Welcome();
                    
                }, 600);
                setTimeout(() => {
                    remove_style_about();
                }, 400);
            }

            if(scroll_y > (h[0] + h[1] -200) && scroll_y < (h[0] + h[1] +200)){
                $root.animate({
                    scrollTop: about_section.offset().top
                    }, 600);
                    setTimeout(()=>{
                      add_style_about();
                  }, 300);
                  setTimeout(() => {
                    remove_style_project();
                }, 400);
            }

            if(scroll_y > (h[0] + h[1] + h[2] -200) && scroll_y < (h[0] + h[1] +h[2] +200)){
              $root.animate({
                  scrollTop: project_section.offset().top
                  }, 600);
                  setTimeout(() => {
                    add_style_project();
                }, 150);
                setTimeout(() => {
                  remove_style_contact();
              }, 400);
            }

        } // going up

    }));
    
}

function nav_btn_click(){
  to_home.click(()=>{
    $root.animate({
      scrollTop: welcome_section.offset().top
      }, 400);
    remove_style_about();
    remove_style_project();
    remove_style_contact();
    setTimeout(()=>{
      add_class_Welcome();    
  }, 600);
  })

  to_about_section.click(()=>{
    $root.animate({
      scrollTop: about_section.offset().top
      }, 400);
    remove_class_Welcome();
    remove_style_project();
    remove_style_contact();
    setTimeout(()=>{
      add_style_about();    
  }, 600);
  })

  to_project_section.click(()=>{
    $root.animate({
      scrollTop: project_section.offset().top
      }, 400);
    remove_class_Welcome();
    remove_style_about();
    remove_style_contact();
    setTimeout(()=>{
      add_style_project();    
  }, 600);
  })

  to_contact_section.click(()=>{
    $root.animate({
      scrollTop: contact_section.offset().top
      }, 400);
    remove_class_Welcome();
    remove_style_project();
    remove_style_about();
    setTimeout(()=>{
      add_style_contact();    
  }, 400);
  })
}

function nav(){
  $('#simply-burger').click(function(){
    //On click, toggle on 'this' (#simply-burger) the class open
        $("#simply-burger").toggleClass('open');
        $('#nav_container').toggleClass('nav_open')
  });
}

function init(){

    setTimeout(() => {
        add_class_Welcome();
    }, 1000);

    // click_btn();

    scroll_classify();
    hover_about_btn();
    nav();
    nav_btn_click()
    
};

window.onload = init();

