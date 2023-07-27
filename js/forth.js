var tus = document.getElementsByClassName('xtu');
var disArr = document.getElementsByClassName('dis');
for (var i = 0; i < tus.length; i++) {
    disArr[i].style.display = 'none';
}
disArr[0].style.display = 'block';
for (var i = 0; i < tus.length; i++) {
    tus[i].index = i;
    tus[i].onclick = function () {
        for (var j = 0; j < tus.length; j++) {
            tus[j].src = 'images/4fourth/tx' + (j + 1) + '.png';
            disArr[j].style.display = 'none';
        }
        tus[this.index].src = 'images/4fourth/tx' + (this.index + 1) + 'hover.png';
        disArr[this.index].style.display = 'block';
    }
}