const portfolioBtn = document.querySelector(".portfolio-btn");
const educationBtn = document.querySelector(".education-btn");
const contactBtn = document.querySelector('.contact-link');
const intro = document.querySelectorAll(".intro-dissapear");
const text = document.querySelector(".text");


portfolioBtn.addEventListener("click", ()=>{

    intro.forEach(elem =>{
        elem.style.opacity = '0';

        setTimeout(()=>{
            elem.style.display = 'none';
        },1000)      
    });

    setTimeout(()=>{
        text.style.bottom = '90%';
    },1000)
});


educationBtn.addEventListener("click", ()=>{

    intro.forEach(elem =>{
        elem.style.opacity = '0';

        setTimeout(()=>{
            elem.style.display = 'none';
        },1000)      
    });

    setTimeout(()=>{
        text.style.bottom = '90%';
    },1000)
})

contactBtn.addEventListener("click", ()=>{

    intro.forEach(elem =>{
        elem.style.opacity = '0';

        setTimeout(()=>{
            elem.style.display = 'none';
        },1000)      
    });

    setTimeout(()=>{
        text.style.bottom = '90%';
    },1000)
})

