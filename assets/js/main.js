/**
* Template Name: eStartup - v4.9.1
* Template URL: https://bootstrapmade.com/estartup-bootstrap-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.screens-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate  glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
  /**
   * Painting video with mouseover
   */
  document.getElementById("LutePlayerSing").addEventListener("mouseover", function() {
  	this.play();
  });
  document.getElementById("LutePlayerSing").addEventListener("mouseleave", function() {
  	this.pause();
  });

  document.getElementById("LasciatemiMorire").addEventListener("mouseover", function() {
  	this.play();
  });
  document.getElementById("LasciatemiMorire").addEventListener("mouseleave", function() {
  	this.pause();
  });
  document.getElementById("monteverdi").addEventListener("mouseover", function() {
    this.play();
  });
  document.getElementById("monteverdi").addEventListener("mouseleave", function() {
    this.pause();
  });
  document.getElementById("monkey").addEventListener("mouseover", function() {
  	this.play();
  });
  document.getElementById("monkey").addEventListener("mouseleave", function() {
  	this.pause();
  });
  document.getElementById("ConcertInTheEgg").addEventListener("mouseover", function() {
    this.play();
  });
  document.getElementById("ConcertInTheEgg").addEventListener("mouseleave", function() {
    this.pause();
  });
  document.getElementById("ScaredPetrarch").addEventListener("mouseover", function() {
    this.play();
  });
  document.getElementById("ScaredPetrarch").addEventListener("mouseleave", function() {
    this.pause();
  });
  document.getElementById("Caravaggio").addEventListener("mouseover", function() {
    this.play();
  });
  document.getElementById("Caravaggio").addEventListener("mouseleave", function() {
    this.pause();
  });
  document.getElementById("Female").addEventListener("mouseover", function() {
    this.play();
  });
  document.getElementById("Female").addEventListener("mouseleave", function() {
    this.pause();
  });
  document.getElementById("rocking").addEventListener("mouseover", function() {
    this.play();
  });
  document.getElementById("rocking").addEventListener("mouseleave", function() {
    this.pause();
  });
  document.getElementById("Consti").addEventListener("mouseover", function() {
    this.play();
  });
  document.getElementById("Consti").addEventListener("mouseleave", function() {
    this.pause();
  });
  document.getElementById("Luisa").addEventListener("mouseover", function() {
    this.play();
  });
  document.getElementById("Luisa").addEventListener("mouseleave", function() {
    this.pause();
  });
  document.getElementById("Ilaria").addEventListener("mouseover", function() {
    this.play();
  });
  document.getElementById("Ilaria").addEventListener("mouseleave", function() {
    this.pause();
  });
  /**
   * Audio with mouseover
   */

})()

/** Disappearing first enter block
**/
function disappear(){
  document.getElementById("enterblock").style.display = "none";
  document.getElementById("whitepanel").style.display = "none";
  document.getElementById("body").style.overflowY = "scroll";
  document.getElementById("lefthand").style.animation = "gestureleft linear 2s 2";
  document.getElementById("righthand").style.animation = "gestureright linear 2s 2";
  document.getElementById("title").style.animation = "show 5s";
  document.getElementById("quartettoliuti").play();
}

/** Flip cards **/
function flip(elid){
  document.getElementById(elid).style.transform = "rotateY(180deg)";
}

// Dispay info comics
$(document).ready(function(){
  $("#liuto").click(function(){
    $("#liutotext").slideToggle("fast");
  });
  $("#femaleinfo").click(function(){
    $("#femaletext").slideToggle("fast");
  });
  $("#placeholder").click(function(){
    $("#placetext").slideToggle("fast");
  });
  $("#voice").click(function(){
    $("#voicetext").slideToggle("fast");
  });

});

/** Open and Close sidebar **/
function openNav() {
  document.getElementById("mySidepanel").style.width = "35%";
  document.getElementById("overlaypanel").className = "overlay";
  document.getElementById("body").style.overflowY = "hidden";
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("overlaypanel").classList.remove('overlay');
  document.getElementById("body").style.overflowY = "scroll";
}
