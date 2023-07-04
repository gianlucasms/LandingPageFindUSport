function SoccerChanges (){
    var soccerName = document.getElementById("changeName");
    soccerName.innerHTML = "Soccer";

    const videoElement = document.getElementById('backgroundVideo');
    const sourceElement = document.getElementById('sourceVideo');

    const newUrl = 'imagesAndVideos/soccer.mp4';
    sourceElement.src = newUrl;

    videoElement.load();
}

function SkiChanges (){
    var soccerName = document.getElementById("changeName");
    soccerName.innerHTML = "Ski Snowboard";

    const videoElement = document.getElementById('backgroundVideo');
    const sourceElement = document.getElementById('sourceVideo');

    const newUrl = 'imagesAndVideos/Ski Snowboard Edit Toggenburg - YI 4K+ 4K_60FPS.mp4';
    sourceElement.src = newUrl;

    videoElement.load();
}

function SkateChanges (){
    var soccerName = document.getElementById("changeName");
    soccerName.innerHTML = "Skate";

    const videoElement = document.getElementById('backgroundVideo');
    const sourceElement = document.getElementById('sourceVideo');

    const newUrl = 'imagesAndVideos/skate.mp4';
    sourceElement.src = newUrl;

    videoElement.load();
}

function Formula1Changes (){
    var soccerName = document.getElementById("changeName");
    soccerName.innerHTML = "Formula 1";

    const videoElement = document.getElementById('backgroundVideo');
    const sourceElement = document.getElementById('sourceVideo');

    const newUrl = 'imagesAndVideos/formula1.mp4';
    sourceElement.src = newUrl;

    videoElement.load();
}