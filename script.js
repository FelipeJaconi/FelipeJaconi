const gM = document.querySelector(".galeria-modal");
const iGM = document.querySelector(".galeria-modal img");

function fecharGaleria(){
    gM.style.visibility = "hidden";
    iGM.style.transform = "scale(0)";
}

function abrirGaleria(src){
    gM.style.visibility = "visible";
    iGM.style.transform = "scale(1)";
    iGM.src = src
}



const botao = document.querySelector('#botao')

botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
    botao.style.display = 'none'
})




ScrollReveal().reveal('.home .content',{delay:450});
ScrollReveal().reveal('.abou  .content',{delay:500});
ScrollReveal().reveal('.slide active',{delay:750});
ScrollReveal().reveal('.ani4',{delay:1000});
ScrollReveal().reveal('.ani5',{delay:1250});
ScrollReveal().reveal('.ani6',{delay:1500});
ScrollReveal().reveal('.ani7',{delay:1750});
ScrollReveal().reveal('.ani8',{delay:2000});

window.sr = ScrollReveal();
sr.reveal('.video-container', {
origin:'left',
duration:2000,
distance:'25rem',
delay:300,
})
sr.reveal('.image', {
origin:'right',
duration:1000,
distance:'25rem',
delay:500,
})

sr.reveal('.box', {
origin:'top',
duration:900,
distance:'25rem',
delay:600,
})
sr.reveal('.footer-container', {
origin:'bottom',
duration:1000,
distance:'25rem',
delay:600,
})






const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})




class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();





let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}



let cartyItem = document.querySelector('.carty-items-container');

document.querySelector('#ff').onclick = () =>{
    cartyItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartyItem.classList.remove('active');
}


let men = document.querySelector('.car-item-contain');

document.querySelector('#men').onclick = () =>{
    men.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    men.classList.remove('active');
}




let slides = document.querySelectorAll('.hom .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}




document.querySelectorAll('.abou .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.abou .video-container .video').src = src;
    }
})





