var bgb1 = document.getElementById('bgb2');
var vids = document.getElementsByClassName('vid');
var vSeconds = document.getElementsByClassName('vSecond');
var imgDivs = document.getElementsByClassName('imgDiv');

for(var i = 0; i < vids.length; i++){
    imgDivs[i].ikun = i;
    imgDivs[i].onclick = function(){
        bgb2.style.display = 'block';
        vSeconds[this.ikun].style.display = 'block';
        vSeconds[this.ikun].style.zIndex = '9999';
        if(vids[this.ikun].paused){
            vids[this.ikun].paused = false;
        }
        vids[this.ikun].play();
    }

}
bgb2.onclick = function(){
    bgb2.style.display = 'none';
    for(var i = 0;i<vids.length;i++){
        vSeconds[i].style.display = 'none'
        vids[i].pause();
    }
}