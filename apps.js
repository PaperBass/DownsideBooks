function topLinks() {
    var y = document.getElementById('topNavMenu');
    var x = document.getElementById('topLinks');
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

function bottomLinks() {
    var y = document.getElementById('bottomNavMenu');
    var x = document.getElementById('bottomLinks');
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

// function toggleMenu() {
//     var x = document.getElementById('bottomNavMenu');
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }