var body = document.getElementsByTagName('body')[0];
setInterval(function () {
    body.style.width = window.innerWidth + 'px';
    body.style.height = window.innerHeight + 'px';
}, 1)
var loction = 0;
var IdNames = ['first', 'second', 'third','forth','fifth']
var flagWheel = true;
var scrollFunc = function () {
    if (!flagWheel) { return; }
    flagWheel = false;
    e = window.event;
    if (e.wheelDelta) {
        if (e.wheelDelta < 0) {
            loction++;
            if (loction >= IdNames.length) {
                loction = IdNames.length - 1;
            }
        }
        if (e.wheelDelta > 0) {
            loction--;
            if (loction < 0) {
                loction = 0;
            }
        }
        document.getElementById(IdNames[loction]).scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            flagWheel = true;
        }, 600);
    }
}
document.addEventListener('mousewheel',function(e){
    e.preventDefault();
},{passive:false});
window.onmousewheel = document.onmousewheel = scrollFunc;