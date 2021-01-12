// Menu show
const showMenu = (toggleId,navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);

  if(toggle && nav ){
    toggle.addEventListener('click' , () => {
      nav.classList.toggle('show');
    });
  }
}

showMenu('nav-toggle','nav-menu');

// Remove menu
const navLink = document.querySelectorAll('.nav__link'),
      navMenu = document.getElementById('nav-menu');

function linkAction(){
  navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scrool sections active link
const sections = document.querySelectorAll('section[id]');

addEventListener('scroll' , scrollActive);

function scrollActive(){
  const scrollY = window.pageXOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active'); 
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }
  });
}

// Change color header
window.onscroll = () => {
  const nav = document.getElementById('header');
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}