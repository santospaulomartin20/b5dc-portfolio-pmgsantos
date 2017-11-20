$(window).scroll(function() {
  if ($(window).scrollTop()) {
    $('header').addClass('shrink');
 	// $('header').removeClass('hide-me');
  } else {
    // $('header').addClass('hide-me');
    $('header').removeClass('shrink');
  }
});

$(document).ready(function(){

	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}	

	$(window).scroll(function() {
		$('#desH1').each(function() {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animated');
				$(this).addClass('fadeInUp');
			} else {
				$(this).removeClass('animated');
				$(this).removeClass('fadeInUp');
			}
		});

		$('#desH2').each(function() {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animated');
				$(this).addClass('fadeInRight');
			} else {
				$(this).removeClass('animated');
				$(this).removeClass('fadeInRight');
			}
		});

		$('#desH3').each(function() {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animated');
				$(this).addClass('fadeInLeft');
			} else {
				$(this).removeClass('animated');
				$(this).removeClass('fadeInRight');
			}
		});

		$('#socialicons').each(function() {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animated');
				$(this).addClass('fadeInRight');
			} else {
				$(this).removeClass('animated');
				$(this).removeClass('fadeInLeft');
			}
		});

		$('#para1').each(function() {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animated');
				$(this).addClass('fadeInUp');	
			// } else {
			// 	$(this).removeClass('animated');
			// 	$(this).removeClass('fadeInUp');
			}
		});
		$('#para2').each(function() {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animated');
				$(this).addClass('fadeInUp');	
			// } else {
			// 	$(this).removeClass('animated');
			// 	$(this).removeClass('fadeInUp');
			}
		});
		$('#para3').each(function() {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animated');
				$(this).addClass('fadeInUp');	
			// } else {
			// 	$(this).removeClass('animated');
			// 	$(this).removeClass('fadeInUp');
			}
		});
		$('#showMe').each(function() {
			if (isScrolledIntoView(this) === true) {
				$(this).addClass('animated');
				$(this).addClass('zoomIn');
	
			} else {
				
			}
		});
	});

});

function move() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    };

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };
    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 2px solid black}";
        document.body.appendChild(css);
    };

