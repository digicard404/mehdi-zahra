// ========================================
// ویدئو
// ========================================

const video = document.getElementById("weddingVideo");

document.addEventListener("click", () => {

    if (video) {
        video.muted = false;
        video.play();
    }

}, { once: true });



