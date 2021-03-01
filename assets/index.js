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

function slideSlowL(){
    let slideleft = document.getElementById('slideleft');
    for (let i = 0; i < 10; i++) {
        slideleft.addEventListener('mouseover', function (){
            document.getElementById('registrar-carousel').style.transform = `translateX(-${i}vw)`;
        })
    }  
}
slideSlowL();