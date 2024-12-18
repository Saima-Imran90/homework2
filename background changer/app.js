let btn=document.querySelector("button");
let body=document.querySelector("body");
let clr=["#bfff00","#ff8000","#0080ff","#8000ff","#ff0080","#00ffbf","#8000ff","#ffff00","#ff00ff","#ff0000","#00ff80"]

body.style.background="#ff8000";
btn.addEventListener('click',function() {
    let clrInd=parseInt(Math.random()* clr.length)
    body.style.background=clr[clrInd]
})