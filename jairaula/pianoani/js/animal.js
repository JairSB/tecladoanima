var anima=document.querySelectorAll("button")
var baru=document.getElementById("soms")


anima.forEach(au => {
    au.addEventListener('click', x=>{
        x.preventDefault();
        baru.src="barulho/"+au.dataset.bari+".mp3";
        baru.play();
    })
    
});
document.addEventListener('keypress',(ixo)=>{
    anima.forEach(au=>{
    var aiai = au.innerHTML;
    var tlc=ixo.key;
   if(tlc == aiai){
    baru.src="barulho/"+au.dataset.bari+".mp3";
    baru.play();
   } })
})