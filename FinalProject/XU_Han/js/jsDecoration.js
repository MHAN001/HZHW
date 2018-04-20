
	$(document).ready(function () {
	  //HTML/Text

      $('.article').draggable({ handle: ".titlea" });
      $('.article').mouseenter(function(){
      $(this).css('zIndex', 1);
      });

			//get data
			$.get("http://127.0.0.1:8000/article/origin/", function(res){
				document.getElementById("origin").innerHTML= res.content;
			})
			$.get("http://127.0.0.1:8000/article/science/", function(res){
				document.getElementById("science").innerHTML= res.content;
			})
			
	});

	$(document).ready(function() {
    $(".title").lettering();
    animation();
  }, 1000);

  function animation() {
    var title1 = new TimelineMax();
    title1.staggerFromTo(".title span", 0.5,
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
  }


	//full pages
	$(document).ready(function(){
		$('#fullpage').fullpage({
			//导航
			menu: '#menu',
			lockAnchors: false,
			anchors:['firstPage', 'secondPage'],
			navigation: false,
			navigationPosition: 'right',
			navigationTooltips: ['firstSlide', 'secondSlide'],
			showActiveTooltip: false,
			slidesNavigation: false,
			slidesNavPosition: 'bottom',

			//滚动
			css3: true,
			scrollingSpeed: 700,
			autoScrolling: true,
			fitToSection: true,
			fitToSectionDelay: 1000,
			scrollBar: false,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			loopBottom: false,
			loopTop: false,
			loopHorizontal: true,
			continuousVertical: false,
			continuousHorizontal: false,
			scrollHorizontally: false,
			interlockedSlides: false,
			dragAndMove: false,
			offsetSections: false,
			resetSliders: false,
			fadingEffect: false,
			normalScrollElements: '#element1, .element2',
			scrollOverflow: false,
			scrollOverflowReset: false,
			scrollOverflowOptions: null,
			touchSensitivity: 15,
			normalScrollElementTouchThreshold: 5,
			bigSectionsDestination: null,

			//可访问
			keyboardScrolling: true,
			animateAnchor: true,
			recordHistory: true,

			//设计
			controlArrows: true,
			verticalCentered: true,
			sectionsColor : ['#ccc', '#fff'],
			paddingTop: '3em',
			paddingBottom: '10px',
			fixedElements: '#header, .footer',
			responsiveWidth: 0,
			responsiveHeight: 0,
			responsiveSlides: false,
			parallax: false,
			parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

			//自定义选择器
			sectionSelector: '.section',
			slideSelector: '.slide',

			lazyLoading: true,

			//事件
			onLeave: function(index, nextIndex, direction){},
			afterLoad: function(anchorLink, index){},
			afterRender: function(){},
			afterResize: function(){},
			afterResponsive: function(isResponsive){},
			afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
			onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
		});
	})
