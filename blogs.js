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

let blogsdiv=document.querySelector('.blogs-div');

document.addEventListener('DOMContentLoaded', function () {
    const cardKeys = Object.keys(localStorage);
 
    cardKeys.forEach(key => {
        const storedData = JSON.parse(localStorage.getItem(key));

        if (storedData) {
            blogsdiv.innerHTML += `
                <form class="blogs-card">
                    <div class="blogs-img"><img src="${storedData.imageUrl}" alt="cat"></div>
                    <div class="blogs-detills">
                        <h3 class="blogs-detills-title">${storedData.title.substring(0, 50)}</h3>
                        <p class="blogs-date">${storedData.day}/${storedData.month}/${storedData.year}<span>${storedData.hours} : ${storedData.minutes}</span></p>
                        <p class="blogs-detills-descriptoin">${storedData.description.substring(0, 280)}...</p>
                    </div>
                </form>
            `;
        } else {
            console.log('البيانات غير موجودة');
        }
    });
});
