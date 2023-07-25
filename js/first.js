var bgb1 = document.getElementById('bgb1');
var vid0 = document.getElementById('vid0');
var v0 = document.getElementById('v0');
var play0 = document.getElementById('play0First');
play0.onclick = function(){
    bgb1.style.display = 'block';
    v0.style.display = 'block';
    if(vid0.paused){
        vid0.paused = false;
    }
    vid0.play();
}

bgb1.onclick = function(){
    bgb1.style.display = 'none';
    v0.style.display = 'none';
    vid0.play();
}