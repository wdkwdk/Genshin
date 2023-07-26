// 切换人物按键
var topBtn = document.getElementById('top');
var bottomBtn = document.getElementById('bottom');
// 可以改变位置
var boxThird = document.getElementById('boxThird');
// 获取tu和xing类的元素
var tu = document.getElementsByClassName('tu')[0];
var xing = document.getElementsByClassName('xing')[0];
// 获取人物的元素
var renwu = document.getElementsByClassName('rw');
// 是否可以点击标记
var flagThird = true;
// 人物的下标
var indexRW = 2;
// 获取视频的框
var mp43 = document.getElementsByClassName('mp43');
// 获取视频的本体
var vid3 = document.getElementsByClassName('vid3');
// 获取播放按钮
var play3 = document.getElementsByClassName('play3');
// 获取背景
var bgb3 = document.getElementById('bgb3');
for (var i = 0; i < 5; i++) {
    play3[i].index = i;
    play3[i].onclick = function () {
        bgb3.style.opacity = '0.7';
        bgb3.style.zIndex = '99999';
        mp43[this.index].style.opacity = '1';
        mp43[this.index].style.zIndex = '999999';
        if (vid3[this.index].paused) {
            vid3[this.index].paused = false;
        }
        vid3[this.index].play();
    }
}


bgb3.onclick = function () {
    for (var i = 0; i < vid3.length; i++) {
        mp43[i].style.opacity = '0';
        mp43[i].style.zIndex = '0';
        vid3[i].pause();
    }
    bgb3.style.opacity = '0';
    bgb3.style.zIndex = '0';
}

topBtn.onclick = function () {
    if (!flagThird) { return; }
    // 显示现在选择的人物
    indexRW++;
    // 防止越界
    if (indexRW > 4) {
        indexRW = 4;
        return;
    }
    // 清空全部样式
    changeRW()
    renwu[indexRW].style.opacity = 1;
    renwu[indexRW].style.zIndex = 100;
    flagThird = false;
    var boxTop = boxThird.offsetTop;
    // JS获取元素的宽高
    var tuHeight = tu.offsetHeight;
    var xingHeight = xing.offsetHeight;
    boxTop -= (tuHeight + xingHeight);
    boxThird.style.top = boxTop + 'px';
    // 超出设定的时间后做某件事情
    setTimeout(function () { flagThird = true; }, 1000)
}
bottomBtn.onclick = function () {
    if (!flagThird) { return; }
    // 显示现在选择的人物
    indexRW--;
    // 防止越界
    if (indexRW < 0) {
        indexRW = 0;
        return;
    }
    // 清空全部样式
    changeRW();
    renwu[indexRW].style.opacity = 1;
    renwu[indexRW].style.zIndex = 100;
    flagThird = false;
    var boxTop = boxThird.offsetTop;
    // JS获取元素的宽高
    var tuHeight = tu.offsetHeight;
    var xingHeight = xing.offsetHeight;
    boxTop += (tuHeight + xingHeight);
    boxThird.style.top = boxTop + 'px';
    // 事件超出设定的事件后做某件事情
    setTimeout(function () { flagThird = true; }, 1000);
}
function changeRW() {
    // 清空人物的样式
    for (var i = 0; i < renwu.length; i++) {
        renwu[i].style.opacity = 0;
        renwu[i].style.zIndex = 0;
    }
}
var musicZ = ['海哥中', '宵宫中', '八重神子中', '齐凉凉中', '万叶中'];
var musicR = ['海哥日', '宵宫日', '八重神子日', '齐凉凉日', '万叶日'];
var rwyys = document.getElementsByClassName('rwyy');
var zwyys = document.getElementsByClassName('zwyy');
var music;
var musicIndex = 0;
for (var i = 0; i < zwyys.length; i++) {
    zwyys[i].index = i;
    rwyys[i].index = i;
    zwyys[i].onclick = function () {
        if(music){
            music.currentTime = 0;
            music.pause();
        }
        music = new Audio('images/mp3/' + musicZ[this.index] + (musicIndex%3+1)+'.mp3');
        music.play();
        musicIndex++;
    }
    rwyys[i].onclick = function () {
        if(music){
            music.currentTime = 0;
            music.pause();
        }
        music = new Audio('images/mp3/' + musicR[this.index] + (musicIndex%3+1)+'.mp3');
        music.play();
        musicIndex++;

    }
}
