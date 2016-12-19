window.onload = function () {
    toggleMenuButton();
}

function toggleMenuButton() {
    "use strict";
    let toggle = document.querySelector(".menuButtonAnimation"),
        sidenav = document.getElementById('mySidenav'),
        noScroll = document.getElementsByClassName('noScroll')[0],
        introduction = document.getElementById('introduction');

    toggle.addEventListener("click", function (e) {
        scroll(0, 0);
        this.classList.toggle("is-active");
        sidenav.classList.toggle('sidenavOpen');
        noScroll.classList.toggle('overflow');
    });
};