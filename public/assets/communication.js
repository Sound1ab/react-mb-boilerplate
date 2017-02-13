(function () {
    var body = document.getElementById('app');
    var heightData = {
        type: 'setScroll',
        height: 0
    };

    window.onpageshow = function (evt) {
        if (evt.persisted) {
            document.body.style.display = "none";
            location.reload();
        }
    };

    this.observeDOM = (function () {
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
            eventListenerSupported = window.addEventListener;
        return function (obj, callback) {
            if (MutationObserver) {
                var obs = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        callback();
                    });
                });
                obs.observe(obj, {
                    childList: true,
                    attributes: true,
                    subtree: true,
                    characterData: true,
                    attributeOldValue: true,
                    characterDataOldValue: true
                });
            }
            else if (eventListenerSupported) {
                obj.addEventListener('DOMNodeInserted', callback, false);
                obj.addEventListener('DOMNodeRemoved', callback, false);
            }
        }
    })();

    var calculateHeight = function(){
        heightData.height =  Math.max(body.scrollHeight, body.offsetHeight);
    }

    setTimeout(function(){
        calculateHeight();
        send(heightData);
    }, 1000);

    var send = function (data) {
        parent.window.postMessage(data, '*');
    };

    var init = function () {
        // window.addEventListener('message', receiveMessage);
        observeDOM(body, function () {
            calculateHeight();
            send(heightData);
        });
    };
    init();
})();
