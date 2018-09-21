$(document).ready(function(){
    
    // * SKILLS
    $(".skills").hide();
    $(".skills-icon").click(function(){
        $(".main").hide().fadeOut(100);
        $(".skills").show().fadeOut(0).fadeIn(1000);
   });

    // * EDUCATION
    $(".edu").hide();
    $(".edu-icon").click(function(){
        $(".main").hide().fadeOut(100);
        $(".edu").show().fadeOut(0).fadeIn(1000);
   });

    // * WORK
    $(".work").hide();
    $(".work-icon").click(function(){
        $(".main").hide().fadeOut(100);
        $(".work").show().fadeOut(0).fadeIn(1000);
   });

    // * BLOG
    $(".blog").hide();
    $(".blog-icon").click(function(){
        $(".main").hide().fadeOut(100);
        $(".blog").show().fadeOut(0).fadeIn(1000);
   });

    // * contact
    $(".contact").hide();
    $(".contact-icon").click(function(){
        $(".main").hide().fadeOut(100);
        $(".contact").show().fadeOut(0).fadeIn(1000);
   });

   // * HIDE FUNCTION
   $(".middle-back").click(function(){
        $(".card-sub").hide().fadeOut(100);
        $(".main").show().fadeOut(0).fadeIn(800);
   });
// var bgimg = document.getElementById('bg'),
//    imgs = ['./img/bg1.jpg', './img/bg2.jpg', './img/bg3.jpg'];
//         setInterval(function(){ 
//             img = imgs.shift();
//             imgs.push(img);
//             bgimg.style.backgroundImage ='  linear-gradient(to right,#3336f3b2,rgba(255, 255, 255, 0.5)) , url("' + img + '")';
//             bgimg.style.animationDelay= '2s';
//     }, 10000);
});