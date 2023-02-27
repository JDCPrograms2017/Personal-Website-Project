function scrollToSelection(buttonID) {
    var target = document.getElementById(buttonID);
    target.scrollIntoView({behavior: 'smooth'});
}