document.addEventListener("DOMContentLoaded", (function() { document.getElementById("icon").addEventListener("click", (function() { document.querySelector(".bottom_parth").classList.toggle("open"); for (var e = document.querySelectorAll("#icon span"), n = 0; n < e.length; n++) e[n].classList.toggle("open") })) })), window.addEventListener("scroll", (function() {
    var e = window.pageYOffset || document.documentElement.scrollTop,
        n = document.querySelector("header");
    e > 100 ? n.classList.contains("hide") || n.classList.add("hide") : n.classList.remove("hide")
})), document.querySelector(".menu #icon").addEventListener("click", (function() {
    var e = document.querySelector(".submenu");
    e.classList.toggle("open"), window.onscroll = function() { e.classList.remove("open") }
}));