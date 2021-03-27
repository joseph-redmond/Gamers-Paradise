$(document).ready(function() {
	$("#preloader").hide("slow");
	$('body').removeClass('loading');
    if ($("#gamesSlider").length) {
        $("#gamesSlider").owlCarousel({
            items:3,
            itemsDesktop:[1199,2],
            itemsDesktopSmall:[980,2],
            itemsMobile:[600,1],
            pagination:false,
            navigation    : true,
            navigationText : ['<span class="fa-stack arrow-left"></span>','<span class="fa-stack arrow-right"></span>'],
            autoPlay:true
        });
    }
    if ($("#productSlider").length) {
        $("#productSlider").owlCarousel({
            items:3,
            itemsDesktop:[1199,2],
            itemsDesktopSmall:[980,2],
            itemsMobile:[600,1],
            pagination:false,
            navigation    : true,
            navigationText : ['<span class="fa-stack arrow-left"></span>','<span class="fa-stack arrow-right"></span>'],
            autoPlay:true
        });
    }
    if ($("#productSlider").length) {
        $("#consolesSlider").owlCarousel({
            items:3,
            itemsDesktop:[1199,2],
            itemsDesktopSmall:[980,2],
            itemsMobile:[600,1],
            pagination:false,
            navigation    : true,
            navigationText : ['<span class="fa-stack arrow-left"></span>','<span class="fa-stack arrow-right"></span>'],
            autoPlay:true
        });
    }
    if ($("#inquery-form").length) {
        $('#inquery-form').validate();
    }
    var success_param = findGetParameter('success_msg');
    if (success_param != null) {
        var success_msg = '<h3 class="mt-2 mb-2 text-center text-white">'+success_param+'</h3>';
        if ($("#inquery-form").length) {
            $("#inquery-form").prepend(success_msg);
        }
    }
});
window.scrollToSection = function(target) {
    target = document.getElementById(target);
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}