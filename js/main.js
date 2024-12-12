$(window).scroll(function() {
    // Get the scroll position of the window
    var windowScrollPosition = $(window).scrollTop();

    // Check if the scroll position is within the #faqs element
    var faqsElement = $("#faqs");
    var faqsTop = faqsElement.offset().top;
    var faqsHeight = faqsElement.height();
    var faqsBottom = faqsTop + faqsHeight - 700;

    if (windowScrollPosition >= faqsTop && windowScrollPosition <= faqsBottom) {
        // Your logic when scrolling within the #faqs element
        $('.faq-tabs').addClass('fixed-on-top');
    } else {
        // Your logic when scrolling outside the #faqs element
        $('.faq-tabs').removeClass('fixed-on-top');
    }
});

$(document).ready(function () {
    $(".faqnav-item").click(function(){
        $(".faqnav-item").removeClass("active");
        $(this).addClass("active");
    });

    /*$(".faqnav-item").click(function(){
        //$("html,body").scrollTop(550);
        $("html").animate({scrollTop:$("#faqs").offset().top},100);
        // Remove "active" class from all elements
        $(".faqnav-item").removeClass("active");
        
        // Add "active" class to the clicked element
        $(this).addClass("active");
        
        // Get the scroll position from the data attribute
        var scrollPosition = $(this).data("scroll-position");
        
        // Set the scroll position for the .faq-all-box element
        $(".faq-all-box").scrollTop(scrollPosition);
    });*/
    
    

	new WOW().init();
    $('#owl-review').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 50, 
        dots:true,
        nav:false,
        responsive: {
            0: {
                items: 1,
                margin: 0, // No margin on small screens
                dots:false,
            },
            600: {
                items: 3,
                dots:false,
            },
            1000: {
                items: 2,
                dots:true,
            },
        },
        onInitialized: setWidth,
        onResized: setWidth
    });

    function setWidth(event) {
        var centerItem = event.item.index;
        var owlStage = event.target.owl.stage;
        var items = $(event.target).find('.owl-item');

        items.each(function (index, item) {
            var scale = index === centerItem ? 0.8 : 0.3; // Increase the scale for the center item
            var width = (owlStage.width() * scale) - (index === centerItem ? 20 : 0); // Add a 20px margin to the center item
            $(item).width(width);
        });
    }
});

$('#owl-serve').owlCarousel({
    center: true,
    loop: true,
    margin: 10, 
    dots:false,
    nav:false,
    responsive: {
        0: {
            items: 1,
            margin: 0, // No margin on small screens
            dots:false,
        },
        600: {
            items: 3,
            dots:false,
        },
        1000: {
            items: 6,
            dots:true,
        },
    },
});