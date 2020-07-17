
    // var t = $("#toggle");
    // t.toggleClass("inactive", $(document).scrollTop() > 12)


var list = $(".aside ul li");

// $(".main-content").addClass("inactive");
$(".container").addClass("inactive");
$(".container-p").addClass("inactive");
$(".container-s").addClass("inactive");
$(".container-c").addClass("inactive");

list[0].addEventListener("click", function () {
    $(".aside").toggleClass("inactive-a");
    $(".aside").toggleClass("active");
    list[0].classList.add("menu")
    $(".main-content").removeClass("inactive");
    $(".container").addClass("inactive");
    $(".container-p").addClass("inactive");
    $(".container-c").addClass("inactive");
    $(".container-s").addClass("inactive");
});

list[1].addEventListener("click", function () {
    $(".aside").toggleClass("inactive-a");
    $(".aside").toggleClass("active");
    list[1].classList.add("menu")
    $(".container").removeClass("inactive");
    $(".main-content").addClass("inactive");
    $(".container-p").addClass("inactive");
    $(".container-c").addClass("inactive");
    $(".container-s").addClass("inactive");
});

list[2].addEventListener("click", function () {
    $(".aside").toggleClass("inactive-a");
    $(".aside").toggleClass("active");
    // $(".aside").toggleClass("inactive");
    list[2].classList.add("menu")
    $(".container-p").removeClass("inactive");
    $(".container").addClass("inactive");
    $(".main-content").addClass("inactive");
    $(".container-c").addClass("inactive");
    $(".container-s").addClass("inactive");
});

list[3].addEventListener("click", function () {
    $(".aside").toggleClass("inactive-a");
    $(".aside").toggleClass("active");
    // $(".aside").toggleClass("inactive");
    list[3].classList.add("menu")
    $(".container-s").removeClass("inactive");
    $(".main-content").addClass("inactive");
    $(".container").addClass("inactive");
    $(".container-p").addClass("inactive");
    $(".container-c").addClass("inactive");
});

list[4].addEventListener("click", function () {
    $(".aside").toggleClass("inactive-a");
    $(".aside").toggleClass("active");
    // $(".aside").toggleClass("inactive");
    list[4].classList.add("menu")
    $(".container-c").removeClass("inactive");
    $(".container-p").addClass("inactive");
    $(".container-s").addClass("inactive");
    $(".container").addClass("inactive");
    $(".main-content").addClass("inactive");
});


function toggle() {
    // $(".aside").css({display:"block"})
    $(".aside").toggleClass("inactive");
    $(".aside").toggleClass("active");
    // $(".main-content, .container-s ,.container-c , .container-p ,  .container").css({"padding-left": "20%"})
}





//##########################***ABOUT SECTION***################################

var skills = $(".skills li");
for(var i =0; i<skills.length; i++){


    skills[i].addEventListener("mouseenter",function(){
        var t = $(this).find(".x");
        t.slideToggle(300);
        // t.toggleClass("hover-show")   
    });

    skills[i].addEventListener("mouseleave", function () {
        var t = $(this).find(".x");
        t.slideUp(300);
        // t.toggleClass("hover-show")
    });
}

// $("brand-t").addEventListener("click", function(){
//     $(".aside").toggleClass("inactive-a");
//     $(".aside").toggleClass("active");
// })