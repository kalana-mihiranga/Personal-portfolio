const sectionElms = document.querySelectorAll('section');
const navElms = document.querySelectorAll('header nav a');


const textAnim = new Typed('.changing-text',{
    strings:['an Engineer','a Full Stack Developer' ],
    typeSpeed:110,
    backSpeed:55,
    backDelay:2000,
    loop:true
});

ScrollReveal({
    reset: true,
    distance:'100px',
    duration:2000,
    delay:100
});

ScrollReveal().reveal('.home-img-box, .page-title', { origin:'top' });
ScrollReveal().reveal('.home-content-box, .about-content-box p,' +
    '.education-box-container, .technical-box-container, .project-container, .frm-wrapper', { origin:'bottom' });
ScrollReveal().reveal('.home-content-box h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content-box p, .about-content-box h3', { origin:'right' });
window.addEventListener('scroll', ()=>{
   sectionElms.forEach(section => {
       const top = window.scrollY;
       const offset = section.offsetTop - 150;
       const height = section.offsetHeight;
       const id = section.getAttribute('id');

       if (top >= offset && top < offset + height) {
           navElms.forEach(nav => {
               nav.classList.remove("active");
               document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           });
       }
   })
});

document.addEventListener('contextmenu', event => event.preventDefault());

