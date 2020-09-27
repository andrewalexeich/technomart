function init() {
    const vidDefer = document.getElementsByTagName("iframe");
    for (let i = 0; i < vidDefer.length; i++) {
        if(vidDefer[i].getAttribute("data-src")) {
            vidDefer[i].setAttribute("src",vidDefer[i].getAttribute("data-src"));
        }
    }
}

window.onload = init;