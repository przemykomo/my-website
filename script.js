var image = false;

function changeImage() {
    var img = document.getElementById("welcome");
    if(image) {
        img.src = "welcome.png";
    } else {
        img.src = "welcome1.png";
    }

    image = !image;
}

function start() {
    setInterval(changeImage, 500);
}
