var topBtn = document.getElementById('top');
var bottomBtn = document.getElementById('bottom');
var box = document.getElementById('boxThird');
topBtn.onclick = function(){
    var boxTop = boxThird.offsetTop;
    boxTop +=120;
    boxThird.style.top = boxTop + 'px'; 
}
bottomBtn.onclick = function(){
    var boxTop = boxThird.offsetTop;
    boxTop -= 120;
    boxThird.style.top = boxTop + 'px'; 
}

