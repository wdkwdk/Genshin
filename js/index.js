var body = document.getElementsByTagName('body')[0];
setInterval(function(){
    body.style.width = window.innerWidth + 'px';
    body.style.height = window.innerHeight + 'px';
},10)
