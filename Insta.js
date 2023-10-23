var con = document.querySelector("#container");
var heart = document.querySelector("#heart");
var liked = false;

con.addEventListener("dblclick", function () {
    if (!liked) {
        heart.style.transform = 'scale(1)';
        liked = true;
    } else {
        heart.style.transform = 'scale(0)';
        liked = false;
    }
});
