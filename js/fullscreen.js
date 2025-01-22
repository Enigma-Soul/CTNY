const fullscreenButton = document.getElementById('Full');
function Fullscreen() {
    let doc = window.document;
    let docEl = doc.documentElement;

    let requestFullscreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullscreen || docEl.msRequestFullscreen;
    let exitFullscreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullscreen.call(docEl);
        fullscreenButton.textContent = "ExitFullScreen";
    } else {
        exitFullscreen.call(doc);
        fullscreenButton.textContent = "FullScreen";
    }
}
