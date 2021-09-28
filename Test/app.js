

function sideNav(){
    const b = document.querySelector('.burger');
    const n = document.querySelector('.nav__links');
    const nevlinks = document.querySelectorAll('.nav__links li');
    //toggle
    b.addEventListener('click' , (e) =>{
        e.preventDefault();
        b.classList.toggle('toggle');
        n.classList.toggle('nav__active');

         //Animeation links 
        nevlinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ``
            }else{
                link.style.animation = `navlinkfade 0.5s forwards ${index /7 + 1.5}s`
            }
        });
    });
   
}

sideNav();