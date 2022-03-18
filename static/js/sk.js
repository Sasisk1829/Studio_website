
let index = 0;
const totalWorkItems = $(".work-item").length;

// img light-box height

$(document).ready(function () {

    const wHeight = $(window).height();
    $(".lightbox-img").css("max-height", wHeight + "px");

//  light box click work

    $(".work-item-inner").click(function(){
        index = $(this).parent(".work-item").index();
        $(".lightbox").addClass("open");
        lightboxSlideShow()
    })

//  Next and previous button area

    $(".lightbox .prev").click(function(){
        if(index == 0){
            index = totalWorkItems-1;
        }
        else{
            index--;
        }
        lightboxSlideShow();
    })

    $(".lightbox .next").click(function(){
        if(index == 0){
            index = totalWorkItems-1;
        }
        else{
            index++;
        }
        lightboxSlideShow();
    })


//  Close button area

    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open");
    })

//  close lightbox when clicked outside of img-box

    $(".lightbox").click(function(event){
        if($(event.target).hasClass("lightbox")){
            $(this).removeClass("open");
        }
    })
})

function lightboxSlideShow(){
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    $(".lightbox-img").attr("src",imgSrc);    
    $(".lightbox-category").html(category)
    $(".lightbox-counter").html(totalWorkItems + "/" + (index+1));
}