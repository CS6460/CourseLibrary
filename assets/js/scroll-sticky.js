$(function() {

var $window = $(window);
var lastScrollTop = $window.scrollTop();
var wasScrollingDown = true;
var stickyPadding = 30;

var $sidebar = $("#scroll-side");
if ($sidebar.length > 0) {

    var initialSidebarTop = $sidebar.position().top;

    $window.scroll(function(event) {

        var windowHeight = $window.height();
        var sidebarHeight = $sidebar.outerHeight();

        var scrollTop = $window.scrollTop();
        var scrollBottom = scrollTop + windowHeight;

        var sidebarTop = $sidebar.position().top;
        var sidebarBottom = sidebarTop + sidebarHeight;

        var heightDelta = Math.abs(windowHeight - sidebarHeight);
        var scrollDelta = lastScrollTop - scrollTop;

        var isScrollingDown = (scrollTop > lastScrollTop);
        var isWindowLarger = (windowHeight > sidebarHeight);

        if ((isWindowLarger && scrollTop > (initialSidebarTop - stickyPadding)) || (!isWindowLarger && scrollTop > initialSidebarTop + heightDelta)) {
            $sidebar.addClass('sticky');
        } else if (!isScrollingDown && scrollTop <= (initialSidebarTop - stickyPadding)) {
            $sidebar.removeClass('sticky');
        }

        var dragBottomDown = (sidebarBottom <= scrollBottom && isScrollingDown);
        var dragTopUp = (sidebarTop >= scrollTop && !isScrollingDown);

        if (dragBottomDown) {
            if (isWindowLarger) {
                $sidebar.css('top', stickyPadding);
            } else {
                $sidebar.css('top', -heightDelta);
            }
        } else if (dragTopUp) {
            $sidebar.css('top', stickyPadding);
        } else if ($sidebar.hasClass('sticky-scroll')) {
            var currentTop = parseInt($sidebar.css('top'), 10);

            var minTop = -heightDelta;
            var scrolledTop = currentTop + scrollDelta;

            var isPageAtBottom = (scrollTop + windowHeight >= $(document).height());
            var newTop = (isPageAtBottom) ? minTop : scrolledTop;

            $sidebar.css('top', newTop);
        }

        lastScrollTop = scrollTop;
        wasScrollingDown = isScrollingDown;
    });
}
});