const primeiroInput = document.getElementById('Ski');

window.addEventListener('load', () => {
    const videoElement = document.getElementById('backgroundVideo');
    const sourceElement = document.getElementById('sourceVideo');

    const newUrl = 'imagesAndVideos/Ski Snowboard Edit Toggenburg - YI 4K+ 4K_60FPS.mp4';
    sourceElement.src = newUrl;

    // Recarregando o vídeo com a nova URL
    videoElement.load();

    var changeNameSki = document.getElementById("changeName");
    changeNameSki.innerHTML = "Ski Snowboard."
    primeiroInput.focus();
});