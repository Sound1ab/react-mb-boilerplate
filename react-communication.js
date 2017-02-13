(function () {
    var iframe = document.getElementById('module-library-page').contentWindow;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var iFrame = document.getElementById('module-library-page');
        window.location = iFrame.src;
    }

    // Element to move, time in ms to animate
    function scrollTo(element, duration) {
        var e = document.documentElement;
        if (e.scrollTop === 0) {
            var t = e.scrollTop;
            ++e.scrollTop;
            e = t + 1 === e.scrollTop-- ? e : document.body;
        }
        scrollToC(e, e.scrollTop, element, duration);
    }

    // Element to move, element or px from, element or px to, time in ms to animate
    function scrollToC(element, from, to, duration) {
        if (duration <= 0) return;
        if (typeof from === "object") from = from.offsetTop;
        if (typeof to === "object") to = to.offsetTop;

        scrollToX(element, from, to, 0, 1 / duration, 20, easeInOutCuaic);
    }

    function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
        if (t01 < 0 || t01 > 1 || speed <= 0) {
            element.scrollTop = xTo;
            return;
        }
        element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
        t01 += speed * step;

        setTimeout(function () {
            scrollToX(element, xFrom, xTo, t01, speed, step, motion);
        }, step);
    }

    function easeInOutCuaic(t) {
        t /= 0.5;
        if (t < 1)return t * t * t / 2;
        t -= 2;
        return (t * t * t + 2) / 2;
    }

    var scroll = function (anchorPoint) {
        scrollTo(anchorPoint, 1200)
    }

    var setIframeHeight = function (height) {
        var embBody = document.getElementById('ms-website');
        height = height.toString();
        height = height + 'px';
        document.getElementById('module-library-page').style.height = height;
        embBody.style.height = height;
        embBody.style.overflow = 'hidden';
        embBody.style.marginBottom = '10px';
    };
    var receiveMessage = function (event) {
        console.group('message received');
            console.log(event.data);
        console.groupEnd('message received');
        //if(event.origin !== 'http://mvwbc-3-dev.digitalannexe.eu') return; // for security, rename to iframe domain origin
        switch (event.data.type) {
            case 'setScroll':
                setIframeHeight(event.data.height);
                break;
            case 'anchor':
                scroll(event.data.anchorPoint);
                break;
        }
    };
    var handleScroll = function () {
        iframe.postMessage(window.pageYOffset, '*');
    }
    var init = function () {

        window.addEventListener('message', receiveMessage);
        window.addEventListener('scroll', handleScroll)
    };
    init();
})();