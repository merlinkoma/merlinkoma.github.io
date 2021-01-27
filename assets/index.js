function slideL() {
    let left = document.getElementById('checkleft');
    left.addEventListener('click', function () {
        document.getElementById("main").style.transform = `translateX(-100vw)`;
    });
}
slideL();
function slideR() {
    let right = document.getElementById('checkright');
    right.addEventListener('click', function () {
        document.getElementById("main").style.transform = `translateX(0)`;
    });
}
slideR();