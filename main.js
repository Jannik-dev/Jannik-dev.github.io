function openNav() {
    document.getElementById("nav").style.display = "block";
    slideIn();
    document.getElementById("menu").style.display = "none";
    document.getElementById("navbarSupportedContent").style.display = "block";
}

function closeNav() {
    document.getElementById("nav").style.display = "none";
    document.getElementById("nav").style.top = -75;
    document.getElementById("menu").style.display = "block";
}

function slideIn() {
    var navbar = document.getElementById("nav");
    var pos = -75;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos++;
            navbar.style.top = pos + "px";
        }
    }
}