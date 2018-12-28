
var grab = document.getElementById('grab');

grab.addEventListener('click', click);

function click(e) {
    alert("HI");
    e.preventDefault();
}  