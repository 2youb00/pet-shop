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
let emailinput=document.querySelector('.card-email-input');
let emailbtn=document.querySelector('.card-email-button');
emailbtn.addEventListener('click',()=>{
    if(emailinput.value=='ayoubas2003@gmail.com'){
        window.location.href = 'edit.html';
    }
})
let blogsbtn=document.querySelector('.blogs-a');
blogsbtn.addEventListener('click',()=>{
    window.location.href = 'blogs.html';
})

let populardiv = document.querySelector('.popular-div');

document.addEventListener('DOMContentLoaded', function () {
    // قم بتحميل البيانات عند تحميل الصفحة
    const cardKeys = Object.keys(localStorage);

    cardKeys.forEach(key => {
        const storedData = JSON.parse(localStorage.getItem(key));

        if (storedData) {
            populardiv.innerHTML += `
                <form class="popular-card">
                    <div class="popular-img"><img src="${storedData.imageUrl}" alt="cat"></div>
                    <div class="popular-detills">
                        <h3 class="popular-detills-title">${storedData.title.substring(0, 40)}</h3>
                        <p class="popular-detills-descriptoin">${storedData.description.substring(0, 100)}...</p>
                    </div>
                    <div class="popular-button"><button>Read More</button></div>
                </form>
            `;
        } else {
            console.log('البيانات غير موجودة');
        }
    });
});

 



