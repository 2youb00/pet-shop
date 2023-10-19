let chooseFile = document.getElementById('imageUpload');
let popularimg = document.querySelector('.popular-img');
let editcardtitle = document.querySelector('.edit-card-title');
let editcardbutton = document.querySelector('.edit-card-button');
let popularcard = document.querySelector('.popular-card');
let populardetillstitle = document.querySelector('.popular-detills-title');
let editcarddescription = document.querySelector('.edit-card-description');
let populardetillsdescriptoin = document.querySelector('.popular-detills-descriptoin');

    chooseFile.addEventListener('change', function() {
        if (chooseFile.files.length > 0) {
            let file = new FileReader(); 
            file.readAsDataURL(chooseFile.files[0]);
            file.onload = function() { 
                let image = document.createElement('img');
                image.src = file.result;
                popularimg.appendChild(image);
            }
        }
    });
    editcardbutton.addEventListener('click',()=>{
        populardetillstitle.innerHTML = editcardtitle.value.substring(0, 40);
      populardetillsdescriptoin.innerHTML=editcarddescription.value.substring(0, 100)+'...';
    })
    let add = document.querySelector('.edit-add');
    let deletebtn = document.querySelector('.edit-delete');
    //-------------------وضع على اللكل ستورج---------------
    add.addEventListener('click', () => {
        const uniqueKey = new Date().getTime().toString(); 
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        localStorage.setItem(`card_${uniqueKey}`, JSON.stringify({
            title: editcardtitle.value,
            description: editcarddescription.value+'...',
            imageUrl: popularimg.querySelector('img') ? popularimg.querySelector('img').src : '',
            year: year,month:month,day:day,hours:hours,minutes:minutes
        }));
    });
//-----------------------حذف من اللوكل ستوريح--------------------
    const cardKeys = Object.keys(localStorage);
    const maxCards = 10; 
    
    deletebtn.addEventListener('click', () => {
        cardKeys.forEach(key => localStorage.removeItem(key));
    });
    