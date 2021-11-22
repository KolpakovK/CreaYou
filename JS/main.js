$(document).ready(function () {
    $(".marquee").marquee({
        duration: 10000,
        duplicated: true,
        pauseOnHover: true
    });
    
    let margT = ($('#hero .container').outerWidth(true) - $('#hero .container').outerWidth()) / 2;
    console.log(margT);
    
    let etapsPL = parseInt($("#etaps .swiper").css("padding-left"))
    $("#etaps .swiper").css("padding-left",margT+etapsPL+"px");
    
    let etapsControllR = parseInt($("#etaps-controll").css("right"))
    $("#etaps-controll").css("right",margT+etapsControllR+"px");
    
});

let mainSliderLeft = true;

let swiper = new Swiper(".etaps-swiper", {
    slidesPerView: "auto",
    spaceBetween: 80
});

swiper.on('reachEnd', function () {
    if (swiper.isEnd) {
        mainSliderLeft = !mainSliderLeft;
        $("#etaps-controll").toggleClass("rotate");
        console.log("end is reached");
    }
});

swiper.on('reachBeginning', function () {
    if (swiper.isBeginning) {
        mainSliderLeft = !mainSliderLeft;
        $("#etaps-controll").toggleClass("rotate");
        console.log("end is reached");
    }
});

function nextSlide(){
    if (mainSliderLeft){
        swiper.slideNext();
    }
    else{
        swiper.slidePrev();
    }
}


$("#portfolio .pill").on("click",function (){
    $(this).toggleClass("active");
});