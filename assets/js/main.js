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

/*Timeline*/
jQuery(document).ready(function($){
	var timelines = $('.cd-horizontal-timeline'),
		eventsMinDistance = 60;

	(timelines.length > 0) && initTimeline(timelines);

	function initTimeline(timelines) {
		timelines.each(function(){
			var timeline = $(this),
				timelineComponents = {};
			//cache timeline components
			timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
			timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
			timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
			timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
			timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
			timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
			timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
			timelineComponents['eventsContent'] = timeline.children('.events-content');

			//assign a left postion to the single events along the timeline
			setDatePosition(timelineComponents, eventsMinDistance);
			//assign a width to the timeline
			var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
			//the timeline has been initialize - show it
			timeline.addClass('loaded');

			//detect click on the next arrow
			timelineComponents['timelineNavigation'].on('click', '.next', function(event){
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, 'next');
			});
			//detect click on the prev arrow
			timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, 'prev');
			});
			//detect click on the a single event - show new event content
			timelineComponents['eventsWrapper'].on('click', 'a', function(event){
				event.preventDefault();
				timelineComponents['timelineEvents'].removeClass('selected');
				$(this).addClass('selected');
				updateOlderEvents($(this));
				updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
				updateVisibleContent($(this), timelineComponents['eventsContent']);
			});

			//on swipe, show next/prev event content
			timelineComponents['eventsContent'].on('swipeleft', function(){
				var mq = checkMQ();
				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
			});
			timelineComponents['eventsContent'].on('swiperight', function(){
				var mq = checkMQ();
				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
			});

			//keyboard navigation
			$(document).keyup(function(event){
				if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
					showNewContent(timelineComponents, timelineTotWidth, 'prev');
				} else if( event.which=='39' && elementInViewport(timeline.get(0))) {
					showNewContent(timelineComponents, timelineTotWidth, 'next');
				}
			});
		});
	}

	function updateSlide(timelineComponents, timelineTotWidth, string) {
		//retrieve translateX value of timelineComponents['eventsWrapper']
		var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
			wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
		//translate the timeline to the left('next')/right('prev')
		(string == 'next')
			? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
			: translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
	}

	function showNewContent(timelineComponents, timelineTotWidth, string) {
		//go from one event to the next/previous one
		var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
			newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();

		if ( newContent.length > 0 ) { //if there's a next/prev event - show it
			var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
				newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

			updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
			updateVisibleContent(newEvent, timelineComponents['eventsContent']);
			newEvent.addClass('selected');
			selectedDate.removeClass('selected');
			updateOlderEvents(newEvent);
			updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
		}
	}

	function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
		//translate timeline to the left/right according to the position of the selected event
		var eventStyle = window.getComputedStyle(event.get(0), null),
			eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
			timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
			timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
		var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

        if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
        	translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
        }
	}

	function translateTimeline(timelineComponents, value, totWidth) {
		var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
		value = (value > 0) ? 0 : value; //only negative translate value
		value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
		setTransformValue(eventsWrapper, 'translateX', value+'px');
		//update navigation arrows visibility
		(value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
		(value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
	}

	function updateFilling(selectedEvent, filling, totWidth) {
		//change .filling-line length according to the selected event
		var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
			eventLeft = eventStyle.getPropertyValue("left"),
			eventWidth = eventStyle.getPropertyValue("width");
		eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
		var scaleValue = eventLeft/totWidth;
		setTransformValue(filling.get(0), 'scaleX', scaleValue);
	}

	function setDatePosition(timelineComponents, min) {
		for (i = 0; i < timelineComponents['timelineDates'].length; i++) {
		    var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
		    	distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
		    timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
		}
	}

	function setTimelineWidth(timelineComponents, width) {
		var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
			timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
			timeSpanNorm = Math.round(timeSpanNorm) + 4,
			totalWidth = timeSpanNorm*width;
		timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
		updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);

		return totalWidth;
	}

	function updateVisibleContent(event, eventsContent) {
		var eventDate = event.data('date'),
			visibleContent = eventsContent.find('.selected'),
			selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
			selectedContentHeight = selectedContent.height();

		if (selectedContent.index() > visibleContent.index()) {
			var classEnetering = 'selected enter-right',
				classLeaving = 'leave-left';
		} else {
			var classEnetering = 'selected enter-left',
				classLeaving = 'leave-right';
		}

		selectedContent.attr('class', classEnetering);
		visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			visibleContent.removeClass('leave-right leave-left');
			selectedContent.removeClass('enter-left enter-right');
		});
		eventsContent.css('height', selectedContentHeight+'px');
	}

	function updateOlderEvents(event) {
		event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
	}

	function getTranslateValue(timeline) {
		var timelineStyle = window.getComputedStyle(timeline.get(0), null),
			timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
         		timelineStyle.getPropertyValue("-moz-transform") ||
         		timelineStyle.getPropertyValue("-ms-transform") ||
         		timelineStyle.getPropertyValue("-o-transform") ||
         		timelineStyle.getPropertyValue("transform");

        if( timelineTranslate.indexOf('(') >=0 ) {
        	var timelineTranslate = timelineTranslate.split('(')[1];
    		timelineTranslate = timelineTranslate.split(')')[0];
    		timelineTranslate = timelineTranslate.split(',');
    		var translateValue = timelineTranslate[4];
        } else {
        	var translateValue = 0;
        }

        return Number(translateValue);
	}

	function setTransformValue(element, property, value) {
		element.style["-webkit-transform"] = property+"("+value+")";
		element.style["-moz-transform"] = property+"("+value+")";
		element.style["-ms-transform"] = property+"("+value+")";
		element.style["-o-transform"] = property+"("+value+")";
		element.style["transform"] = property+"("+value+")";
	}

	//based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
	function parseDate(events) {
		var dateArrays = [];
		events.each(function(){
			var dateComp = $(this).data('date').split('/'),
				newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
			dateArrays.push(newDate);
		});
	    return dateArrays;
	}

	function parseDate2(events) {
		var dateArrays = [];
		events.each(function(){
			var singleDate = $(this),
				dateComp = singleDate.data('date').split('T');
			if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
				var dayComp = dateComp[0].split('/'),
					timeComp = dateComp[1].split(':');
			} else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
				var dayComp = ["2000", "0", "0"],
					timeComp = dateComp[0].split(':');
			} else { //only DD/MM/YEAR
				var dayComp = dateComp[0].split('/'),
					timeComp = ["0", "0"];
			}
			var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
			dateArrays.push(newDate);
		});
	    return dateArrays;
	}

	function daydiff(first, second) {
	    return Math.round((second-first));
	}

	function minLapse(dates) {
		//determine the minimum distance among events
		var dateDistances = [];
		for (i = 1; i < dates.length; i++) {
		    var distance = daydiff(dates[i-1], dates[i]);
		    dateDistances.push(distance);
		}
		return Math.min.apply(null, dateDistances);
	}

	/*
		How to tell if a DOM element is visible in the current viewport?
		http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	*/
	function elementInViewport(el) {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while(el.offsetParent) {
		    el = el.offsetParent;
		    top += el.offsetTop;
		    left += el.offsetLeft;
		}

		return (
		    top < (window.pageYOffset + window.innerHeight) &&
		    left < (window.pageXOffset + window.innerWidth) &&
		    (top + height) > window.pageYOffset &&
		    (left + width) > window.pageXOffset
		);
	}

	function checkMQ() {
		//check if mobile or desktop device
		return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	}
});
/**fine timeline**/

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
   const margin = 0
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
