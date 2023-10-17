let bars=document.querySelector('.home-bars');
let homeul=document.querySelector('.home-ul');
let barstest=true;
bars.addEventListener('click',()=>{
if(barstest){
homeul.style.left='0%';
bars.innerHTML='<i class="fa-solid fa-xmark"></i>';barstest=false}
else{
    homeul.style.left='-150%';
    bars.innerHTML='<i class="fa-solid fa-bars"></i>';barstest=true;
}
})