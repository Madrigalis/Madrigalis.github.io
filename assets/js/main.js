/**
* Template Name: eStartup - v4.9.1
* Template URL: https://bootstrapmade.com/estartup-bootstrap-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


(function() {
  "use strict";

  if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
  } else {
      window.onbeforeunload = function () {
          window.scrollTo(0, 0);
      }
  }
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
  *removing white background sliders

  $("svg.main-svg").removeAttr("style");
  */
})()
  /**
   * Painting video with mouseover
   */

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
  $("#court").click(function(){
    $("#courtext").slideToggle("fast");
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


/** Slider Infographic COMPOSER**/
$(function() {
  const $slides = $('.slides');
   const margin = 44
  const $slideWidth = $($slides[0]).width()
  const $slideOverallWidth = $slideWidth + margin
  const $sliderWrapper = $('.slider-wrapper')
  const $slidesWrapper = $('.slides-wrapper');
  const $btnNext = $('.btn-next')
  const $btnPrev = $('.btn-prev')


  const slidesWrapperWidth = () => {
    let slidesAmount = $slides.length
    let overallWidth = $slideWidth * slidesAmount
    $slidesWrapper.css('width', (overallWidth + margin * slidesAmount - 1))
  }

  const sliderWrapperWidth = () => {
    $sliderWrapper.css('width', $slideWidth + margin)
  }
  const calcMoveAmount = (index, type) => {
    let isNext = type === '+'
    let pastAmount = index * $slideOverallWidth
    let newAmount
    let newIndex
    if (!isNext && index === 0) {
      newAmount = 0
      newIndex = 0
    } else if (isNext && index === $slides.length - 1) {
      newAmount = pastAmount
      newIndex = index
    } else {
      newAmount = isNext ? pastAmount + $slideOverallWidth : pastAmount - $slideOverallWidth
      newIndex = isNext ? index + 1 : index - 1;
    }
    let parallaxAmount = newIndex / $slides.length * 100
    $slides.find('.img-wrapper').css({
      'background-position': `${parallaxAmount}% 50%`
    })
    $slides.removeClass('active to-right to-left')
    $($slides[newIndex]).addClass(`active`)
    return moveSliderBy(newAmount)
  }

  const moveSliderBy = amount => {
    $slidesWrapper.css('transform', `translate3d(-${amount}px, 0, 0)`)

  }
  sliderWrapperWidth()
  slidesWrapperWidth()

  $btnNext.click(function() {
      let index = $('.slides.active').index()
      calcMoveAmount(index, '+')
  })
  $btnPrev.click(function() {
      let index = $('.slides.active').index()
      calcMoveAmount(index, '-')
  })
});

/** Slider Infographic PUBLISHERS**/
$(function() {
  const $slides = $('.slides2');
   const margin = 44
  const $slideWidth = $($slides[0]).width()
  const $slideOverallWidth = $slideWidth + margin
  const $sliderWrapper = $('.slider-wrapper2')
  const $slidesWrapper = $('.slides-wrapper2');
  const $btnNext = $('.btn-next2')
  const $btnPrev = $('.btn-prev2')


  const slidesWrapperWidth = () => {
    let slidesAmount = $slides.length
    let overallWidth = $slideWidth * slidesAmount
    $slidesWrapper.css('width', (overallWidth + margin * slidesAmount - 1))
  }

  const sliderWrapperWidth = () => {
    $sliderWrapper.css('width', $slideWidth + margin)
  }
  const calcMoveAmount = (index, type) => {
    let isNext = type === '+'
    let pastAmount = index * $slideOverallWidth
    let newAmount
    let newIndex
    if (!isNext && index === 0) {
      newAmount = 0
      newIndex = 0
    } else if (isNext && index === $slides.length - 1) {
      newAmount = pastAmount
      newIndex = index
    } else {
      newAmount = isNext ? pastAmount + $slideOverallWidth : pastAmount - $slideOverallWidth
      newIndex = isNext ? index + 1 : index - 1;
    }
    let parallaxAmount = newIndex / $slides.length * 100
    $slides.find('.img-wrapper2').css({
      'background-position': `${parallaxAmount}% 50%`
    })
    $slides.removeClass('active to-right to-left')
    $($slides[newIndex]).addClass(`active`)
    return moveSliderBy(newAmount)
  }

  const moveSliderBy = amount => {
    $slidesWrapper.css('transform', `translate3d(-${amount}px, 0, 0)`)

  }
  sliderWrapperWidth()
  slidesWrapperWidth()

  $btnNext.click(function() {
      let index = $('.slides2.active').index()
      calcMoveAmount(index, '+')
  })
  $btnPrev.click(function() {
      let index = $('.slides2.active').index()
      calcMoveAmount(index, '-')
  })
});

/** Slider Infographic TEXTS/BOOKS**/
$(function() {
  const $slides = $('.slides3');
   const margin = 44
  const $slideWidth = $($slides[0]).width()
  const $slideOverallWidth = $slideWidth + margin
  const $sliderWrapper = $('.slider-wrapper3')
  const $slidesWrapper = $('.slides-wrapper3');
  const $btnNext = $('.btn-next3')
  const $btnPrev = $('.btn-prev3')


  const slidesWrapperWidth = () => {
    let slidesAmount = $slides.length
    let overallWidth = $slideWidth * slidesAmount
    $slidesWrapper.css('width', (overallWidth + margin * slidesAmount - 1))
  }

  const sliderWrapperWidth = () => {
    $sliderWrapper.css('width', $slideWidth + margin)
  }
  const calcMoveAmount = (index, type) => {
    let isNext = type === '+'
    let pastAmount = index * $slideOverallWidth
    let newAmount
    let newIndex
    if (!isNext && index === 0) {
      newAmount = 0
      newIndex = 0
    } else if (isNext && index === $slides.length - 1) {
      newAmount = pastAmount
      newIndex = index
    } else {
      newAmount = isNext ? pastAmount + $slideOverallWidth : pastAmount - $slideOverallWidth
      newIndex = isNext ? index + 1 : index - 1;
    }
    let parallaxAmount = newIndex / $slides.length * 100
    $slides.find('.img-wrapper').css({
      'background-position': `${parallaxAmount}% 50%`
    })
    $slides.removeClass('active to-right to-left')
    $($slides[newIndex]).addClass(`active`)
    return moveSliderBy(newAmount)
  }

  const moveSliderBy = amount => {
    $slidesWrapper.css('transform', `translate3d(-${amount}px, 0, 0)`)

  }
  sliderWrapperWidth()
  slidesWrapperWidth()

  $btnNext.click(function() {
      let index = $('.slides3.active').index()
      calcMoveAmount(index, '+')
  })
  $btnPrev.click(function() {
      let index = $('.slides3.active').index()
      calcMoveAmount(index, '-')
  })
});

/** Slider Infographic VOICES**/
$(function() {
  const $slides = $('.slides4');
   const margin = 44
  const $slideWidth = $($slides[0]).width()
  const $slideOverallWidth = $slideWidth + margin
  const $sliderWrapper = $('.slider-wrapper4')
  const $slidesWrapper = $('.slides-wrapper4');
  const $btnNext = $('.btn-next4')
  const $btnPrev = $('.btn-prev4')


  const slidesWrapperWidth = () => {
    let slidesAmount = $slides.length
    let overallWidth = $slideWidth * slidesAmount
    $slidesWrapper.css('width', (overallWidth + margin * slidesAmount - 1))
  }

  const sliderWrapperWidth = () => {
    $sliderWrapper.css('width', $slideWidth + margin)
  }
  const calcMoveAmount = (index, type) => {
    let isNext = type === '+'
    let pastAmount = index * $slideOverallWidth
    let newAmount
    let newIndex
    if (!isNext && index === 0) {
      newAmount = 0
      newIndex = 0
    } else if (isNext && index === $slides.length - 1) {
      newAmount = pastAmount
      newIndex = index
    } else {
      newAmount = isNext ? pastAmount + $slideOverallWidth : pastAmount - $slideOverallWidth
      newIndex = isNext ? index + 1 : index - 1;
    }
    let parallaxAmount = newIndex / $slides.length * 100
    $slides.find('.img-wrapper').css({
      'background-position': `${parallaxAmount}% 50%`
    })
    $slides.removeClass('active to-right to-left')
    $($slides[newIndex]).addClass(`active`)
    return moveSliderBy(newAmount)
  }

  const moveSliderBy = amount => {
    $slidesWrapper.css('transform', `translate3d(-${amount}px, 0, 0)`)

  }
  sliderWrapperWidth()
  slidesWrapperWidth()

  $btnNext.click(function() {
      let index = $('.slides4.active').index()
      calcMoveAmount(index, '+')
  })
  $btnPrev.click(function() {
      let index = $('.slides4.active').index()
      calcMoveAmount(index, '-')
  })
});
