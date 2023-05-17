const portfolioBtn = document.querySelector(".portfolio-btn");
const educationBtn = document.querySelector(".education-btn");
const contactBtn = document.querySelector('.contact-link');
const intro = document.querySelectorAll(".intro-dissapear");
const portfolio = document.querySelector(".profile-screen");
const text = document.querySelector(".text");
const footer = document.querySelector(".footer");


portfolioBtn.addEventListener("click", ()=>{

    footer.style.opacity = '0';

    setTimeout(()=>{
        footer.style.display = 'none';
    })


    intro.forEach(elem =>{
        elem.style.opacity = '0';

        setTimeout(()=>{
            elem.style.display = 'none';
        },1000)      
    });

    setTimeout(()=>{
        portfolio.style.display = 'block';
    },2500);

    setTimeout(()=>{

        portfolio.style.opacity = '1';
        portfolio.style.visibility = 'visible'
        footer.style.position = 'relative'
        footer.style.display = 'flex';
        footer.style.opacity = '1';

    },2600);

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

