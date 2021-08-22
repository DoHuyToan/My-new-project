let imgObj = document.getElementById('myImage');

function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
    imgObj.style.width = "300px"
}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = init;

